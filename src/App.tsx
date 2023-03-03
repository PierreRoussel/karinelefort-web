import { Route, Routes } from '@solidjs/router';
import { Component, onMount, lazy, createSignal } from 'solid-js';

import styles from './App.module.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Galery from './pages/galery/Galery';
import Home from './pages/home/Home';
import Tarif from './pages/tarif/Tarif';

const App: Component = () => {
  const [scrolled, setScrolled] = createSignal(0);

  onMount(() => {
    window.addEventListener('scroll', () => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrolled((winScroll / height) * 100);
      if (scrolled() <= 10) {
        document.getElementById('scroll-to-top')?.classList.remove('show');
        document.getElementById('scroll-to-top')?.classList.add('hide');
      } else {
        document.getElementById('scroll-to-top')?.classList.remove('hide');
        document.getElementById('scroll-to-top')?.classList.add('show');
      }
    });
  });
  return (
    <div class={styles.App}>
      <Header />
      <Routes>
        <Route path='/accueil' component={Home} />
        <Route path='/photos' component={Galery} />
        <Route
          path='/photos/:slug'
          component={lazy(() => import('./pages/galery/GaleryItem'))}
        />
        <Route path='/tarifs' component={Tarif} />
        <Route path='/' component={Home} />
      </Routes>
      <button
        id='scroll-to-top'
        class='hide'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div
          class='scroll'
          style={`
              background: conic-gradient(var(--color) ${scrolled()}%, lightgrey ${scrolled()}%);`}
        >
          <div class='inner'>
            <i class='iconoir-nav-arrow-up'></i>
          </div>
        </div>
      </button>
      <Footer />
    </div>
  );
};

export default App;
