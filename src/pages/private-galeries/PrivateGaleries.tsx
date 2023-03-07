import CtaBanner from '../../components/cta-banner/CtaBanner';
import { For } from 'solid-js';
import './privateGaleries.scss';
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
  return (
    <div class='private-galeries'>
      <div class='galeries__header'>
        <h1>Vos photos</h1>
        <span>Votre galerie privée suite à une séance avec moi</span>
      </div>
      <ul>
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
