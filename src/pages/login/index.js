import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../../services/schemas';
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

  return (
    <div className="page-login">
      <form className="form container-login" onSubmit={(e) => {
        e.preventDefault()
        submit({ variables });
      }}>
        <div className="input-group">
          <input type="email" placeholder="E-mail" name="email" value={variables.email} onChange={(e) => handleChange(e)} />
          <i className="fas fa-envelope"></i>
        </div>
        <div className="input-group">
          <input type="password" placeholder="Senha" name="password" value={variables.password} onChange={(e) => handleChange(e)} />
          <i className="fas fa-lock"></i>
        </div>
        <button className="btn btn-primary transition">Login</button>
      </form>
    </div>
  );
}
 

export default Login;