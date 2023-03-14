import { useNavigate } from '@solidjs/router';
import './ctaBtn.scss';
function CtaBtn(props: any) {
  const navigate = useNavigate();
  const link =
    props.link === 'https://www.fotostudio.io/lead_forms/3762'
      ? '/contact'
      : props.link;
  return (
    <button
      class={`basic-cta-btn ${props.reversed ? 'reversed' : ''}`}
      onClick={() => navigate(link)}
    >
      <div class='basic-cta-btn__outline'></div>
      {props.btnTitle}
    </button>
  );
}

export default CtaBtn;
