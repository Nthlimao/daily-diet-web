import Auth from '../auth';

const getErrorGraphql = (error) => {
    const graphQLErrors = error.graphQLErrors;
    
    graphQLErrors.forEach(err => {
        console.log(err.message);
        switch (err.message) {
            case 'Token invalid':
                Auth.clean();
                window.location.reload();
                return 'Token Inválido.';
            default:
                return err.message;
        }
    });
}

export { getErrorGraphql }