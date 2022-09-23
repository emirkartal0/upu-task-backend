
interface userName {
    tr: string,
    en: string,
}

enum userRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
}

export { userName };
export default userRole;