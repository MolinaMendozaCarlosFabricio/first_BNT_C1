import { tree } from "./dependencies.js";
import Producto from "../models/bst/Producto.js";

const agregarProducto = () => {
    let nombre = document.getElementById("nombre").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let id = document.getElementById("id").value;
    let existencias = parseInt(document.getElementById("existencias").value);

    console.log("Agregando producto:", { nombre, precio, id, existencias });

    if (nombre != "" && precio != "" && id != "" && existencias != "") {
        let nuevoProducto = new Producto(nombre, precio, id, existencias);
        tree.empezarAAnadir(nuevoProducto);
        alert("Producto agregado exitosamente.");
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
};

const actualizarLista = () => {
    const listaProductos = document.getElementById("colaDeImpresion");
    listaProductos.innerHTML = "";

    const imprimirProducto = (producto) => {
        const productoListado = document.createElement("li");
        productoListado.textContent = `Nombre del producto: ${producto.nombre}, Precio: ${producto.precio}, ID del producto: ${producto.id}, Existencias: ${producto.exitencias}`;
        listaProductos.appendChild(productoListado);
    };

    tree.empezarRecorrido(imprimirProducto);
};

const buscarEnLaLista = () => {
    let nombreBuscado = document.getElementById("nombreABuscar").value;
    const listaProductosEncontrados = document.getElementById("resultados");
    listaProductosEncontrados.innerHTML = "";

    const imprimirResultados = (producto) => {
        const productoEncontrado = document.createElement("li");
        productoEncontrado.textContent = `Nombre del producto: ${producto.nombre}, Precio: ${producto.precio}, ID del producto: ${producto.id}, Existencias: ${producto.exitencias}`;
        listaProductosEncontrados.appendChild(productoEncontrado);
    }

    tree.empezarBusqueda(imprimirResultados, nombreBuscado);
}

const buscarMaxMin = () => {
    const minEncontrado = document.getElementById("min");
    minEncontrado.innerHTML = "";
    tree.empezarABuscarMin(minEncontrado);

    const maxEncontrado = document.getElementById("max");
    maxEncontrado.innerHTML = "";
    tree.empezarAbuscarMax(maxEncontrado);
}

let btnAdd = document.getElementById("btn-agregar");
btnAdd.addEventListener("click", agregarProducto);

let btnRefresh = document.getElementById("refresh");
btnRefresh.addEventListener("click", actualizarLista);

let btnSeach = document.getElementById("search");
btnSeach.addEventListener("click", buscarEnLaLista);

let btnSearchMinMax = document.getElementById("max-min");
btnSearchMinMax.addEventListener("click", buscarMaxMin);