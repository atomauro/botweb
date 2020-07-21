import React from 'react';
import _ from 'lodash/core';

import { connect } from 'react-redux';
import { login } from '../../store/actions/Login';

import api from '../../api';

import LoginView from './Login';

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFields: {},
      erroresForm: {},
      loading: false,
      error: null
    };
  }

  handleTextChange(e) {
    const fieldName = e.target.name;
    const value = e.target.value;
    console.log(e);

    this.setState({
      textFields: {
        ...this.state.textFields,
        [fieldName]: value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ erroresForm: {} });
    this.enviarPeticionLogin();
  }

  async enviarPeticionLogin() {
    this.setState({ loading: true, error: null, erroresForm: {} });
    try {
      this.setState({ loading: true });
      const data = await api.users.login(this.state.textFields);
      this.setState({ loading: false });
      this.manejarRespuestaValidacionApi(data);
    } catch (error) {
      console.log('error', error);
      this.setState({ loading: false, erroresForm: error });
    }
  }

  async manejarRespuestaValidacionApi(response) {
    if (!response.error) {
      return await this.handleLoginData(response);
    }
    this.setState({ error: response });
    this.estiloErrorForm();
  }

  async handleLoginData(response) {
    const userGet = await api.users.read(response.userId, response.id);

    const user = {
      accessToken: response.id,
      ...userGet
    };

    console.log('user', user);

    this.props.login(user);
    this.props.history.push('/dashboard');
  }

  estiloErrorForm() {
    this.setState({
      erroresForm: {
        message: 'Verify your email and password.'
      }
    });
  }

  render() {
    return (
      <LoginView
        state={this.state}
        onClick={e => this.handleSubmit(e)}
        onChange={e => this.handleTextChange(e)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
