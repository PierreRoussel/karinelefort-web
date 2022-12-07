import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'karinelefort-web-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent implements OnInit {
  tiles = [
    {
      title: 'Grossesse',
      link: 'galeries/grossesse',
      imgSrc: '../../assets/grossesse.jpg',
    },
    {
      title: 'Nouveau-né',
      link: 'galeries/grossesse',
      imgSrc: '../../assets/nouveaune.jpg',
    },
    {
      title: 'Bébé / Enfant',
      link: 'galeries/grossesse',
      imgSrc: '../../assets/enfant.jpg',
    },
    {
      title: 'Mariage',
      link: 'galeries/grossesse',
      imgSrc: '../../assets/mariage.jpg',
    },
    {
      title: 'Animal de compagnie',
      link: 'galeries/grossesse',
      imgSrc: '../../assets/animal.jpg',
    },
    {
      title: 'Autres',
      link: 'galeries/grossesse',
      imgSrc: '../../assets/other.jpg',
    },
  ];

  grossesse = [];
  error: unknown;

  async ngOnInit() {
    const config = {
      headers: {Authorization: `Bearer ${'bc4b93a92c4679cfb4f1345af79087a7a52780b91d95172e683b8515cd3f2574a1396dd93a1d316acf26e26fd6d360d5d37a5d72712841f1b1d94f61ab19903c62ac1200cf209f5937a2b406bf51b4c1924c4bd4beb0fef5be51b0f220e374bd6b3cda923475a3a15cb0cb34d522f99d1b82c5b501ce6bb941fa84923c4fa479'}`}
    }
      try {
        const res = await axios.get('http://localhost:1337/api/galeries/1',config);
        this.grossesse = res.data;
        console.log('res.data', res.data)
      } catch (error) {
        this.error = error;
      }
  }
}
