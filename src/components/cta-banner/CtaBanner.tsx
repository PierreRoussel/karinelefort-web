import './ctaBanner.scss';
import CtaBtn from '../CtaBtn/CtaBtn';

function CtaBanner(props: any) {
  return (
    <div class={`cta-banner ${props.floating ? 'floating-cta' : ''}`}>
      <h3>{props.text ? props.text : 'Immortaliser vos moments'}</h3>
      <CtaBtn
        btnTitle='Réservez une séance Iris'
        link='https://www.fotostudio.io/client/reservation/61105'
      />
    </div>
  );
}

export default CtaBanner;
