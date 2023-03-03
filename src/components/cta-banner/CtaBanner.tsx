import './ctaBanner.scss';
import CtaBtn from '../CtaBtn/CtaBtn';

function CtaBanner() {
  return (
    <div class='cta-banner'>
      <h3>Immortaliser vos moments</h3>
      <CtaBtn
        btnTitle='Réservez une séance'
        link='https://www.fotostudio.io/client/reservation/61105'
      />
    </div>
  );
}

export default CtaBanner;
