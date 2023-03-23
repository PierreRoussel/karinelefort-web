import { createEffect, Suspense,createResource, createSignal } from 'solid-js';
import CitationWide from '../../components/citation-wide/CitationWide';
import SpiralLoader from '../../components/loaders/SpiralLoader';
import PageHeader from '../../components/page-header/PageHeader';
import SquaredGalery from '../../components/squared-galery/SquaredGalery';
import { fetchAPI } from '../../modules/api';
import { APIParams } from '../../modules/api_types';
import { observer } from '../../modules/utils';
import {Title} from 'solid-meta'

function Tarif() {
  const imageGaleryImages: any[] = [
    { url: '/61ccc9046f411597372612.jpg', alt: '' },
    { url: '/615a17326ab84037154751.jpg', alt: '' },
    { url: '/62c58e2f4d4d7603225062.jpg', alt: '' },
    { url: '/616c731a3c80f796838716.jpg', alt: '' },
    {
      url: '/278304567_708203026882538_4413979470828640160_n.jpg',
      alt: '',
    },
    {
      url: '/270297889_4498951966841054_2309659315178713093_n.jpg',
      alt: '',
    },
  ];
  const urlParamsObject: APIParams = {
    publicationState: 'live',
    populate: '*',
  };
  const [galeries] = createResource(() =>
    fetchAPI('galeries', urlParamsObject)
  );
  const [tiles, setTiles] = createSignal([]);
  createEffect(() => {
    if (!galeries.loading) {
      const targets = document.querySelectorAll('.reveal');
      targets.forEach(function (target) {
        observer.observe(target);
      });
      setTiles(galeries()?.data as any);
    }
  });
  return (
    <div class='galeries'>
      <Title>Mes prestations - Karine Lefort Photographie</Title>

      <Suspense fallback={<SpiralLoader/>}>
      <div class='reveal'>
        <PageHeader
          title='Prestations'
          subtitle='Retrouvez mes différentes prestations photo'
          tiles={galeries()?.data}
        ></PageHeader>
      </div>
      </Suspense>
      <div class='galeries__content reveal'>
        <CitationWide
          text="La photographie devient de l'art quand elle dévoile l'âme et révèle l'authenticité du sujet."
          author='Monique Moreau'
        />
      </div>
      <div class='reveal'>
        <SquaredGalery images={imageGaleryImages} />
      </div>
    </div>
  );
}

export default Tarif;
