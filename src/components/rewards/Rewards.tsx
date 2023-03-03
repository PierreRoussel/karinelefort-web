import './rewards.scss';
function Rewards() {
  return (
    <div class='rewards'>
      <h2>Récompenses</h2>
      <h3>Concours Français et internationaux</h3>
      <div class='rewards__inner'>
        <div class='reward'>
          <img src='/reward2.png' alt='' />
        </div>
        <div class='reward'>
          <img src='/reward1.jpg' alt='' />
          <div class='reward__overlay'>
            Récompenses des AFNS Awards, concours international
          </div>
        </div>
        <div class='reward'>
          <img src='/reward3.png' alt='' />
        </div>
        <div class='reward'>
          <img src='/reward4.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Rewards;
