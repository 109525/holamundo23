//Funcion para llenar dinamicamente
//la tienda
/*
1.el export function llenarTienda(){} no va
2.hay que crear un html (landingpage) donde vamos a dibujar todo el contenido que trabajamos en js.
3.en el arrat faltaban comas para separar cada objeto
4.el forEch estaba con la e minuscula y siempre la debe tener mayuscula 
5.en la variable fila el elemento creado (fila) no es etiqueta de html, se debe cambiar por un div 
6.col-4 en la variable columna no es una etiqueta de html, se debe cambiar por un div
7.hay muchos classList.add innecesarios.
8.producto es el imagen.src, está mal, ya que debe ir en pluralporque hace referencia a las fotos del arreglo. lo mismo pasa en el "precio.textcontent
9.let separador debe ser un createElement
10. faltaba agregar el parametro producto a la funcion


*/
    let productos = [

        { nombre: "Batimovil a escala", precio: 400000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/batimovil.jpg?alt=media&token=4ceceb2d-5252-469a-b25a-9de3497c95cc", descripcion: "Batimovil a escala de la ultima pelicula" },
        { nombre: "Camiseta Batman", precio: 80000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/camiseta.jpg?alt=media&token=0a88b10b-e436-4191-8620-cfd0eac1dabd", descripcion: "Camiseta original DC" },
        { nombre: "Gorra Batman", precio: 50000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/gorra.jpg?alt=media&token=ed18f3d3-3174-4ea8-a826-a9c5cb17deaf", descripcion: "Gorra original DC" },
        { nombre: "Bati termo DC", precio: 35000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/termop%20batman.webp?alt=media&token=a8d2e74c-4e30-4f5f-8ea9-a6d21279b128", descripcion: "Termo para bati chocolate" },
        { nombre: "Batmav v Superman", precio: 300000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/bati%20imagen.jpg?alt=media&token=11c2de61-674a-459a-9437-41c0c96d50cb", descripcion: "Imagen a escala de la pelicula Batman v Superman" },
        { nombre: "Bati morral Totto", precio: 80000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/morral.jpg?alt=media&token=e8080f04-c5c4-4829-9770-c619f61fbb47", descripcion: "Bolso original DC" },
        { nombre: "Silla Gaming Batman", precio: 2000000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/silla.jpg?alt=media&token=873b0fff-2407-4bc0-8df3-64692b481371", descripcion: "Silla comoda y original DC" },
        { nombre: "caja de comics Batman", precio: 300000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/caja%20comics.jpg?alt=media&token=99aaeaf9-3c61-48ac-b011-ca97e229def7", descripcion: "comics Batman originales" },
        { nombre: "Bati caja sorpresa", precio: 250000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/caja%20sorpresa.jpg?alt=media&token=ae0dc96d-5c47-4767-95b8-4f8300d0df44", descripcion: "Caja sorpresa con productos de batman" },
        { nombre: "Bati lonchera totto", precio: 80000, foto: "https://firebasestorage.googleapis.com/v0/b/proyectopractica-b5d2d.appspot.com/o/lonchera.jpg?alt=media&token=736ea379-5cec-4a2a-9414-446f445e4432", descripcion: "Lonchera para llevar tus bati alimentos" }

    ]

    //Rutina para recorrer el arreglo y crear las tarjetas de cada producto

    //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
    let fila = document.getElementById("fila")

    //2. Necesito recorrer un arreglo
    productos.forEach(function (producto) {

        //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
        let columna = document.createElement("div")
        columna.classList.add("col-md-4")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "h-100")
        
        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top", "p-3","h-75")
        imagen.src = producto.foto

        let separador = document.createElement("hr")
        separador.classList.add("w-50","mx-auto","d-block")
        

        let nombre = document.createElement("h5")
        nombre.classList.add("fw-bold","text-center","mx-3")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h6")
        precio.classList.add("text-center","text-muted")       
        precio.textContent = producto.precio

        let botonAmpliarInfo = document.createElement("button")
        botonAmpliarInfo.setAttribute("type", "button")
        botonAmpliarInfo.classList.add("btn","btn-outline-dark","mx-3","mb-3")
        botonAmpliarInfo.textContent = "Ver producto"


        //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
        //QUE ACABAMOS DE CREAR EN NUESTRA BASE
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(botonAmpliarInfo)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)



    })



