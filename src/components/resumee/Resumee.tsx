import './resumee.scss';
export const Resumee = (props: any) => {
  return (
    <div class='resumee-with-img'>
      <div class='resumee-with-img__left'>
        <p style="white-space:pre-wrap;">{props.resumee.presA}</p>
        <p class='left__quote' style="white-space:pre-wrap;">
          <i>{props.resumee.presB}</i>
        </p>
        <p style="white-space:pre-wrap;">{props.resumee.presC}</p>
      </div>
      <div
        class='resumee-with-img__right reveal'
        style={`background-image: url(${props.resumee.imgUrl})`}
      >
        <div class='resumee-with-img__right--inner '></div>
      </div>
    </div>
  );
};
