import { useNavigate } from '@solidjs/router';
import './imageWithTitleOverlay.scss';
function ImageWithTitleOverlay(props: any) {
  const navigate = useNavigate();
  return (
    <div
      class='image-with-title fade-in-bck'
      style={`animation-delay: ${props.delay * 120}ms`}
      onClick={() => navigate(props.link)}
    >
      <div class='image-with-title__inner'>
        <img src={props.imgSrc} alt="Image issue d'un shooting client." />
      </div>
      <div class='image-with-title__overlay'>{props.title}</div>
    </div>
  );
}

export default ImageWithTitleOverlay;
