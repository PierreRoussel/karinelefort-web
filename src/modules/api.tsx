import axios from 'axios';

export type publicationState = 'live' | 'preview';

// https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/api-parameters.html
export type APIParams = {
  publicationState?: publicationState;
  sort?: string;
  filters?: string;
  populate?: string;
  fields?: string;
  locale?: string;
};

export type StrapiItem = {
  data: [];
  status: number;
  errorMsg?: string;
};

export type Category = {
  Couleur: string;
  Description: string;
  Nom: string;
  createdAt: string;
  locale: string;
  updatedAt: string;
};

export function getStrapiURL(path: string) {
  return `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${path}`;
}

const stringifyAPIParams = (options: APIParams): string => {
  const stringified = JSON.stringify(options);
  return stringified
    .replaceAll('":"[', '[')
    .replaceAll('":"', '=')
    .replaceAll('"', '')
    .replaceAll(':', '=')
    .replaceAll(',', '&')
    .replaceAll('{', '')
    .replaceAll('}', '');
};

export async function fetchAPI(
  path: string,
  urlParamsObject: APIParams,
  options = {},
  type?: boolean,
  postObj?: any
) {
  const stringifiedOptions = stringifyAPIParams(urlParamsObject);
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${import.meta.env.VITE_STRAPI_KEY}`,
    },
    ...options,
  };
  const requestUrl = `${getStrapiURL(
    `/api/${path}${stringifiedOptions.length ? `?${stringifiedOptions}` : ''}`
  )}`;

  const response = !type
    ? await axios.get(requestUrl, mergedOptions)
    : await axios.post(requestUrl, postObj);

  // Handle response
  if (response.statusText !== 'OK' && response.status !== 200) {
    console.error(new Error(`An error occured please try again`));
    return {
      data: [],
      error: 'response.statusText',
      status: response.status,
    } as StrapiItem;
  }
  return (await response.data) as StrapiItem;
}

export async function fetchPage(
  category: string,
  slug?: string,
  locale = 'fr-FR'
) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${import.meta.env.VITE_STRAPI_KEY}`,
  };
  const requestUrl = `${getStrapiURL(
    `/api/${category}?filters[locale][$eq]=${locale}&populate=*${slug ? '&filters[slug][$eq]=':''}`
  )}`;
  const response = await axios.get(requestUrl, { headers });

  // Handle response
  if (response.statusText !== 'OK' && response.status !== 200) {
    console.error(response);
    throw new Error(`An error occured please try again`);
  }
  return await response.data.data.attributes;
}
