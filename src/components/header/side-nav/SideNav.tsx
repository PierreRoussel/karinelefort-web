import { NavLink } from '@solidjs/router';
import { For } from 'solid-js';
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
        <For each={props.menu}>
          {(item) => {
            if (item.link === '')
              return (
                <NavLink
                  end
                  href={item.link}
                  activeClass='active'
                  class='side-nav__link'
                  onClick={() => props.setSideNavStatus(false)}
                >
                  {item.name}
                </NavLink>
              );
            return (
              <NavLink
                href={item.link}
                onClick={() => props.setSideNavStatus(false)}
                activeClass='active'
                class='side-nav__link'
              >
                {item.name}
              </NavLink>
            );
          }}
        </For>
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
