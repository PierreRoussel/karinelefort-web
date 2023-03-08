import { createEffect, createResource, createSignal, Suspense } from 'solid-js';
import CitationWide from '../../components/citation-wide/CitationWide';
import CtaBanner from '../../components/cta-banner/CtaBanner';
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
      setTiles(galeries()?.data as any);
    }
  });
  return (
    <div class='galeries'>
      <h2>Mes galeries photo</h2>
      <Suspense fallback={<SpiralLoader></SpiralLoader>}>
        <PageHeader tiles={tiles()}></PageHeader>
      </Suspense>
      <div class='galeries__content'>
        <CitationWide
          text="La photographie devient de l'art quand elle dévoile l'âme et révèle l'authenticité du sujet."
          author='Monique Moreau'
        />
      </div>
      <Rewards></Rewards>
      <CtaBanner />
    </div>
  );
};

export default Galery;
