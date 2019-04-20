import { cache } from "../../common";

function togelLoading(params:boolean):void {
    const data = {
        data: {
             isLoading: true,
             visibilityFilter: 'SHOW_ALL',
             networkStatus: {
               __typename: 'NetworkStatus',
               isConnected: false,
             },
             
        
        },
      };
      
    cache.writeData(data);
}

export {
    togelLoading
}