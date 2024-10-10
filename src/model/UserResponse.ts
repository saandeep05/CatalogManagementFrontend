export class UserResponse {
    constructor(private _username: String, private _token: String) {}

    get username(): String {
        return this._username;
    }

    get token(): String {
        return this._token
    }
}