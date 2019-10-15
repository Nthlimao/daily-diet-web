import gql from 'graphql-tag';

export const USERS =  gql`{ 
    users { 
        id 
        name 
        email 
    }
}`;

export const USER = gql`
    query User($id: ID!){
        user(id: $id){
            id
            name
            email
        }
    }
`;

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                name
                email
                cpf
                dateOfBirth
            }
        }
    }
`;
