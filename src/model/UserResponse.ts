export class UserResponse {
    constructor(private _username: String, private _token: String, private _role: String) {}

    get username(): String {
        return this._username;
    }

    get token(): String {
        return this._token
    }

    get role(): String {
        return this._role;
    }
}