// tslint:disable
import gql from 'graphql-tag';
export type Sort = "ASC" | "DESC";
export type Offset = "Five" | "Ten" | "Fifteen" | "Twenty" | "TwentyFive" | "Fifty" | "Hundred";
export const LOCAL_MODAL_QUERY = gql`
  query {
    isLogin @client
  }`;

export const TOGGLE_MODAL_MUTATION = gql`
  mutation TOGGLE_MODAL_MUTATION($isLogin: bool!) {
    toggleLogin(isLogin: $isLogin) @client
  }
`;
// loading
export const LOCAL_LOADING_HADER_QUERY = gql`
  query {
    isLoading @client
  }`;

export const TOGGLE_LOADING_HADER_MUTATION = gql`
  mutation TOGGLE_MODAL_MUTATION($isLoading: bool!) {
    toggleLoading(isLoading: $isLoading) @client
  }
`;

const PROJECT_TYPE = `
  id
  name
  logo
`

const TOKEN_TYPE = `
    token_type
    expires_in
    access_token
`

const USER_TYPE = `
id
email
profile {
  id
  first_name
  last_name
}
projects {
 ${PROJECT_TYPE}
}
`


export const DELETE_PROJECT_MUTATION = gql`
mutation  deleteProject($id : ID!) {
  deleteProject(
    id: $id
  ) {
   ${PROJECT_TYPE}
  }
}`

export const UPDATE_PROJECT_MUTATION = gql`
mutation updataProject($id : ID!,$name:String!,$logo:String) {
  updataProject(
    id: $id
    name: $name
    logo: $logo
  ) {
    ${PROJECT_TYPE}
  }
}`

export const CREATE_PROJECT_MUTATION = gql`mutation createProject($name:String!,$logo:Staring) {
  createProject(
   name: $name
    logo: $logo
  ) {
    ${PROJECT_TYPE}
  }
}`

export const PROJECTS_QUERY = gql`query projects($count:Int!,$page:Int!){
  projects(count:$count,page:$page) {
     data{
      ${PROJECT_TYPE}
    } 
  }
}`

export const AUTH_QUERY = gql`query Auth {
  profileUser {
    ${USER_TYPE}
  }
}`

export const LOGIN_MUTATION = gql`
mutation Login ($username:String!,$password:String!){
  login(username: $username, password: $password) {
    user {
      ${USER_TYPE}
    }
    auth_token {
       ${TOKEN_TYPE}
    }
  }
}
`

export const SIGNUP_MUTATION = gql`
mutation Signup(
  $username:String,
  $email:String,
  $first_name: String!,
  $last_name: String!,
  $password:String!
) {
  signup(
    username: $username,
    password: $password,
    first_name: $first_name ,
    last_name: $last_name,
    email:  $email,
    ) {
    user {
      ${USER_TYPE}
    }
    auth_token {
       ${TOKEN_TYPE}
    }
  }
}`
export const SOCIAL_MUTATION = gql`mutation Social ($token: String!,$provider: String!){
  social(token: $token,provider: $provider) {
    user {
      ${USER_TYPE}
    }
    auth_token {
       ${TOKEN_TYPE}
    }
  }
}`