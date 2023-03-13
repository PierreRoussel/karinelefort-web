import { useNavigate } from '@solidjs/router';
import './ctaBtn.scss';
function CtaBtn(props: any) {
  const navigate = useNavigate();
  return (
    <button class={`basic-cta-btn ${props.reversed?'reversed':''}`} onClick={() => navigate(props.link)}>
      <div class='basic-cta-btn__outline'></div>
      {props.btnTitle}
    </button>
  );
}

export default CtaBtn;
