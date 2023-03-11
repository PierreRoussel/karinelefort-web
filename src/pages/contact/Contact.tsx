import CtaBanner from '../../components/cta-banner/CtaBanner';
import './contact.scss';
function Contact() {
  return (
    <div class='contact'>
      <div class='container'>
        <h2>Contactez-moi</h2>
        <div class='form-container'>
          <iframe
            src='https://www.fotostudio.io/lead_forms/3762'
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <CtaBanner />
    </div>
  );
}

export default Contact;
