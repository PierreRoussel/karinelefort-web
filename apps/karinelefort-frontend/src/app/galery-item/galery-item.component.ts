import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'karinelefort-web-galery-item',
  templateUrl: './galery-item.component.html',
  styleUrls: ['./galery-item.component.scss'],
})
export class GaleryItemComponent implements OnInit {
  photos = [];
  isLoaded = false;
  title = '';
  error: unknown;
  constructor(private route: ActivatedRoute
    ) {}

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const config = {
      headers: {Authorization: `Bearer ${'bc4b93a92c4679cfb4f1345af79087a7a52780b91d95172e683b8515cd3f2574a1396dd93a1d316acf26e26fd6d360d5d37a5d72712841f1b1d94f61ab19903c62ac1200cf209f5937a2b406bf51b4c1924c4bd4beb0fef5be51b0f220e374bd6b3cda923475a3a15cb0cb34d522f99d1b82c5b501ce6bb941fa84923c4fa479'}`}
    }
    const filters = `publicationState=live&filters[is_private][$ne]=true&filters[slug][$eq]=${slug}&populate=photos`;
      try {
        const res = await (await axios.get(`http://localhost:1337/api/galeries?${filters}`, config)).data.data[0].attributes;
        this.photos = res.photos.data;
        this.title = res.Nom
        this.isLoaded = true;
      } catch (error) {
        this.error = error;
      }
  }
}
