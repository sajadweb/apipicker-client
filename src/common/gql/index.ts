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