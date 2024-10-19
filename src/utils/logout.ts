export function logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
}