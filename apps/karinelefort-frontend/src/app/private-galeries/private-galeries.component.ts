import { Component } from '@angular/core';

@Component({
  selector: 'karinelefort-web-private-galeries',
  templateUrl: './private-galeries.component.html',
  styleUrls: ['./private-galeries.component.scss'],
})
export class PrivateGaleriesComponent {
  galeries = [
    {
      title: 'Julie',
      link: '#',
    },
    {
      title: 'Arnaud',
      link: '#',
    },
    {
      title: 'Duchamp',
      link: '#',
    },
    {
      title: 'Luche',
      link: '#',
    },
    {
      title: 'Kempen',
      link: '#',
    },
    {
      title: 'Agathe',
      link: '#',
    },
  ];
}
