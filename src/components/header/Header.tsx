import { NavLink } from '@solidjs/router';
import { Component, createEffect, createSignal, For, Show } from 'solid-js';
import './header.scss';
import SideNav from './side-nav/SideNav';

export type MenuItem = {
  name: string;
  link: string;
};

const Header: Component = () => {
  const [sideNavStatus, setSideNavStatus] = createSignal(false);

  const toggleSideNav = (event: boolean) => {
    if (event) setSideNavStatus(event);
    else setSideNavStatus(!sideNavStatus());
  };

  const menu: MenuItem[] = [
    { name: 'Accueil', link: '' },
    { name: 'Photos', link: '/photos' },
    { name: 'Tarifs', link: '/tarifs' },
    { name: 'Vos photos', link: '/galeries-privees' },
    { name: 'Infos&Tarifs', link: '/info-et-tarifs' },
  ];

  return (
    <header class='navbar'>
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
          <For each={menu}>
            {(item) => {
              return (
                <NavLink
                  href={item.link}
                  activeClass='active'
                  class='horizontal-nav__link'
                >
                  {item.name}
                </NavLink>
              );
            }}
          </For>
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
