import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {},
      loading: true,
    };
  }
  // Depois de ver uma dúvida no Slack sobre o mesmo Req.3 consegui resolver dentro da func. componentDidMount

  componentDidMount() {
    getUser().then((data) => {
      this.setState({
        name: data.name,
        loading: false,
      });
    });
  }

  render() {
    const { name, loading } = this.state;

    return (
      <header data-testid="header-component">
        <h2 data-testid="header-user-name">
          { loading ? <Loading /> : `Olá ${name} !`}
        </h2>
        <nav>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
