import { Component, Input } from '@angular/core';

@Component({
  selector: 'karinelefort-web-testimonials-img-with-text',
  templateUrl: './testimonials-img-with-text.component.html',
  styleUrls: ['./testimonials-img-with-text.component.scss'],
})
export class TestimonialsImgWithTextComponent {
  @Input() imgSrc = '';
  @Input() testimonial = '';
  @Input() customer = '';
  @Input() title = '';
  @Input() text = '';
  @Input() direction = 'row';
}
