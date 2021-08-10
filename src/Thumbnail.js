import React from 'react';

const Thumbnail = ({ id, playVideo }) => {
  const url = `https://img.youtube.com/vi/${id}/0.jpg`;
  return (
    <div
      onClick={() => {
        playVideo(id);
      }}
    >
      <img
        src={url}
        alt='thumbnail'
        width='392px'
        height='220.5px'
        className='thumbnail'
      />
    </div>
  );
};

export default Thumbnail;
