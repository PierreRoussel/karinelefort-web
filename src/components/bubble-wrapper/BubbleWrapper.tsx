import { For } from 'solid-js';
import './bubble.scss';
import { BubbleItem } from './BubbleItem';

export const BubbleWrapper = (props: any) => {
  return (
    <div class='info-bubble-wrapper'>
      <For each={props.bubbles}>
        {(bubble: any) => {
          return <BubbleItem bubble={bubble}></BubbleItem>;
        }}
      </For>
    </div>
  );
};
