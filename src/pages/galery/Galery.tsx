import { createEffect, createResource, createSignal, Suspense } from 'solid-js';
import CitationWide from '../../components/citation-wide/CitationWide';
import SpiralLoader from '../../components/loaders/SpiralLoader';
import PageHeader from '../../components/page-header/PageHeader';
import Rewards from '../../components/rewards/Rewards';
import { fetchAPI } from '../../modules/api';
import { APIParams } from '../../modules/api_types';
import './galery.scss';

const Galery = () => {
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
      setTimeout(setTiles(galeries()?.data as any), 1000);
    }
  });
  return (
    <div class='galeries'>
      <Suspense fallback={<SpiralLoader />}>
        <PageHeader tiles={tiles()}></PageHeader>
      </Suspense>
      <h2>Mes galeries photo</h2>
      <div class='galeries__content'>
        <CitationWide
          text="La photographie devient de l'art quand elle dévoile l'âme et révèle l'authenticité du sujet."
          author='Monique Moreau'
        />
      </div>
      <Rewards></Rewards>
    </div>
  );
};

export default Galery;
