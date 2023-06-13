import CtaBanner from '../../components/cta-banner/CtaBanner';
import {
  For,
  createEffect,
  createResource,
  Suspense,
  createSignal,
  Show,
} from 'solid-js';
import { observer } from '../../modules/utils';
import { fetchAPI } from '../../modules/api';
import { APIParams } from '../../modules/api_types';
import './privateGaleries.scss';
import SpiralLoader from '../../components/loaders/SpiralLoader';
import { Portal } from 'solid-js/web';
import { Title } from 'solid-meta';

function PrivateGaleries() {
  const [galeryIdx, setGaleryIdx] = createSignal(-1);
  const [input, setInput] = createSignal('');
  const [info, setInfo] = createSignal('');
  const [loading, setLoading] = createSignal(false);
  const [privateGalery, setPrivateGalery] = createSignal(false);
  const [liked, setLiked] = createSignal([])

  const urlParamsObject: APIParams = {
    publicationState: 'live',
    populate: '*',
  };

  const [galeries] = createResource(() =>
    fetchAPI('private-galeries', urlParamsObject)
  );

  const [galerieItems, { refetch }] = createResource(() => {
    if (!privateGalery()) return;
    return fetchAPI(`private-galeries/${privateGalery()}`, {
      publicationState: 'live',
      populate: 'deep',
    });
  });

  createEffect(() => {
    if (!galeries.loading) {
      const targets = document.querySelectorAll('.reveal');
      targets.forEach(function (target) {
        observer.observe(target);
      });
    }
  });

  createEffect(() => {
    if (!galerieItems.loading) {

      const targets = document.querySelectorAll('.reveal');
      targets.forEach(function (target) {
        observer.observe(target);
      });
    }
  });

  function compareAndRedirect() {
    setLoading(true);
    setInfo('Un instant...');
    //@ts-ignore
    if (input() === galeries().data[galeryIdx()].attributes.Mot_de_passe) {
      setTimeout(function () {
        setLoading(false);
        //@ts-ignore
        setPrivateGalery(galeries().data[galeryIdx()].id);
        refetch();
      }, 400);
    } else {
      setTimeout(function () {
        setInput('');
        setInfo('Mot de passe incorrect');
        setLoading(false);
      }, 400);
    }
  }

  function selectGalery(galeryItem: any) {
    //@ts-ignore
    setGaleryIdx(galeries()?.data.indexOf(galeryItem));
  }

  return (
    <div class='private-galeries'>
      <Title>Vos photos - Karine Lefort Photographie</Title>
      <div class='galeries__header reveal'>
        <h1>Vos photos</h1>
        <span>Votre galerie privée suite à une séance avec moi</span>
      </div>
      <Show when={privateGalery()}>
        <Suspense fallback={<SpiralLoader />}>
          <div class='grid-container'>
            <For each={galerieItems()?.data.attributes.Photos.data}>
              {(photo: any, index) => {
                return (
                  <div
                    onClick={() => console.log('like', photo)}
                    class='grid-item fade-in-bck'
                    style={`animation-delay: ${index() * 80}ms`}
                  >
                    <img
                      src={photo['attributes'].url.toString()}
                      alt={photo['attributes'].alternativeText}
                      loading='lazy'
                    />
                    <span className="heart"></span>
                  </div>
                );
              }}
            </For>
          </div>
        </Suspense>
      </Show>
      <Show when={!privateGalery()}>
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
          <Show when={galeryIdx() !== -1}>
            <Portal>
              <div
                class={`password-modal-overlay ${
                  !galeries.loading && galeryIdx() !== -1 ? 'show-modal' : ''
                }`}
                onClick={() => {
                  setGaleryIdx(-1);
                  setInput('');
                  setLoading(false);
                }}
              ></div>
              <fieldset
                class={`password-modal-content reveal-loaded ${
                  !galeries.loading && galeryIdx() !== -1 ? 'show-modal' : ''
                }`}
                disabled={info() === 'Correct'}
              >
                <Show when={loading()}>
                  <div
                    style={
                      'position:absolute;inset:0;backdrop-filter:blur(2px);z-index:1'
                    }
                  >
                    <SpiralLoader />
                  </div>
                </Show>
                <span>
                  Accéder à la galerie{' '}
                  <i>
                    "
                    {galeryIdx() !== -1 &&
                      //@ts-ignore
                      galeries()?.data[galeryIdx()].attributes.Nom}
                  </i>
                  "
                </span>
                <div class='input-container'>
                  <input
                    //@ts-ignore
                    onChange={(val) => setInput(val.target.value)}
                    value={input()}
                    type='text'
                    id='input'
                    required
                  />
                  <label for='input' class='label'>
                    Mot de passe
                  </label>
                  <div class='underline'></div>
                </div>
                <Show when={info().length}>
                  <span style='color:hsl(0deg, 54%, 75%)'>{info()}</span>
                </Show>
                <button
                  onClick={compareAndRedirect}
                  type='submit'
                  class={`btn`}
                  disabled={!input().length}
                >
                  <div class='btn__outline'></div>
                  Entrer
                </button>
              </fieldset>
            </Portal>
          </Show>
        </Suspense>
      </Show>
      <CtaBanner />
    </div>
  );
}

export default PrivateGaleries;
