import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Loader } from '../../components';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../../services/schemas';
import auth from '../../auth';

import './styles.css';

const Login = () => {
  const [submit, { data, loading, error }] = useMutation(LOGIN);
  const [variables, setVariables] = useState({
    email: "",
    password: "",
  });  
  
  const handleChange = (event) => {
    event.persist();
    setVariables(variables => ({ ...variables, [event.target.name]: event.target.value }));
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    submit({ variables });
  }

  if(loading === false && data !== undefined) {
    const { login } = data;

    auth.login(login);
    return <Redirect to="/dashboard"/>;
  }

  return (
    <div className="page-login">
      <Loader active={loading}/>
      <form className="form container-login" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <input type="email" placeholder="E-mail" name="email" value={variables.email} onChange={(e) => handleChange(e)} required/>
          <i className="fas fa-envelope"></i>
        </div>
        <div className="input-group">
          <input type="password" placeholder="Senha" name="password" value={variables.password} onChange={(e) => handleChange(e)} required/>
          <i className="fas fa-lock"></i>
        </div>
        <button className="btn btn-primary transition">Login</button>
      </form>
    </div>
  );
}
 

export default Login;