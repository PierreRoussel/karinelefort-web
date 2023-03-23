/* @refresh reload */
import { render } from 'solid-js/web';
import './index.scss';
import 'iconoir/css/iconoir.css';
import App from './App';
import { Router } from '@solidjs/router';
import { MetaProvider, Title, Meta  } from 'solid-meta';

const tags: any = [];

render(
  () => (
    <MetaProvider tags={tags}>
      <Title>Karine Lefort Photographie</Title>
      <Meta name="description" content="Karine Lefort Photographie, photographe spécialisée dans les photos de grossesse, nouveau-né, bébé, enfants, famille et portrait." />
      <Meta name="apple-mobile-web-app-capable" content="yes"></Meta>
      <Router>
        <App />
      </Router>
    </MetaProvider>
  ),
  document.getElementById('root') as HTMLElement
);
