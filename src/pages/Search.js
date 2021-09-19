import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  };

  render() {
    const { search } = this.state;
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
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
