class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.user = "Lucas";
    }

    showUser() {
        console.log(this.user)
    }
}

const myTodoList = new TodoList();

document.getElementById('novotodo').onclick = () => myTodoList.add("Novo todo");

myTodoList.showUser();
