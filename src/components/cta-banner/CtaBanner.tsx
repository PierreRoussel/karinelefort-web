import './ctaBanner.scss';
import CtaBtn from '../CtaBtn/CtaBtn';

function CtaBanner(props: any) {
  return (
    <div class={`cta-banner ${props.floating ? 'floating-cta' : ''}`}>
      <h3>{props.text ? props.text : 'Immortaliser vos moments'}</h3>
      <CtaBtn
        btnTitle='Réservez une séance'
        link='https://www.fotostudio.io/lead_forms/3762'
      />
    </div>
  );
}

export default CtaBanner;
