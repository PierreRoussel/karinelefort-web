import { useParams } from '@solidjs/router';
import {
  createResource,
  createSignal,
  createEffect,
  For,
  Suspense,
  onMount,
} from 'solid-js';
import { BookMarkWrapper } from '../../components/bookmark-wrapper/BookMarkWrapper';
import { BubbleWrapper } from '../../components/bubble-wrapper/BubbleWrapper';
import FullWidthImgWithOutline from '../../components/full-width-img-with-outline/FullWidthImgWithOutline';
import SpiralLoader from '../../components/loaders/SpiralLoader';
import { Resumee } from '../../components/resumee/Resumee';
import SquaredGalery from '../../components/squared-galery/SquaredGalery';
import { TextBanner } from '../../components/text-banner/TextBanner';
import { fetchPage } from '../../modules/api';
import { CtaWrapper } from '../../modules/api_types';
import './home.scss';

const Home = () => {
  const ctaWrapperItems: CtaWrapper[] = [
    {
      caller: 'réserver',
      service: 'une séance',
      image: {
        url: '/62c58e2f4d4d7603225062.jpg',
        alt: '',
      },
      link: 'https://www.fotostudio.io/client/reservation/61105',
      backgroundColor: '#83c0cf',
    },
    {
      caller: 'visitez',
      service: 'les galeries',
      image: {
        url: '/616c731a3c80f796838716.jpg',
        alt: '',
      },
      link: '/galerie',
      backgroundColor: '#52909e',
    },
    {
      caller: "besoin d'un renseignement",
      service: 'contactez moi',
      image: {
        url: '/615a17326ab84037154751.jpg',
        alt: '',
      },
      link: '/#',
      backgroundColor: '#fff',
    },
    {
      caller: 'découvrez',
      service: 'mes collections',
      image: {
        url: '/270297889_4498951966841054_2309659315178713093_n.jpg',
        alt: '',
      },
      link: '/#',
      backgroundColor: '#1f6270',
    },
    {
      caller: 'réserver',
      service: 'une séance',
      image: {
        url: '/278304567_708203026882538_4413979470828640160_n.jpg',
        alt: '',
      },
      link: 'https://www.fotostudio.io/client/reservation/61105',
      backgroundColor: '#beb9ae',
    },
  ];
  const imageGaleryImages: any[] = [
    { url: '/61ccc9046f411597372612.jpg', alt: '' },
    { url: '/615a17326ab84037154751.jpg', alt: '' },
    { url: '/62c58e2f4d4d7603225062.jpg', alt: '' },
    { url: '/616c731a3c80f796838716.jpg', alt: '' },
    {
      url: '/278304567_708203026882538_4413979470828640160_n.jpg',
      alt: '',
    },
    {
      url: '/270297889_4498951966841054_2309659315178713093_n.jpg',
      alt: '',
    },
  ];

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

  const autoplayCarousel = () => {
    const el = document.querySelector('#slide-container');
    const timer = 5000;
    // Autoplay
    let autoplay = setInterval(() => carouselNext('forward'), timer);
    //@ts-ignore

    el.addEventListener('mouseenter', () => clearInterval(autoplay));
    //@ts-ignore
    el.addEventListener(
      'mouseleave',
      () => (autoplay = setInterval(() => carouselNext('forward'), timer))
    );
    //@ts-ignore
    el.addEventListener('touch', () => clearInterval(autoplay));
    //@ts-ignore
    el.addEventListener('click', () => clearInterval(autoplay));
  };

  /** LIFECYCLE */
  const [homepage] = createResource(() => fetchPage('page-d-accueil'));
  const [bubbles, setBubbles] = createSignal([]);
  const [resumee, setResumee] = createSignal({});
  const [carouselItems, setCarouselItems] = createSignal([]);

  createEffect(() => {
    if (!homepage.loading) {
      //@ts-ignore
      setBubbles([
        { text: homepage()?.['Horaires'] },
        { text: homepage()?.['informationsReservations'] },
        { text: homepage()?.['TitreLien'], link: homepage()?.['lien'] },
      ]);
      //@ts-ignore
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
      autoplayCarousel();
    }
  });

  return (
    <Suspense fallback={<SpiralLoader/>}>
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
        <BookMarkWrapper ctaItems={ctaWrapperItems} />
        <BubbleWrapper bubbles={bubbles()} />
        <Resumee resumee={resumee()} />
        <h2 class='separator-title'>{homepage()?.['phraseAccroche']}</h2>
        <TextBanner />
        <SquaredGalery images={imageGaleryImages} />
      </div>
    </Suspense>
  );
};

export default Home;
