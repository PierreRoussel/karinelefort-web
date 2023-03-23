import { NavLink } from '@solidjs/router';
import { Title } from 'solid-meta';

function NotFound() {
  return (
    <div style='margin:12rem 0; min-height:50vh'>
      <Title>Oups - Karine Lefort Photographie</Title>

      <h2>404</h2>
      <NavLink href='/'>Retour en zone connue.</NavLink>
    </div>
  );
}

export default NotFound;
