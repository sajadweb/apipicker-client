// disabel:ts-lint
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from './config';
const item = localStorage.getItem("auth");
let token = "";
if (item) {
  const auth = JSON.parse(item);
  token = auth.token;
}

const client = new ApolloClient({
  clientState: {
    defaults: {
      isLogin: false
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



export default client;
