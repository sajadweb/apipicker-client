import { cache } from "../../common";

function togelLogin(params:boolean):void {
    const data = {
        data: { isLogin: params },
      };
    cache.writeData(data);
}

export {
    togelLogin
}