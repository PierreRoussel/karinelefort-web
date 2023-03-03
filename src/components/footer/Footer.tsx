import { NavLink } from '@solidjs/router';
import { Component } from 'solid-js';
import RsPictos from '../rs-pictos/RsPictos';
import './footer.scss';

const Footer: Component = () => {
  return (
    <footer class='footer'>
      <div class='footer__inner'></div>
      <div class='footer__content'>
        <p class='content__left'>
          Studio <br />
          20 chemin de Virol <br />
          24200 Proissans
        </p>
        <p class='content__center'>
          Pour chaque contact, veuillez me <br />
          contacter uniquement par mail : <br />
          <a href='mailto:karinelefortphoto@gmail.com'>
            karinelefortphoto@gmail.com
          </a>
        </p>
        <div class='content__right'>
          Me suivre
          <div class='separator'></div>
          <div class='content__right--rs-container'>
            <RsPictos pictoHeights="25"/>
          </div>
        </div>
      </div>
      <span class='footer__copyright'>© Karinelefortphotographie - 2022</span>
    </footer>
  );
};

export default Footer;
