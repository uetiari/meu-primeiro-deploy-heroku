import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
      </div>
      // vai mostrar sua lista de música
    );
  }
}

export default Album;
