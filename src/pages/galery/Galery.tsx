import { createEffect, createResource, createSignal, Suspense } from 'solid-js';
import CitationWide from '../../components/citation-wide/CitationWide';
import CtaBanner from '../../components/cta-banner/CtaBanner';
import SpiralLoader from '../../components/loaders/SpiralLoader';
import PageHeader from '../../components/page-header/PageHeader';
import Rewards from '../../components/rewards/Rewards';
import { fetchAPI } from '../../modules/api';
import { APIParams } from '../../modules/api_types';
import { observer } from '../../modules/utils';
import './galery.scss';

const Galery = () => {
  const urlParamsObject: APIParams = {
    publicationState: 'live',
    populate: '*',
  };
  const [galeries] = createResource(() =>
    fetchAPI('galeries', urlParamsObject)
  );
  createEffect(() => {
    if (!galeries.loading) {
      const targets = document.querySelectorAll('.reveal');
      targets.forEach(function (target) {
        observer.observe(target);
      });
    }
  });
  return (
    <div class='galeries'>
      <Suspense fallback={<SpiralLoader />}>
        <div class='reveal'>
          <h2>Mes galeries photo</h2>
          <PageHeader tiles={galeries()?.data}></PageHeader>
        </div>
      </Suspense>
      <div class='galeries__content reveal'>
        <CitationWide
          text="La photographie devient de l'art quand elle dévoile l'âme et révèle l'authenticité du sujet."
          author='Monique Moreau'
        />
      </div>
      <div class='reveal'>
        <Rewards></Rewards>
      </div>
      <div class='reveal'>
        <CtaBanner />
      </div>
    </div>
  );
};

export default Galery;
