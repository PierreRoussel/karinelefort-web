import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Image } from '../../types/images';

@Component({
  selector: 'karinelefort-web-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss'],
})
export class PrestationsComponent implements OnInit {
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
  galeries = [];
  isLoaded = false;
  error: unknown;

  async ngOnInit() {
    const config = {
      headers: {Authorization: `Bearer ${'bc4b93a92c4679cfb4f1345af79087a7a52780b91d95172e683b8515cd3f2574a1396dd93a1d316acf26e26fd6d360d5d37a5d72712841f1b1d94f61ab19903c62ac1200cf209f5937a2b406bf51b4c1924c4bd4beb0fef5be51b0f220e374bd6b3cda923475a3a15cb0cb34d522f99d1b82c5b501ce6bb941fa84923c4fa479'}`}
    }
    const filters = "publicationState=live&filters[is_private][$ne]=true&populate=Previsualisation";
      try {
        const res = await axios.get(`http://localhost:1337/api/galeries?${filters}`, config);
        this.galeries = res.data.data;
        this.isLoaded = true;
      } catch (error) {
        this.error = error;
      }
  }
}
