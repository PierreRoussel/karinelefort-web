import { Component } from 'solid-js';
import { getStrapiURL } from '../../modules/api';
import './full-width-img-with-outline.scss';

const FullWidthImgWithOutline: Component = (props: any) => {
  return (
    <div class='img__container'>
      <div class='img__inner'></div>
      <div
        class='img__img fade-in-left'
        style={`background-image: url(${getStrapiURL(props.imgUrl)}`}
      ></div>
    </div>
  );
};

export default FullWidthImgWithOutline;
