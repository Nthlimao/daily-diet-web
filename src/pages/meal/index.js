import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Loader } from '../../components';
import { SEARCHDAILY } from '../../services/schemas';

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
    
    const onCompleted = (data) => { return data; };
    const onError = (error) => { return error; };
    if (onCompleted || onError) {
        if (onCompleted && !loading && !error) {
            console.log(moment(data.searchDaily.date).format("YYYY-MM-DD"));
        } else if (onError && !loading && error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    // }, [data, loading, error]);

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
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Meal;