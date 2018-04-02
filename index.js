import React from'react';
import ReactDOM from'react-dom';
import Media from './src/playlist/components/media';


const app = document.getElementById('app');


ReactDOM.render(<Media title="Mi título" author="Martín Bailetti" image="./images/covers/responsive.jpg" />, app);