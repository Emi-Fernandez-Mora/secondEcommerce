import cadena from '../assets/cadena.jpeg'

const products =  [
    {"id": 0, "categoria":"Joyas", "nombre": "Cadena Merci", "precio": 1200, "descripcion": "Esto es una cadenita", "img": cadena},
    {"id": 1, "categoria":"Ropa","nombre": "Biker", "precio": 1800, "descripcion": "Esto es una Biker", "img":"biker.jpeg" },
    {"id": 2,"categoria":"Ropa", "nombre": "Campera de Jean", "precio": 4500, "descripcion": "Esto es una campera de Jean", "img":"campera.jpeg"  },
    {"id": 3, "categoria":"Accesorio","nombre": "Cartera", "precio": 3200, "descripcion": "Esto es una cartera", "img":"cartera.jpeg"  },
    {"id": 4,"categoria":"Ropa", "nombre": "Jean Merci", "precio": 4000, "descripcion": "Esto es un Jean", "img":"pantalon.jpeg"  },
    {"id": 5,"categoria":"Accesorio", "nombre": "Piluso", "precio": 800, "descripcion": "Esto es un piluso" , "img":"/piluso.jpeg" },
    {"id": 6,"categoria":"Ropa", "nombre": "Short", "precio": 2300, "descripcion": "Esto es un short", "img":"short.jpeg"  }
]

export const getFetch = ( id ) =>{
    
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(id) {
                    resolve( products.find(prod => prod.id === id) )
                } else {
                    resolve(products)
                }

                reject(console.log('error'));
            },1500);

    })

}
