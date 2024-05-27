import Node from "./Node.js";

class BST {
    constructor() {
        this.root = null;
    }

    empezarAAnadir(valor) {
        if (this.root === null) {
            this.root = new Node(valor);
        } else {
            this.#insertarNodo(this.root, valor);
        }
    }

    #insertarNodo(nodo, valor) {
        if (valor.nombre < nodo.value.nombre) {
            if (nodo.left === null) {
                nodo.left = new Node(valor);
            } else {
                this.#insertarNodo(nodo.left, valor);
            }
        } else {
            if (nodo.right === null) {
                nodo.right = new Node(valor);
            } else {
                this.#insertarNodo(nodo.right, valor);
            }
        }
    }

    empezarRecorrido(callback) {
        this.#recorridoEnOrden(this.root, callback);
    }

    #recorridoEnOrden(nodo, callback) {
        if (nodo !== null) {
            this.#recorridoEnOrden(nodo.left, callback);
            callback(nodo.value);
            this.#recorridoEnOrden(nodo.right, callback);
        }
    }

    empezarBusqueda(callback, nombreABuscar){
        this.buscar(this.root, callback, nombreABuscar)
    }

    buscar (nodo, callback, nombreABuscar){
        if(nodo !== null) {
            this.buscar(nodo.left, callback, nombreABuscar);
            if (nombreABuscar == nodo.value.nombre)
                callback(nodo.value);
            this.buscar(nodo.right, callback, nombreABuscar);
        }
    }

    empezarABuscarMin (minimo){
        this.buscarMinimo(this.root, minimo)
    }

    buscarMinimo (nodo, minimo){
        if(nodo !== null){
            if(nodo.left !== null)
                this.buscarMinimo(nodo.left, minimo)
            else{
                const producto = document.createElement("li");
                producto.textContent = `Nombre del producto: ${nodo.value.nombre} Precio: ${nodo.value.precio} ID: ${nodo.value.id} Existencias: ${nodo.value.exitencias}`;
                minimo.appendChild(producto);
            }
        }
    }

    empezarAbuscarMax (maximo){
        this.buscarMaximo(this.root, maximo);
    }
    buscarMaximo (nodo, maximo){
        if(nodo !== null){
            if(nodo.right !== null)
                this.buscarMaximo(nodo.right, maximo)
            else{
                const producto = document.createElement("li");
                producto.textContent = `Nombre del producto: ${nodo.value.nombre} Precio: ${nodo.value.precio} ID: ${nodo.value.id} Existencias: ${nodo.value.exitencias}`;
                maximo.appendChild(producto);
            }
        }
    }
}

export default BST;
