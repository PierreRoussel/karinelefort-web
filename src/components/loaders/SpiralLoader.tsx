import './loaders.scss';

function SpiralLoader() {
  return (
    <div class='loader-wrapper'>
      <div class='dot-spinner'>
        <div class='dot-spinner__dot'></div>
        <div class='dot-spinner__dot'></div>
        <div class='dot-spinner__dot'></div>
        <div class='dot-spinner__dot'></div>
        <div class='dot-spinner__dot'></div>
        <div class='dot-spinner__dot'></div>
        <div class='dot-spinner__dot'></div>
        <div class='dot-spinner__dot'></div>
      </div>
    </div>
  );
}

export default SpiralLoader;
