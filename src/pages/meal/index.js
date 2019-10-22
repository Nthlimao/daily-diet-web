import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import { Loader } from '../../components';
import { SEARCHDAILY } from '../../services/schemas';
import { getErrorGraphql } from '../../helpers/error.helper';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const Meal = () => {
    const [selected, setSelected] = useState({ startDate: new Date() });
    const { data, loading, error } = useQuery(
        SEARCHDAILY, {
        variables: {
            date: moment(selected.startDate).format("YYYY-MM-DD")
        }
    });

    let errorMessage = false;
    let daily = null;

    if(data || error) {
        if(data && !loading && !error) {
            const { searchDaily } = data;
            daily = searchDaily;
            console.log(searchDaily);
        } else if (!data && !loading && error) {
            errorMessage = getErrorGraphql(error);
        }
    }

    const handleChange = date => {
        setSelected({ startDate: date });
    }

    return (
        <div className="internal-dashboard">
            <Loader active={loading} />
            <div className="internal-header">
                <h2 className="title">Adicionar nova refeição</h2>
            </div>
            <div className="internal-content">
                <div className="form form-inline row align-center">
                    <div className="col-2">
                        <label className="label">
                            Selecione data
                        </label>
                    </div>
                    <div className="col-3">
                        <DatePicker selected={selected.startDate} onChange={handleChange} />
                    </div>
                    <div className="col-4">
                        { daily === null ? <button className="btn btn-primary transition">Adicionar Refeições do dia</button> : '' }
                        
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Meal;