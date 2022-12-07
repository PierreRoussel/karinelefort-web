import { Component } from '@angular/core';
import { Image } from '../../types/images';

@Component({
  selector: 'karinelefort-web-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss'],
})
export class PrestationsComponent {
  tiles = [
    {
      title: 'Grossesse',
      link: 'prestations/grossesse',
      imgSrc: '../../assets/grossesse.jpg',
    },
    {
      title: 'Nouveau-né',
      link: 'prestations/grossesse',
      imgSrc: '../../assets/nouveaune.jpg',
    },
    {
      title: 'Bébé / Enfant',
      link: 'prestations/grossesse',
      imgSrc: '../../assets/enfant.jpg',
    },
    {
      title: 'Mariage',
      link: 'prestations/grossesse',
      imgSrc: '../../assets/mariage.jpg',
    },
    {
      title: 'Animal de compagnie',
      link: 'prestations/grossesse',
      imgSrc: '../../assets/animal.jpg',
    },
    {
      title: 'Autres',
      link: 'prestations/grossesse',
      imgSrc: '../../assets/other.jpg',
    },
  ];
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
}
