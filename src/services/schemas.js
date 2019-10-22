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

export const UPDATEWEIGHT = gql`
    mutation UpdateWeight($weight: Float!) {
        updateWeight(weight: $weight) {
            weights  {
                id
                value
            }
        }
    }
`;

export const UPDATEHEIGHT = gql`
    mutation UpdateHeight($height: Float!) {
        updateHeight(height: $height) {
            heights {
                id
                value
            }
        }
    }
`;

export const SEARCHDAILY = gql`
    query SearchDaily($date: String!){
        searchDaily(date: $date) {
            date
            breakfast {
                title
                itens {
                    id
                    food
                    quantity
                    measure
                    calories
                }
            }
            morning_snack {
                title
                itens {
                    id
                    food
                    quantity
                    measure
                    calories
                }
            }
            lunch {
                title
                itens {
                    id
                    food
                    quantity
                    measure
                    calories
                }
            }
            afternoon_snack {
                title
                itens {
                    id
                    food
                    quantity
                    measure
                    calories
                }
            }
            dinner {
                title
                itens {
                    id
                    food
                    quantity
                    measure
                    calories
                }
            }
            supper {
                title
                itens {
                    id
                    food
                    quantity
                    measure
                    calories
                }
            }
        }
    }
`;

export const STOREDAILY = gql`
    mutation StoreDaily($date: String!) {
        storeDaily(date: $date) {
            id
            date           
        }
    }
`;