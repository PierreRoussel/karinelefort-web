import { Component, OnInit } from '@angular/core';
import { CtaWrapper } from '../../types/cta';
import { Image } from '../../types/images';
import { TextWithLink } from '../../types/object';

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
      link: '/#',
      backgroundColor: '#83c0cf',
    },
    {
      caller: 'visitez',
      service: 'les galeries',
      image: {
        url: '../../assets/616c731a3c80f796838716.jpg',
        alt: '',
      },
      link: '/#',
      backgroundColor: '#52909e',
    },
    {
      caller: "besoin d' renseignement",
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
  ];

  public bubbles: TextWithLink[] = [
    {
      text: 'Horaires: de 9h-12 à 14h-18',
    },
    {
      text: 'Les réservations: En fonction de la séance souhaitée et de mon agenda, prévoir votre séance assez tôt',
    },
    {
      text: 'Foire aux questions',
    },
  ];
  ngOnInit(): void {
    console.log('isInit');
  }
}
