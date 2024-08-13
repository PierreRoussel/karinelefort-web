import { For } from 'solid-js';
import CtaBanner from '../cta-banner/CtaBanner';
import './irisTestimonials.scss';
function IrisTestimonials(props: any) {
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
          <For each={props.iris}>
            {(
              irisTestimonial: { id: number; image: any; texte: string },
              index
            ) => {
              if (index() >= 4) return;
              return (
                <div class='slider__contents'>
                  <div
                    class='slider__image'
                    style={`background-image:url(${irisTestimonial.image.data.attributes.url})`}
                  ></div>
                  <p class='slider__txt'>{irisTestimonial.texte}</p>
                </div>
              );
            }}
          </For>
        </div>
      </div>
      <CtaBanner
        text='Venez découvrir ce que votre oeil a à vous montrer.'
        floating={true}
      />
    </div>
  );
}

export default IrisTestimonials;
