import React from 'react';
import moment from 'moment';
import { useMutation } from '@apollo/react-hooks';
import { Loader } from '../../components';
import { STOREDAILY } from '../../services/schemas';
import { useDispatch } from 'react-redux';

const StoreDaily = ({ date }) => {
    const [submit, { data, loading, error }] = useMutation(STOREDAILY);
    const dispatch = useDispatch();

    if(data || error) {
        if(data && !loading && !error) {
            dispatch({ type: 'STORE_NEW_DAILY', daily: data.storeDaily });
        } else if(!data && !loading && error) {
            return <p>{error.graphQLErrors[0]}</p>;
        }
    }

    const handleSubmit = () => {
        submit({ variables: {
            date: moment(date).format("YYYY-MM-DD")
        }})
    }
    
    return (
        <div>
            <Loader active={loading} />
            <button className="btn btn-primary transition" onClick={() => handleSubmit()}>Adicionar Refeições do dia</button>
        </div>
    );
}

export default StoreDaily;