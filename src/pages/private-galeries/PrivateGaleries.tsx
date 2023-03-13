import CtaBanner from '../../components/cta-banner/CtaBanner';
import { For, onMount } from 'solid-js';
import './privateGaleries.scss';
import { observer } from '../../modules/utils';
function PrivateGaleries() {
  const galeries = [
    {
      title: 'Julie',
      link: '#',
    },
    {
      title: 'Arnaud',
      link: '#',
    },
    {
      title: 'Duchamp',
      link: '#',
    },
    {
      title: 'Luche',
      link: '#',
    },
    {
      title: 'Kempen',
      link: '#',
    },
    {
      title: 'Agathe',
      link: '#',
    },
  ];

  onMount(()=>{
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(function (target) {
      observer.observe(target);
    });
  })
  return (
    <div class='private-galeries'>
      <div class='galeries__header reveal'>
        <h1>Vos photos</h1>
        <span>Votre galerie privée suite à une séance avec moi</span>
      </div>
      <ul class='reveal'>
        <For each={galeries}>
          {(galery: any, index) => {
            return (
              <li>
                <div
                  class='private-galery-item fade-in-bck'
                  style={`animation-delay: ${index() * 120}ms`}
                >
                  <span class='lock'></span> {galery.title}
                </div>
              </li>
            );
          }}
        </For>
      </ul>
      <CtaBanner />
    </div>
  );
}

export default PrivateGaleries;
