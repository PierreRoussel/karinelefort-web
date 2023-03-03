/* @refresh reload */
import { render } from 'solid-js/web';
import './index.scss';
import 'iconoir/css/iconoir.css';
import App from './App';
import { Router } from '@solidjs/router';

render(
  () => (
    <Router>
        <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
