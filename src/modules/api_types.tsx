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

export type StrapiChildItem = {
  attributes: unknown;
  id?: number;
};

export type StrapiItem = {
  data: [];
};

export type Category = {
  Couleur: string;
  Description: string;
  Nom: string;
  createdAt: string;
  locale: string;
  updatedAt: string;
};

export interface CtaWrapper {
  caller: string;
  service: string;
  image: Image;
  link: string;
  backgroundColor: string;
}

export interface Image {
  url: string;
  alt: string;
}
export interface TextWithLink {
  text: string;
  link?: string;
}

export interface StrapiObject {
  attributes: unknown;
  id: number;
}

export interface Resumee {
  presA: string;
  presB: string;
  presC: string;
  imgUrl: string;
}
