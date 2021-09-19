import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;

    this.setState({
      name: value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name } = this.state;

    this.setState({
      loading: true,
    });
    await createUser({ name });
    // Início Referência: Consultei o repos. https://github.com/tryber/sd-014-b-project-trybetunes/pull/4/ para organizar a lógica
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  render() {
    const { name, loading, redirect } = this.state;
    const THREE = 3;
    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/search" />;
    // Fim referência
    return (
      <div data-testid="page-login">
        <h1> Login </h1>
        <form>
          <input
            id="name"
            type="text"
            data-testid="login-name-input"
            value={ name }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ name.length < THREE }
            value="Entrar"
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
