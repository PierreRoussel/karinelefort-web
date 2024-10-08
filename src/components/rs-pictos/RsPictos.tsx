import './rsPictos.scss';
function RsPictos(props: any) {
  return (
    <div class='rs-picto'>
      <a rel="noopener noreferrer" target='_blank' href='https://www.facebook.com/karinelefortphotographie'>
        <svg
          fill='#000000'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 50 50'
          style={`height: ${props.pictoHeights}px`}
        >
          <path d='M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z' />
        </svg>
      </a>
      <a rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/karinelefortphotographie/'>
        <svg
          fill='#000000'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 50 50'
          style={`height: ${props.pictoHeights}px`}
        >
          <path d='M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z' />
        </svg>
      </a>
      <a rel="noopener noreferrer" target='_blank' href='https://www.facebook.com/karinelefortphotographie'>
        <svg
          fill='#000000'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 50 50'
          style={`height: ${props.pictoHeights}px`}
        >
          <path d='M 25 2 C 12.300781 2 2 11.601563 2 23.5 C 2 29.800781 4.898438 35.699219 10 39.800781 L 10 48.601563 L 18.601563 44.101563 C 20.699219 44.699219 22.800781 44.898438 25 44.898438 C 37.699219 44.898438 48 35.300781 48 23.398438 C 48 11.601563 37.699219 2 25 2 Z M 27.300781 30.601563 L 21.5 24.398438 L 10.699219 30.5 L 22.699219 17.800781 L 28.601563 23.699219 L 39.101563 17.800781 Z' />
        </svg>
      </a>
    </div>
  );
}

export default RsPictos;
