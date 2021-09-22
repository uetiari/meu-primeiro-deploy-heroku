import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumCard extends React.Component {
  render() {
    const { album:
      { artistName,
        collectionId,
        collectionName,
        artworkUrl100,
      },
    } = this.props;
    return (
      <Link
        to={ `album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img
          src={ artworkUrl100 }
          alt={ collectionName }
        />
        <h3>{ collectionName }</h3>
        <h4>{ artistName }</h4>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  album: PropTypes.objectOf({
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    artworkUrl100: PropTypes.string,
  }).isRequired,
};

export default AlbumCard;
