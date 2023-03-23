import CtaBanner from '../../components/cta-banner/CtaBanner';
import {
  For,
  createEffect,
  createResource,
  Suspense,
  createSignal,
} from 'solid-js';
import { observer } from '../../modules/utils';
import { fetchAPI } from '../../modules/api';
import { APIParams } from '../../modules/api_types';
import './privateGaleries.scss';
import SpiralLoader from '../../components/loaders/SpiralLoader';
import { Portal } from 'solid-js/web';

function PrivateGaleries() {
  const [galeryIdx, setGaleryIdx] = createSignal(-1);
  const urlParamsObject: APIParams = {
    publicationState: 'live',
    populate: '*',
  };
  const [galeries] = createResource(() =>
    fetchAPI('private-galeries', urlParamsObject)
  );
  createEffect(() => {
    if (!galeries.loading) {
      const targets = document.querySelectorAll('.reveal');
      targets.forEach(function (target) {
        observer.observe(target);
      });
    }
  });
  function selectGalery(galeryItem: any) {
    //@ts-ignore
    setGaleryIdx(galeries()?.data.indexOf(galeryItem));
    console.log('galeryItem', galeryItem);
  }
  return (
    <div class='private-galeries'>
      <div class='galeries__header reveal'>
        <h1>Vos photos</h1>
        <span>Votre galerie privée suite à une séance avec moi</span>
      </div>
      <Suspense fallback={<SpiralLoader />}>
        <ul class='reveal'>
          <For each={galeries()?.data}>
            {(galery: any, index) => {
              return (
                <li onClick={() => selectGalery(galery)}>
                  <div
                    class='private-galery-item fade-in-bck'
                    style={`animation-delay: ${index() * 120}ms`}
                  >
                    <span class='lock'></span> {galery.attributes.Nom}
                  </div>
                </li>
              );
            }}
          </For>
        </ul>
        <Portal>
          <div
            class={`password-modal-overlay ${
              !galeries.loading && galeryIdx() !== -1 ? 'show-modal' : ''
            }`}
            onClick={() => setGaleryIdx(-1)}
          ></div>
          <div
            class={`password-modal-content reveal-loaded ${
              !galeries.loading && galeryIdx() !== -1 ? 'show-modal' : ''
            }`}
          >
            <span>
              Accéder à la galerie{' '}
              <i>
                "
                {galeryIdx() !== -1 &&
                  galeries()?.data[galeryIdx()].attributes.Nom}
              </i>
              "
            </span>
            <div class='input-container'>
              <input type='text' id='input' required />
              <label for='input' class='label'>
                Mot de passe
              </label>
              <div class='underline'></div>
            </div>
            <button class={`btn`}>
                <div class='btn__outline'></div>
                Entrer
              </button>
          </div>
        </Portal>
      </Suspense>
      <CtaBanner />
    </div>
  );
}

export default PrivateGaleries;
