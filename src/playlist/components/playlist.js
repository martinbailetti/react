import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';

// Componente funcional, sólo maneja render

function Playlist(props) {
  const playlist = props.data.categories[0].playlist
  console.log(props.data);
  return (
    <div className="Playlist">
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;
