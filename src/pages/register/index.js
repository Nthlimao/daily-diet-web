import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { REGISTER } from '../../services/schemas';

import './styles.css';

const Register = () => {
    const [variables, setVariables] = useState({ name: "", cpf: "", email: "", password: "", confirmPassword: "", dateOfBirth: "", weight: "", height: "" });
    const [submit, { data, loading, error }] = useMutation(REGISTER);

    console.log(data)

    const handleChange = (event) => {
        event.persist();       
        if(event.target.name === 'weight' || event.target.name === 'height'){
            const value = parseFloat(event.target.value);
            setVariables(variables => ({ ...variables, [event.target.name]: value }));
        } else {
            setVariables(variables => ({ ...variables, [event.target.name]: event.target.value }));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()                
        submit({ variables });
    }

    return (
        <div className="page-register">
            <form className="form container-register" onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="text" placeholder="Nome" name="name" onChange={(e) => handleChange(e)} value={variables.name} required />
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="text" placeholder="CPF" name="cpf" onChange={(e) => handleChange(e)} value={variables.cpf} required />
                            <i className="fas fa-id-badge"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="email" placeholder="E-mail" name="email" onChange={(e) => handleChange(e)} value={variables.email} required />
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="text" placeholder="Data de nascimento" name="dateOfBirth" onChange={(e) => handleChange(e)} value={variables.dateOfBirth} required />
                            <i className="fas fa-birthday-cake"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="password" placeholder="Senha" name="password" onChange={(e) => handleChange(e)} value={variables.password} required />
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="password" placeholder="Repetir senha" name="confirmPassword" onChange={(e) => handleChange(e)} value={variables.confirmPassword} required />
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="number" placeholder="Peso" name="weight" min="1" max="500" onChange={(e) => handleChange(e)} value={variables.weight} required />
                            <i className="fas fa-weight"></i>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="number" placeholder="Altura" name="height" min="1" max="1000" onChange={(e) => handleChange(e)} value={variables.height} required />
                            <i className="fas fa-ruler-vertical"></i>
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary transition">Criar Conta</button>
            </form>
        </div>
    );
}

export default Register;