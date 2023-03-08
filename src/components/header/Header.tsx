import { NavLink } from '@solidjs/router';
import { createSignal, For, Show } from 'solid-js';
import RsPictos from '../rs-pictos/RsPictos';
import './header.scss';
import SideNav from './side-nav/SideNav';

export type MenuItem = {
  name: string;
  link: string;
};

const Header = (props: any) => {
  const [sideNavStatus, setSideNavStatus] = createSignal(false);
  console.log('props.scrolled', props.scrolled);
  const toggleSideNav = (event: boolean) => {
    if (event) setSideNavStatus(event);
    else setSideNavStatus(!sideNavStatus());
  };

  const menu: MenuItem[] = [
    { name: 'Accueil', link: '' },
    { name: 'Photos', link: '/photos' },
    { name: 'Tarifs', link: '/tarifs' },
    { name: 'Iris', link: '/iris' },
    { name: 'Concours', link: '/concours' },
    { name: 'Vos photos', link: '/galeries-privees' },
    { name: 'FAQ', link: '/faq' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header class={`navbar ${props.scrolled ? '' : 'nav-stacked'}`}>
      <button
        onClick={() => toggleSideNav(true)}
        class='navbar__burger-menu--button'
      ></button>
      <a href='/' class='navbar__title'>
        Karine Lefort Photographie
      </a>
      <div class='navbar__horizontal--container'>
        <div class='horizontal-nav'>
          <div class='horizontal-nav--inner'></div>
          <Show when={!props.scrolled}>
            <a href='/' class='navbar__title'>
              Karine Lefort Photographie
            </a>
          </Show>
          <For each={menu}>
            {(item) => {
              return (
                <NavLink
                  end
                  href={item.link}
                  activeClass='active'
                  class='horizontal-nav__link'
                >
                  {item.name}
                </NavLink>
              );
            }}
          </For>
          <RsPictos pictoHeights='25' />
        </div>
      </div>
      <div class='navbar__side--container'>
        <SideNav
          status={sideNavStatus()}
          menu={menu}
          setSideNavStatus={(val: boolean) => setSideNavStatus(val)}
        />
      </div>
    </header>
  );
};

export default Header;
