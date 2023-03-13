import { useParams } from '@solidjs/router';
import { createEffect, createResource, createSignal, For } from 'solid-js';
import CtaBanner from '../../components/cta-banner/CtaBanner';
import { fetchAPI } from '../../modules/api';
import { APIParams } from '../../modules/api_types';

function GaleryItem() {
  const params = useParams();
  const urlParamsObject: APIParams = {
    publicationState: 'live',
    filters: `[slug][$eq]=${params.slug}`,
    populate: '*',
  };

  const [galerieItems] = createResource(() =>
    fetchAPI('galeries', urlParamsObject)
  );

  const [photos, setPhotos] = createSignal([]);
  const [title, setTitle] = createSignal([]);
  createEffect(() => {
    if (!galerieItems.loading && galerieItems() !== undefined) {
      //@ts-ignore
      const datas = galerieItems()?.data[0].attributes;
      setPhotos(datas.photos.data as any);
      setTitle(datas.Nom);
    }
  });
  return (
    <div class='galery-item'>
      <h1>{title()}</h1>
      <div class='grid-container'>
        <For each={photos()}>
          {(photo: any, index) => {
            return (
              <div
                class='grid-item fade-in-bck'
                style={`animation-delay: ${index() * 80}ms`}
              >
                <img
                  src={photo['attributes'].url.toString()}
                  alt=''
                  srcset=''
                />
              </div>
            );
          }}
        </For>
      </div>
      <CtaBanner />
    </div>
  );
}

export default GaleryItem;
