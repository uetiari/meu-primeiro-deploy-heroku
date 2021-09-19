import React from 'react';
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
      </header>
    );
  }
}

export default Header;
