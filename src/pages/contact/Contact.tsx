import CtaBanner from '../../components/cta-banner/CtaBanner';
import {Title} from 'solid-meta'
import './contact.scss';
function Contact() {
  return (
    <div class='contact'>
      <Title>Contact - Karine Lefort Photographie</Title>

      <div class='container'>
        <h2>Contactez-moi</h2>
        <div class='form-container reveal-loaded'>
          <iframe
            src='https://www.fotostudio.io/lead_forms/3762'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
