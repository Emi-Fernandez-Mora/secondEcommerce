


import React from 'react'

export default function ItemList() {
    const productos = [
        {id: 0, nombre: "Cadena Merci", precio: 1200, descripcion: "Esto es una cadenita", img: "./././assets/IMAGES/cadena.jpeg" },
        {id: 1, nombre: "Biker", precio: 1800, descripcion: "Esto es una Biker", img: "./././assets/IMAGES/biker.jpeg"},
        {id: 2, nombre: "Campera de Jean", precio: 4500, descripcion: "Esto es una campera de Jean", img: "./././assets/IMAGES/campera.jpeg"  },
        {id: 3, nombre: "Cartera", precio: 3200, descripcion: "Esto es una cartera", img: "./././assets/IMAGES/cartera..jpeg"},
        {id: 4, nombre: "Jean Merci", precio: 4000, descripcion: "Esto es un Jean",img: "./././assets/IMAGES/pantalon.jpeg"},
        {id: 5, nombre: "Piluso", precio: 800, descripcion: "Esto es un piluso", img: "./././assets/IMAGES/piluso.jpeg"},
        {id: 6, nombre: "Short", precio: 2300, descripcion: "Esto es un short", img: "./././assets/IMAGES/short.jpeg"}
    ]
  return (
    <>
        {productos.map(p => <li key={p.id}>{p.nombre}</li>)}
    </>
  )
}




