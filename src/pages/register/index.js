import React from 'react';
import useRegisterForm from './hook';

import './styles.css';

const Register = () => {
    const signup = () => {
        alert(`User Created!
               Name: ${inputs.firstName} ${inputs.lastName}
               Email: ${inputs.email}`);
    }
    const { inputs, handleInputChange, handleSubmit } = useRegisterForm(signup);

    return (
        <div className="page-register">
            <form className="form container-register" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="text" placeholder="Nome" name="name" onChange={handleInputChange} value={inputs.name} required />
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="text" placeholder="CPF" name="cpf" onChange={handleInputChange} value={inputs.cpf} required />
                            <i className="fas fa-id-badge"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="email" placeholder="E-mail" name="email" onChange={handleInputChange} value={inputs.email} required />
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="text" placeholder="Data de nascimento" name="dateOfBirth" onChange={handleInputChange} value={inputs.dateOfBirth} required />
                            <i className="fas fa-birthday-cake"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="password" placeholder="Senha" name="password" onChange={handleInputChange} value={inputs.password} required />
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="password" placeholder="Repetir senha" name="confirmPassword" onChange={handleInputChange} value={inputs.confirmPassword} required />
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="number" placeholder="Peso" name="weight" min="1" max="500" onChange={handleInputChange} value={inputs.weight} required />
                            <i className="fas fa-weight"></i>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="input-group">
                            <input type="number" placeholder="Altura" name="height" min="1" max="1000" onChange={handleInputChange} value={inputs.height} required />
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