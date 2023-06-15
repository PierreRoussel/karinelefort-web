import {
  For,
  Suspense,
  createResource,
} from 'solid-js';
import './squaredGalery.scss';
import { fetchPage } from '../../modules/api';
import SpiralLoader from '../loaders/SpiralLoader';

function SquaredGalery(props: any) {
  const [images] = createResource(() => fetchPage('patchwork'));
  
  return (
    <div class='horizontal-img-galery'>
      <Suspense
        fallback={
          <div class='home-loader'>
            <SpiralLoader />
          </div>
        }
      >
        <For each={images()?.Photos.data} fallback={[]}>
          {(image: any) => {
            return (
              <div
                class='horizontal-img-galery__img'
                style={`background-image: url(${image.attributes.url})`}
              ></div>
            );
          }}
        </For>
      </Suspense>
    </div>
  );
}

export default SquaredGalery;
