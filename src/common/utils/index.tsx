export const GITHUB_URI = "/login/github";
export const GOOGLE_URI = "/login/google";
export const BACKEND_URI = "http://127.0.0.1:8000";
export const CLIENT_URI = "http://10.0.75.1:3000";
export const redirectTo = (uri: string): void => {
    window.location.href = uri;
}
export const getToken = (): string | null => {
//    return null;
   return localStorage.getItem("token");
}
interface AuthToken {
    token_type: string;
    expires_in: string;
    access_token: string;
}
interface AuthUser {
    email?: string;
    profile: {
        first_name?: string;
        last_name?: string;
        avatar?: string;
    }
}
//TODO add this
// export const AuthSave = (user: AuthUser, auth_token: AuthToken): void => {
export const AuthSave = (user: any, auth_token: any): void => {
    if (user) {
        localStorage.setItem("user", JSON.stringify(user))
    }
    if (auth_token) {
        localStorage.setItem("auth_token", JSON.stringify(auth_token))
        localStorage.setItem("token", auth_token.access_token)
    }
}
