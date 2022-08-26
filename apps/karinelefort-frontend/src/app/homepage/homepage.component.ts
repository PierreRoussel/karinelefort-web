import { Component, OnInit } from '@angular/core';
import { Image } from '../../types/images';

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

  ngOnInit(): void {
    console.log('isInit');
  }
}
