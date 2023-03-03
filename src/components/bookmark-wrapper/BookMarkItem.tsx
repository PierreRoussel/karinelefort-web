import { useNavigate } from '@solidjs/router';
import { Show } from 'solid-js';

const BookMarkItem = (props: any) => {
  const navigate = useNavigate();
  const isExternalLink = (link: string) => {
    return link.substring(0, 5).includes('http');
  };
  const content = () => {
    return (
      <>
        <div class='wide-cta__content'>
          <i>{props.ctaItem.caller}</i>
          <span class='content__cta-title'>{props.ctaItem.service}</span>
          <span class='arrow__bottom'></span>
        </div>
        <div
          class='wide-cta__img'
          style={`background-image:url('${props.ctaItem.image.url}');`}
        ></div>
      </>
    );
  };
  return (
    <Show
      when={isExternalLink(props.ctaItem.link)}
      fallback={
        <div
          class='wide-cta'
          style={`background-color: ${props.ctaItem.backgroundColor}`}
          onClick={() => navigate(props.ctaItem.link)}
        >
          {content}
        </div>
      }
    >
      <a
        class='wide-cta'
        target='_blank'
        href={props.ctaItem.link}
        style={`background-color: ${props.ctaItem.backgroundColor}`}
      >
        {content}
      </a>
    </Show>
  );
};

export default BookMarkItem;
