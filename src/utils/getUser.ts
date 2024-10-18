export function getUser(): string|null {
    return localStorage.getItem('role');
}