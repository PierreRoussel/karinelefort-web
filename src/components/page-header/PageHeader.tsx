import { For, Show } from 'solid-js';
import ImageWithTitleOverlay from '../image-with-title-overlay/ImageWithTitleOverlay';
import './pageHeader.scss';
function PageHeader(props: any) {
  return (
    <div class='page__header'>
      <Show when={props.title}>
        <div class='header__title'>
          <h1>{props.title}</h1>
          <span>{props.subtitle}</span>
        </div>
      </Show>
      <div class='header__images'>
        <For each={props.tiles}>
          {(item: any, index) => {
            return (
              <ImageWithTitleOverlay
                title={item['attributes'].Nom.toString()}
                link={item['attributes'].slug.toString()}
                lazy
                imgSrc={item['attributes'].Previsualisation['data']['attributes'].url.toString()}
                alt={item['attributes'].Previsualisation['data']['attributes'].alternativeText}
                delay={index()}
              />
            );
          }}
        </For>
      </div>
    </div>
  );}

export default PageHeader;
