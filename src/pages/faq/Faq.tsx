import {
  onMount,
  For,
  createResource,
  Suspense,
  Show,
  createEffect,
  on,
} from 'solid-js';
import CtaBanner from '../../components/cta-banner/CtaBanner';
import { observer } from '../../modules/utils';
import { Title } from 'solid-meta';
import './faq.scss';
import { fetchPage } from '../../modules/api';
import SpiralLoader from '../../components/loaders/SpiralLoader';
function Faq() {
  let items: any[];

  const [qa] = createResource(() => fetchPage('faq'));

  onMount(() => {
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(function (target) {
      observer.observe(target);
    });
  });

  createEffect(() => {
    if (!qa.loading)
      items = document.querySelectorAll('.accordion button') as any;
  });

  const toggleAccordion = (event: any) => {
    const itemToggle = event.target.getAttribute('aria-expanded');

    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
      event.target.setAttribute('aria-expanded', 'true');
    }
  };
  return (
    <div class='faq'>
      <Title>FAQ - Karine Lefort Photographie</Title>
      <div class='container'>
        <h2>Questions récurrentes</h2>
        <Show
          when={!qa.loading}
          fallback={
            <div class='faq-loader'>
              <SpiralLoader />
            </div>
          }
        >
          <div class='accordion'>
            <For each={qa().question}>
              {(question: { Question: string; Reponse: string }, index) => {
                if (index() >= 4) return;
                return (
                  <div
                    class='accordion-item reveal-loaded'
                    onClick={(event) => toggleAccordion(event)}
                  >
                    <button
                      id={`accordion-button-${index()}`}
                      aria-expanded='false'
                    >
                      <span class='accordion-title'>{question.Question}</span>
                      <span class='icon' aria-hidden='true'></span>
                    </button>
                    <div class='accordion-content'>
                      <p>{question.Reponse}</p>
                    </div>
                  </div>
                );
              }}
            </For>
          </div>
        </Show>
      </div>
      <div class='reveal'>
        <CtaBanner />
      </div>
    </div>
  );
}

export default Faq;
