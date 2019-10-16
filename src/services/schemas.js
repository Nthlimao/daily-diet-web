import gql from 'graphql-tag';

export const USERS = gql`{ 
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

export const REGISTER = gql`
    mutation Register($name: String!, $cpf: String!, $email: String!, $dateOfBirth: String!, $password: String!, $confirmPassword: String!, $weight: Float, $height: Float){
        register(name: $name, cpf: $cpf, email: $email, dateOfBirth: $dateOfBirth,password: $password, confirmPassword: $confirmPassword, weight: $weight, height: $height) {
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