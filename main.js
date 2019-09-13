//Heranca
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


/*class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

//Instanciar Classe
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo();
}*/

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Ricardo';
    }   
    
    mostraUsuario() {
        console.log(this.usuario);
    }
}

//Instanciar Classe : var ou const
var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();



/*Metodo estatico nao encherga o restante da classe
class Matematica {
   
    static soma(a, b) {
        return a + b;
       }
}

console.log(Matematica.soma(4,6));
*/
