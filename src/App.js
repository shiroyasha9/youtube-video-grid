import './App.css';
import { useState } from 'react';
import ids from './ids';
import Thumbnail from './Thumbnail';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function App() {
  const [play, setPlay] = useState(false);
  const [id, setId] = useState('');

  const playVideo = newId => {
    if (id === newId) {
      setId(undefined);
      setPlay(false);
    } else {
      setId(newId);
      setPlay(true);
    }
  };

  const closeVideo = () => {
    setId(undefined);
    setPlay(false);
  };

  return (
    <div className='App'>
      <div className='grid-container'>
        {ids.map(id => (
          <div className='grid-item'>
            <Thumbnail id={id} playVideo={playVideo} key={id} />
          </div>
        ))}
      </div>
      {play ? (
        <>
          <div className='video-container'>
            <AiOutlineCloseCircle
              size={30}
              className='close-btn'
              onClick={closeVideo}
            />
            <iframe
              width='840'
              height='472.5'
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              onPlay={() => console.log('ho')}
            ></iframe>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
