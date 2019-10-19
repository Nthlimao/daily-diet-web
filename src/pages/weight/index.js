import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Loader } from '../../components';
import { UPDATEWEIGHT } from '../../services/schemas';

const Weight = () => {
    const [submit, { data, loading, error }] = useMutation(UPDATEWEIGHT);
    const [variables, setVariables] = useState({ weight: '' }); 

    let errorMessage = '',
        successMessage = '';
  
    if(error) {
        errorMessage = <p>error.message</p>;
    }
    
    const handleChange = (event) => {
        event.persist();
        setVariables(variables => ({ ...variables, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = parseFloat(variables.weight);
        variables.weight = value;
        submit({ variables });
    }

    if(loading === false && data !== undefined) {
        const { updateWeight } = data;
        if(updateWeight) {
            variables.weight = '';
            successMessage = <p>Peso Atualizado com sucesso!</p>
        }
    }

    return (
        <div className="internal-dashboard">
            <Loader active={loading} />
            <div className="internal-header">
                <h2 className="title">Atualizar Peso</h2>
            </div>
            <div className="internal-content">
                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                        <div className="col-3">
                            <div className="input-group">
                                <input type="text" placeholder="Inserir novo peso" name="weight" value={variables.weight} onChange={(e) => handleChange(e)} required/>
                                <i className="fas fa-weight"></i>
                            </div>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary transition">Atualizar</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="form-success-message">
                                {successMessage}
                            </div>
                            <div className="form-error-message">
                                {errorMessage}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Weight;