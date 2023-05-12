class User {
    constructor(email, name, password, security_level) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.security_level = security_level;
    }
}

module.exports = User;