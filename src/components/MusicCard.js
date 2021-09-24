import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../pages/Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      checked: false,
    };
  }

  favoriteFunc = async (event) => {
    this.setState({
      loading: true,
    });

    // Ref.: Faz a busca pelo trackId, e compara no checked por ele tb
    // Consultei o repo: https://github.com/tryber/sd-014-b-project-trybetunes/pull/24/
    if (event.target.checked) {
      await addSong(event.target.trackId);
      this.setState({
        loading: false,
        checked: true,
      });
    }
  }

  render() {
    const { previewUrl, name, trackId } = this.props;

    const { loading, checked } = this.state;
    if (loading) return <Loading />;

    return (
      <div>
        <p>{ name }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.favoriteFunc }
            id={ trackId }
            checked={ checked }
          />
          Favorita
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default MusicCard;
