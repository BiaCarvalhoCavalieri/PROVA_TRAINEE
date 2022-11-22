import { gql } from "@apollo/client"

export const POST_LOGIN = gql`
    mutation signIn($input: SignInInput!){
        signIn(input:  $input){
        token
        user {
            email
            name
        }
    }
}
`;