export class UserResponse {
    constructor(private username: String, private token: String) {}

    get getUsername(): String {
        return this.username;
    }

    get getToken(): String {
        return this.token
    }
}