import { createResource, Suspense, createEffect, For } from 'solid-js';
import CtaBanner from '../../components/cta-banner/CtaBanner';
import SpiralLoader from '../../components/loaders/SpiralLoader';
import { fetchPage } from '../../modules/api';
import { Title } from 'solid-meta';
import { observer } from '../../modules/utils';
import './concours.scss';
function Concours() {
  /** LIFECYCLE */
  const [concours] = createResource(() => fetchPage('concour'));

  createEffect(() => {
    if (!concours.loading) {
      const targets = document.querySelectorAll('.reveal');
      targets.forEach(function (target) {
        observer.observe(target);
      });
    }
  });
  return (
    <div class='concours'>
      <Title>Mes prix - Karine Lefort Photographie</Title>

      <Suspense fallback={<SpiralLoader />}>
        <h1 class='reveal'>{concours()?.Titre || 'Mes récompenses'}</h1>
        <div class='grid-container reveal'>
          <For each={concours()?.Recompenses}>
            {(photo: any, index) => {
              return (
                <div
                  class='grid-item fade-in-bck'
                  style={`animation-delay: ${index() * 80}ms`}
                >
                  <img
                    src={photo?.Photo.data['attributes'].url.toString()}
                    loading='lazy'
                    alt={photo?.Photo.data['attributes'].url.alternativeText}
                  />
                  <span>{photo?.Libelle || ''}</span>
                </div>
              );
            }}
          </For>
        </div>
      </Suspense>
      <div class='reveal'>
        <CtaBanner />
      </div>
    </div>
  );
}

export default Concours;
