// disabel:ts-lint
import ApolloClient, { gql } from 'apollo-boost';
import { endpoint, prodEndpoint } from './config';
import { getToken } from '../utils';
 
import { InMemoryCache } from 'apollo-cache-inmemory';
import { LOCAL_LOADING_HADER_QUERY } from '.';
const token =  getToken();
 
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  clientState: {
    defaults: {
      isLogin: !!localStorage.getItem('token'),
      isLoading: false
    },
    resolvers: {
      Mutation: {
        toggleLogin: (_: any, variables: { isLogin: any; }, { cache }: any) => {
          const data = {
            data: { isLogin: variables.isLogin },
          };
          cache.writeData(data);
          // debugger;
          return data;
        },
        toggleLoading: (_: any, variables: { isLoading: any; }, { cache }: any) => {
         const {isLoading}= cache.readQuery({
           query:LOCAL_LOADING_HADER_QUERY
         });
         debugger;
          const data = {
            data: { isLoading: !isLoading},
          };
          cache.writeData(data);
          // debugger;
          return data;
        },
      }
    }
  },
  fetchOptions: {
    credentials: 'include'
  },
  request: async (operation: any) => {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  },
  uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,

});


export {
  cache
}

export default client;
