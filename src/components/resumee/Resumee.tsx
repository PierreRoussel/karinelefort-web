import { getStrapiURL } from '../../modules/api';
import './resumee.scss';
export const Resumee = (props: any) => {
  return (
    <div class='resumee-with-img'>
      <div class='resumee-with-img__left'>
        <p>{props.resumee.presA}</p>
        <p class='left__quote'>
          <i>{props.resumee.presB}</i>
        </p>
        <p>{props.resumee.presC}</p>
      </div>
      <div
        class='resumee-with-img__right'
        style={`background-image: url(${getStrapiURL(props.resumee.imgUrl)})`}
      >
        <div class='resumee-with-img__right--inner'></div>
      </div>
    </div>
  );
};
