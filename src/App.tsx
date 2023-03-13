import { Route, Routes } from '@solidjs/router';
import { Component, onMount, lazy, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';
import styles from './App.module.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Galery from './pages/galery/Galery';
import Tarif from './pages/tarif/Tarif';
import TarifItem from './pages/tarif/TarifItem';

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
    <div class={`${styles.App} app`} style={'margin:0'}>
      <Header scrolled={scrolled() <= 1 ? true : false} />
      <Routes>
        <Route path='/' component={lazy(() => import('./pages/home/Home'))} />
        <Route path='/photos' component={Galery} />
        <Route
          path='/photos/:slug'
          component={lazy(() => import('./pages/galery/GaleryItem'))}
        />
        <Route path='/faq' component={lazy(() => import('./pages/faq/Faq'))} />
        <Route
          path='/contact'
          component={lazy(() => import('./pages/contact/Contact'))}
        />
        <Route path='/tarifs'>
          <Route path='/' component={Tarif} />
          <Route
            path='/:slug'
            component={TarifItem}
          />
        </Route>
        <Route
          path='/galeries-privees'
          component={lazy(
            () => import('./pages/private-galeries/PrivateGaleries')
          )}
        />
        <Portal>
          <button
            id='scroll-to-top'
            class='hide'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div
              class='scroll'
              style={`
          background: conic-gradient(hsl(0, 54%, 75%) ${scrolled()}%, white ${
                scrolled() - 1
              }%);`}
            >
              <div class='inner'>
                <i class='iconoir-nav-arrow-up'></i>
              </div>
            </div>
          </button>
        </Portal>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
