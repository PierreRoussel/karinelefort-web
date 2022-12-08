import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CtaWrapper } from '../../types/cta';
import { Image } from '../../types/images';
import { Resumee, TextWithLink } from '../../types/object';

@Component({
  selector: 'karinelefort-web-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public imageGaleryImages: Image[] = [
    { url: '../../assets/61ccc9046f411597372612.jpg', alt: '' },
    { url: '../../assets/615a17326ab84037154751.jpg', alt: '' },
    { url: '../../assets/62c58e2f4d4d7603225062.jpg', alt: '' },
    { url: '../../assets/616c731a3c80f796838716.jpg', alt: '' },
    {
      url: '../../assets/278304567_708203026882538_4413979470828640160_n.jpg',
      alt: '',
    },
    {
      url: '../../assets/270297889_4498951966841054_2309659315178713093_n.jpg',
      alt: '',
    },
  ];
  public ctaWrapperItems: CtaWrapper[] = [
    {
      caller: 'réserver',
      service: 'une séance',
      image: {
        url: '../../assets/62c58e2f4d4d7603225062.jpg',
        alt: '',
      },
      link: 'https://www.fotostudio.io/client/reservation/61105',
      backgroundColor: '#83c0cf',
    },
    {
      caller: 'visitez',
      service: 'les galeries',
      image: {
        url: '../../assets/616c731a3c80f796838716.jpg',
        alt: '',
      },
      link: '/galerie',
      backgroundColor: '#52909e',
    },
    {
      caller: "besoin d'un renseignement",
      service: 'contactez moi',
      image: {
        url: '../../assets/615a17326ab84037154751.jpg',
        alt: '',
      },
      link: '/#',
      backgroundColor: '#fff',
    },
    {
      caller: 'découvrez',
      service: 'mes collections',
      image: {
        url: '../../assets/270297889_4498951966841054_2309659315178713093_n.jpg',
        alt: '',
      },
      link: '/#',
      backgroundColor: '#1f6270',
    },
    {
      caller: 'réserver',
      service: 'une séance',
      image: {
        url: '../../assets/278304567_708203026882538_4413979470828640160_n.jpg',
        alt: '',
      },
      link: 'https://www.fotostudio.io/client/reservation/61105',
      backgroundColor: '#beb9ae',
    },
  ];

  homepage = [];
  isLoaded = false;
  error: unknown;

  bubbles: TextWithLink[] = [];
  resumee: Resumee;
  imgUrl = '';
  carouselItems = [];
  carouselIndex = 0;

  getNewScrollPosition = (arg, el, width) => {
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

  carouselNext(arg, el = document.querySelector('#slide-container')) {
    let slideWidth = el['offsetWidth'] * 0.97;
    window.addEventListener('resize', () => {
      slideWidth = el['offsetWidth'];
    });
    el.scrollLeft = this.getNewScrollPosition(arg, el, slideWidth);
  }

  autoplayCarousel() {
    const el = document.querySelector('#slide-container');
    const timer = 5000;
    // Autoplay
    let autoplay = setInterval(() => this.carouselNext('forward'), timer);
    el.addEventListener('mouseenter', () => clearInterval(autoplay));
    el.addEventListener(
      'mouseleave',
      () => (autoplay = setInterval(() => this.carouselNext('forward'), timer))
    );
    el.addEventListener('touch', () => clearInterval(autoplay));
    el.addEventListener('click', () => clearInterval(autoplay));
  }

  async ngOnInit() {
    const config = {
      headers: {
        Authorization: `Bearer ${'bc4b93a92c4679cfb4f1345af79087a7a52780b91d95172e683b8515cd3f2574a1396dd93a1d316acf26e26fd6d360d5d37a5d72712841f1b1d94f61ab19903c62ac1200cf209f5937a2b406bf51b4c1924c4bd4beb0fef5be51b0f220e374bd6b3cda923475a3a15cb0cb34d522f99d1b82c5b501ce6bb941fa84923c4fa479'}`,
      },
    };
    const filters = 'publicationState=live&populate=%2A';
    try {
      const res = await axios.get(
        `http://localhost:1337/api/page-d-accueil?${filters}`,
        config
      );
      this.homepage = res.data.data.attributes;
      this.bubbles = [
        { text: this.homepage['Horaires'] },
        { text: this.homepage['informationsReservations'] },
        { text: this.homepage['TitreLien'], link: this.homepage['lien'] },
      ];
      this.resumee = {
        presA: this.homepage['presentationA'],
        presB: this.homepage['presentationB'],
        presC: this.homepage['presentationC'],
        imgUrl: this.homepage['presentationImage'].data.attributes.url,
      };
      this.carouselItems = this.homepage['Carousel'].data.map((item) => {
        return item.attributes.url;
      });
      this.imgUrl = this.carouselItems[this.carouselIndex];
      this.isLoaded = true;
      this.autoplayCarousel();
    } catch (error) {
      this.error = error;
    }
  }
}
