import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      allAlbuns: [],
      singleAlbum: [],

    };
  }

  componentDidMount() {
    this.fetchGetMusics();
  }

  fetchGetMusics = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    this.setState({
      allAlbuns: response,
      singleAlbum: response[0],

    });
  }

  render() {
    const { allAlbuns, singleAlbum } = this.state;
    const musicList = allAlbuns.slice(1); // começa a mostrar a partir do index 1
    // Ref.: Consultei o repositório do Elithon para entender essa parte do slice
    // https://github.com/tryber/sd-014-b-project-trybetunes/pull/21/
    const { artistName, collectionName, artworkUrl100 } = singleAlbum;
    return (
      <div data-testid="page-album">
        <Header />
        <h3 data-testid="artist-name">{ artistName }</h3>
        <p data-testid="album-name">{ collectionName }</p>
        <img src={ artworkUrl100 } alt={ collectionName } />
        <ul>
          {musicList.map((music) => (
            <MusicCard
              name={ music.trackName }
              previewUrl={ music.previewUrl }
              key={ music.trackId }
            />
          ))}
        </ul>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string.isRequired,
    }),
  }),
}.isRequired;

export default Album;
