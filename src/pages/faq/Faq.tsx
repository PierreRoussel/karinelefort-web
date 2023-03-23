import { onMount, For } from 'solid-js';
import CtaBanner from '../../components/cta-banner/CtaBanner';
import { observer } from '../../modules/utils';
import {Title} from 'solid-meta'
import './faq.scss';
function Faq() {
  let items: any[];
  const questions = [
    {
      question: 'Une question intéressante ?',
      reponse:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis minus labore, impedit veritatis enim itaque iure mollitia nemo ut! Nemo, ducimus. Reiciendis praesentium cupiditate culpa suscipit, dolor maiores quam ipsa.',
    },
    {
      question: 'Une question intéressante 2 ?',
      reponse:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis minus labore, impedit veritatis enim itaque iure mollitia nemo ut! Nemo, ducimus. Reiciendis praesentium cupiditate culpa suscipit, dolor maiores quam ipsa.',
    },
    {
      question: 'Une question intéressante 3 ?',
      reponse:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis minus labore, impedit veritatis enim itaque iure mollitia nemo ut! Nemo, ducimus. Reiciendis praesentium cupiditate culpa suscipit, dolor maiores quam ipsa.',
    },
    {
      question: 'Une question intéressante 4 ?',
      reponse:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis minus labore, impedit veritatis enim itaque iure mollitia nemo ut! Nemo, ducimus. Reiciendis praesentium cupiditate culpa suscipit, dolor maiores quam ipsa.',
    },
  ];
  onMount(() => {
    items = document.querySelectorAll('.accordion button') as any;
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(function (target) {
      observer.observe(target);
    });
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
        <div class='accordion'>
          <For each={questions}>
            {(question, index) => {
              if (index() >= 4) return;
              return (
                <div
                  class='accordion-item reveal'
                  onClick={(event) => toggleAccordion(event)}
                >
                  <button
                    id={`accordion-button-${index()}`}
                    aria-expanded='false'
                  >
                    <span class='accordion-title'>{question.question}</span>
                    <span class='icon' aria-hidden='true'></span>
                  </button>
                  <div class='accordion-content'>
                    <p>{question.reponse}</p>
                  </div>
                </div>
              );
            }}
          </For>
        </div>
      </div>
      <div class='reveal'>
        <CtaBanner />
      </div>
    </div>
  );
}

export default Faq;
