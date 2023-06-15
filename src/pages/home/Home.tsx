import {
  createResource,
  createSignal,
  createEffect,
  For,
  Suspense,
  onCleanup,
  onMount,
} from 'solid-js';
import { BookMarkWrapper } from '../../components/bookmark-wrapper/BookMarkWrapper';
import { BubbleWrapper } from '../../components/bubble-wrapper/BubbleWrapper';
import CtaBanner from '../../components/cta-banner/CtaBanner';
import FullWidthImgWithOutline from '../../components/full-width-img-with-outline/FullWidthImgWithOutline';
import IrisTestimonials from '../../components/iris_testimonials/IrisTestimonials';
import SpiralLoader from '../../components/loaders/SpiralLoader';
import { Resumee } from '../../components/resumee/Resumee';
import SquaredGalery from '../../components/squared-galery/SquaredGalery';
import { TextBanner } from '../../components/text-banner/TextBanner';
import { fetchAPI, fetchPage } from '../../modules/api';
import { CtaWrapper } from '../../modules/api_types';
import { observer } from '../../modules/utils';
import './home.scss';

const Home = () => {
  const [autoplay, setAutoplay] = createSignal(undefined);

  const getNewScrollPosition = (arg: any, el: any, width: any) => {
    const gap = 10;
    const maxScrollLeft = el.scrollWidth - width;
    if (arg === 'forward') {
      const x = el.scrollLeft + width + gap;
      return x <= maxScrollLeft ? x : 0;
    } else if (arg === 'backward') {
      const x = el.scrollLeft - width - gap;
      return x >= 0 ? x : maxScrollLeft;
    } else if (typeof arg === 'number') {
      const x = arg * (width + gap);
      return x;
    }
  };

  const carouselNext = (
    arg: any,
    el = document.querySelector('#slide-container')
  ) => {
    //@ts-ignore
    let slideWidth = el['offsetWidth'] * 0.97;
    window.addEventListener('resize', () => {
      //@ts-ignore
      slideWidth = el['offsetWidth'];
    });
    //@ts-ignore
    el.scrollLeft = getNewScrollPosition(arg, el, slideWidth);
  };

  const autoplayCarousel = (stop?: boolean) => {
    const el = document.querySelector('#slide-container');
    const timer = 5000;
    // Autoplay
    setAutoplay(setInterval(() => carouselNext('forward'), timer) as any);
    //@ts-ignore
    el.addEventListener('mouseenter', () => clearInterval(autoplay()));
    //@ts-ignore
    el.addEventListener('mouseleave', () =>
      setAutoplay(setInterval(() => carouselNext('forward'), timer) as any)
    );
    //@ts-ignore
    el.addEventListener('touch', () => clearInterval(autoplay()));
    //@ts-ignore
    el.addEventListener('click', () => clearInterval(autoplay()));
  };

  onCleanup(() => {
    setAutoplay(clearInterval(autoplay()) as any);
  });

  /** LIFECYCLE */
  const [homepage] = createResource(() => fetchPage('page-d-accueil'));
  const [bubbles, setBubbles] = createSignal(
    [] as { title: string; text: string }[]
  );
  const [resumee, setResumee] = createSignal({});
  const [ctaWrapper, setCtaWrapper] = createSignal([] as CtaWrapper[]);
  const [carouselItems, setCarouselItems] = createSignal([]);

  createEffect(() => {
    if (!homepage.loading) {
      const targets = document.querySelectorAll('.reveal');
      targets.forEach(function (target) {
        observer.observe(target);
      });

      setBubbles([
        { title: 'Mes horaires', text: homepage()?.['Horaires'] },
        {
          title: 'Mes horaires',
          text: homepage()?.['informationsReservations'],
        },
        {
          title: 'Une question ?',
          text: homepage()?.['TitreLien'],
          link: homepage()?.['lien'],
        },
      ]);

      setResumee({
        presA: homepage()?.['presentationA'],
        presB: homepage()?.['presentationB'],
        presC: homepage()?.['presentationC'],
        imgUrl: homepage()?.['presentationImage'].data.attributes.url,
      });

      setCarouselItems(
        homepage()?.['Carousel'].data.map((item: any) => {
          return item.attributes.url;
        })
      );

      setCtaWrapper(
        homepage()?.['bookmark'].map((item: any) => {
          return {
            'caller': item.Accroche,
            'service': item.Nom,
            'image': item.Image.data.attributes,
            'link': item.Lien,
            'backgroundColor': item.Couleur,
          };
        })
      );
      autoplayCarousel();
    }
  });

  return (
    <Suspense
      fallback={
        <div class='home-loader'>
          <SpiralLoader />
        </div>
      }
    >
      <div class='home-page'>
        <h1>
          <div id='carousel'>
            <div id='slide-container'>
              <For each={carouselItems() as any}>
                {(slide, i) => {
                  return (
                    <div class='slide' data-slideIndex={i}>
                      <FullWidthImgWithOutline
                        // @ts-ignore
                        imgUrl={slide}
                      ></FullWidthImgWithOutline>
                    </div>
                  );
                }}
              </For>
            </div>
            <div class='controls'>
              <div onClick={() => carouselNext('backward')} class='left'></div>
              <div onClick={() => carouselNext('forward')} class='right'></div>
            </div>
          </div>
        </h1>

        <h2 class='separator-title reveal'>
          <q>{homepage()?.['phraseAccroche']}</q>
        </h2>
        <div class='reveal'>
          <BookMarkWrapper ctaItems={ctaWrapper()} />
        </div>
        <div class='reveal'>
          <CtaBanner />
        </div>
        <div class='reveal'>
          <BubbleWrapper bubbles={bubbles()} />
        </div>
        <div class=''>
          <Resumee resumee={resumee()} />
        </div>
        <div class='reveal'>
          <IrisTestimonials />
        </div>
        <div class='reveal' style={'margin-bottom:0'}>
          <TextBanner />
        </div>
        <SquaredGalery />
      </div>
    </Suspense>
  );
};

export default Home;
