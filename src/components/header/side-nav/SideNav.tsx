import { Component, createEffect, createSignal, onMount, Show } from 'solid-js';
import { MenuItem } from '../Header';

type SideNavProps = {
  status: boolean;
  menu: MenuItem[];
  setSideNavStatus: Function;
};

const SideNav = (props: SideNavProps) => {

  return (
    <div class={`side-nav--container ${props.status ? 'displayed' : ''}`}>
      <div
        class='side-nav__overlay'
        onClick={() => props.setSideNavStatus(false)}
      ></div>
      <div class='side-nav'>
        <span class='side-nav--title'>
          Karine Lefort <br />
          Photographie
        </span>
        <button
          onClick={() => props.setSideNavStatus(false)}
          class='side-nav__close--button'
        >
          X
        </button>
      </div>
    </div>
  );
};

export default SideNav;
