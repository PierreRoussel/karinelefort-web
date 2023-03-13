import { useParams } from '@solidjs/router';
import {
  createEffect,
  createResource,
  createSignal,
  For,
  Suspense,
} from 'solid-js';
import CtaBanner from '../../components/cta-banner/CtaBanner';
import CtaBtn from '../../components/CtaBtn/CtaBtn';
import SpiralLoader from '../../components/loaders/SpiralLoader';
import { fetchAPI } from '../../modules/api';
import { APIParams } from '../../modules/api_types';
import './tarif.scss';

function TarifItem() {
  const params = useParams();
  const urlParamsObject: APIParams = {
    publicationState: 'live',
    filters: `[slug][$eq]=${params.slug}`,
    populate: 'deep',
  };

  const [galerieItems] = createResource(() =>
    fetchAPI('galeries', urlParamsObject)
  );

  const [offres, setOffres] = createSignal([]);
  createEffect(() => {
    if (!galerieItems.loading) {
      if (!galerieItems()?.data.length) return;
      //@ts-ignore
      const datas = galerieItems()?.data[0].attributes;
      console.log("🚀 ~ datas:", datas)
      setOffres(datas.Offre as any);
    }
  });
  return (
    <Suspense fallback={<SpiralLoader/>}>
      <div class='tarif-item'>
        <div class='tarif-header'>
          <h1>Votre shooting {galerieItems()?.data[0].attributes.Nom}</h1>
          <p style={'max-width:60vw;margin:auto;text-align:left'}>
            {galerieItems()?.data[0].attributes.Description}
          </p>
        </div>
        <div class='offres-container'>
          <For each={offres()}>
            {(offre: any, index) => {
              console.log('🚀 ~ offre:', offre);
              return (
                <div class='offre-item'>
                  <div class='offre-description'>
                    <h2>{offre.Titre}</h2>
                    <p>{offre.Description}</p>
                    <CtaBtn reversed={true} link={'https://www.fotostudio.io/lead_forms/3762'} btnTitle={`Réserver une séance ${offre.Titre}`} />
                  </div>
                  <div
                    class='offre-image'
                    style={`background-image:url(${offre.Image.data.attributes.url})`}
                  ></div>
                </div>
              );
            }}
          </For>
        </div>
        <CtaBanner text="Besoin d'un photographe ?" />
      </div>
    </Suspense>
  );
}

export default TarifItem;
