import React from 'react';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      loading: false,
      resultSearch: false,
      fetchArtist: [],
      searchedBefore: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  };

  getSearch = async () => {
    this.setState({
      loading: true,
    });

    const { search } = this.state;
    const response = await searchAlbumsAPI(search);

    this.setState({
      search: '',
      loading: false,
      resultSearch: true,
      fetchArtist: response,
      searchedBefore: search,
    });
  }

  albumList = () => {
    const { fetchArtist, searchedBefore } = this.state;
    if (fetchArtist.length < 1) {
      return (
        <div>
          <p> Nenhum álbum foi encontrado </p>
        </div>
      );
    }
    return (
      <div>
        <h3>
          {`Resultado de álbuns de: ${searchedBefore}`}
        </h3>
        { fetchArtist.map((album) => (
          <AlbumCard key={ album.collectionId } album={ album } />
        )) }
      </div>
    );
  }

  render() {
    const { search, loading, resultSearch } = this.state;
    const TWO = 2;

    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            data-testid="search-artist-input"
            name="search"
            value={ search }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            value="pesquisar"
            data-testid="search-artist-button"
            disabled={ search.length < TWO }
            onClick={ this.getSearch }
          >
            Pesquisar
          </button>
          { loading ? <Loading /> : '' }
          { resultSearch ? this.albumList() : ''}

        </form>
      </div>
    );
  }
}

export default Search;

// Consultei o Repositório da Beatriz pra entender melhor a lógica e aplicar ao meu código
// https://github.com/tryber/sd-014-b-project-trybetunes/pull/73/
