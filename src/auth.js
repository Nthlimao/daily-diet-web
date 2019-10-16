class Auth {
    constructor() {
        this.USER_KEY = 'react_daily_diet_user';
    }

    clean() {
        localStorage.removeItem(this.USER_KEY);
    }

    read() {
        const data = localStorage.getItem(this.USER_KEY);

        return (data !== null) 
            ? JSON.parse(data) || null
            : null; 
    }

    write(data) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(data));
    }

    token() {
        const user = this.user();

        return (user && user.token)
            ? user.token
            : null;
    }

    isLoggedIn() {
        const user = this.user();

        return (user && user.token)
            ? true
            : false;
    }

    user() {
        return this.read();
    }

    login(data) {
        const { user, token } = data;
        
        user.token = token;
        this.write(user);
    }

    logout() {
        this.clean();
    }
}

export default new Auth();