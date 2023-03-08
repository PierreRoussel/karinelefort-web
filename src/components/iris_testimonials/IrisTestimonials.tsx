import { For } from 'solid-js';
import CtaBanner from '../cta-banner/CtaBanner';
import './irisTestimonials.scss';
function IrisTestimonials() {
  const irisTestimonials: any[] = [
    {
      url: '/iris/1.jpg',
      commentaire:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur fugit, consequatur molestias minima perspiciatis deleniti esse est nostrum eos.',
    },
    {
      url: '/iris/2.jpg',
      commentaire:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur fugit, consequatur molestias minima perspiciatis deleniti esse est nostrum eos.',
    },
    {
      url: '/iris/3.jpg',
      commentaire:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur fugit, consequatur molestias minima perspiciatis deleniti esse est nostrum eos.',
    },
    {
      url: '/iris/4.jpg',
      commentaire:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur fugit, consequatur molestias minima perspiciatis deleniti esse est nostrum eos.',
    },
  ];
  return (
    <div class='iris-wrapper '>
      <h2>Les Iris</h2>
      <div class='slider'>
        <input
          type='radio'
          name='slider'
          title='slide1'
          // @ts-ignore
          checked='checked'
          class='slider__nav'
        />
        <input type='radio' name='slider' title='slide2' class='slider__nav' />
        <input type='radio' name='slider' title='slide3' class='slider__nav' />
        <input type='radio' name='slider' title='slide4' class='slider__nav' />
        <div class='slider__inner'>
          <For each={irisTestimonials}>
            {(irisTestimonial, index) => {
              if (index() >= 4) return;
              return (
                <div class='slider__contents'>
                  <div
                    class='slider__image'
                    style={`background-image:url(${irisTestimonial.url})`}
                  ></div>
                  <p class='slider__txt'>{irisTestimonial.commentaire}</p>
                </div>
              );
            }}
          </For>
        </div>
      </div>
      <CtaBanner text="Venez découvrir ce que votre oeil a à vous montrer." floating={true} />
    </div>
  );
}

export default IrisTestimonials;
