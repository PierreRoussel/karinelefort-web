// export const BubbleItem = (props: any) => {
//   return <div class='info-bubble'>{props.bubble.text}</div>;
// };

import { Show } from 'solid-js';

export const BubbleItem = (props: any) => {
  return (
    <div class='info-bubble'>
      <div class='title-content'>
        <h3>{props.bubble.title || 'Titre'}</h3>
        <Show
          when={props.bubble.link}
          fallback={<div class='intro'>{props.bubble.text}</div>}
        >
          <a href={'/' + props.bubble.link} class='intro link'>
            {props.bubble.text}
          </a>
        </Show>
      </div>
    </div>
  );
};
