import { For } from "solid-js";
import './squaredGalery.scss';
function SquaredGalery(props: any) {
  return (
    <div class='horizontal-img-galery'>
      <For each={props.images}>
        {(image: any) => {
          return (
            <div
              class='horizontal-img-galery__img'
              style={`background-image: url(${image.url})`}
            ></div>
          );
        }}
      </For>
    </div>
  );
}

export default SquaredGalery;
