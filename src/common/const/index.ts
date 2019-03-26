export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
    | "COPY" | "HEAD" | "OPTIONS" | "LINK" | "UNLINK"
    | "PURGE"
    | "LOCK"
    | "UNLOCK"
    | "PROPFIND"
    | "VIEW";
interface Params {
    key: string;
    value: string;
    description?: string;
}
export interface IPropsCode {
    method: Method;
    title: string,
    description?: string,
    path: string,
    prefix?: string,
    header?: Array<Params>,
    params?: Array<Params>,
    body?: string | object
    receive?: string | object
}
export interface IPropsCarousel {
    title: string,
    description?: string,
    button?: string,
    image: string,
    
}
const Const= {
    title: "ApiPicker",
    v1: "1.0.1ورژن ",
    maxWidth: 1200,
};

export {
    Const
}