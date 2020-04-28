class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }

}

class Admin extends User{
    constructor(email, password) {
        super(email, password);
        this.admin = true;
    }
}

const user = new User("email@teste.com", "1234");
const admin = new Admin("email@teste.com", "1234");

console.log(user.isAdmin());
console.log(admin.isAdmin());