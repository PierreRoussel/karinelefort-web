import { For, ParentComponent } from 'solid-js';
import BookMarkItem from './BookMarkItem';
import './bookMark.scss';

type BookMarkWrapperProps = {
  ctaItems: any[];
};

export const BookMarkWrapper = (props: BookMarkWrapperProps) => {
  return (
    <div class='cta-wrapper'>
      <div class='cta-wrapper__inner'></div>
      <h2>Découvrez mon univers</h2>
      <div class='cta-wrapper__content'>
        <For each={props.ctaItems}>
          {(ctaItem) => {
            return (
              <div class='cta-wrapper__content--item'>
                <BookMarkItem ctaItem={ctaItem} />
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};
