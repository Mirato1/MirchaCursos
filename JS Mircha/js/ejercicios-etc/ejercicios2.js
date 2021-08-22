/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

const contarLetras = (cadena = "") =>{
    if(!cadena) return console.warn("No ingresaste una cadena");

    if (typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado no es un texto`);

    let vocales = 0,
        consonantes = 0;

    cadena = cadena.toLocaleLowerCase();
    
    for (let letra of cadena) {
        if(/[aeiouáéíóúü]/.test(letra)) vocales++;
        
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
        
    }
    return console.info({
        cadena,
        vocales,
        consonantes 
    })
}

contarLetras("ÚüÜÜÜÜ");


/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

const validarNombre = (nombre = "") => {
    if(!nombre) return console.warn("No ingresaste un nombre");

    if(typeof nombre !== "string") return console.error(`El valor ${nombre} no es un texto`);

    //^ No puede haber nada antes de la expresion // $ No puede haber nada después de la expresión  \s Para espacios en blanco
    let expRegular = /^[A-Za-zÑñÁaÉéÍiÓoÚúÜü\s]+$/g.test(nombre);
    
    return (expRegular)
        ?console.info(`"${nombre}"es válido`)
        :console.warn(`"${nombre} no es un nombre válido"`);
}

validarNombre("Lucas Nahuel Giménez");


/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validarEmail = (email = "") => {
    if(!email) return console.warn("No ingresaste un email");

    if(typeof email !== "string") return console.error(`El valor ${email} no es un texto`);

    //^ No puede haber nada antes de la expresion // $ No puede haber nada después de la expresión  \s Para espacios en blanco
    let expRegular = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    
    return (expRegular)
        ?console.info(`"${email}"es válido`)
        :console.warn(`"${email} no es un email válido"`);
}

validarEmail("lucas@hotmail.com");

/* FUSIÓN 19 y 20 */

const validarPatron = (cadena = "", patron = undefined) =>{
    if(!cadena) return console.warn("No ingresaste una cadena a evaluar");

    if(typeof cadena !== "string") return console.error(`El valor ${cadena} no es una cadena de texto`);

    if(patron === undefined) return console.warn("No ingresaste una patron a evaluar");

    if(!(patron instanceof RegExp)) return console.error(`El valor ${patron} no es una expresión regular`);

    let expRegular = patron.test(cadena);
    
    return (expRegular)
        ?console.info(`"${cadena}"cumple con el patrón ingresado`)
        :console.warn(`"${cadena}" no cumple con el patrón ingresado`);
}

validarPatron("lucas@hotmail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);



/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

const devolverCuadrados = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error(`El valor no es un arreglo`);

    if(arr.length === 0) return console.error("Che capo ta vacío :P");

    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} no es un número`);
    }

    const newArr = arr.map(el => el * el);

    return console.info(`Arreglo original: ${arr}\nArreglo elevado al cuadrado: ${newArr}`);
}

devolverCuadrados([1,4,8]);

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/ 

const arrayMinMax = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error(`El valor no es un arreglo`);

    if(arr.length === 0) return console.error("Che capo ta vacío :P");

    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} no es un número`);
    }

    return console.info(`Arreglo original ${arr}\nValor mayor: ${Math.max(...arr)},\nValor menor: ${Math.min(...arr)}`)

}

arrayMinMax([1, 4, 5, 99, -60]);

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

const parImpar = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error(`El valor no es un arreglo`);

    if(arr.length === 0) return console.error("Che capo ta vacío :P");

    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} no es un número`);
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    })
}

parImpar([1,2,3,4,5,6,7,8,9,0]);

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

const ascDesc = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error(`El valor no es un arreglo`);

    if(arr.length === 0) return console.error("Che capo ta vacío :P");

    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} no es un número`);
    }

    return console.info({
        arr,
        asc: arr.map(e=>e).sort((a,b)=>a-b),
        desc: arr.map(e=>e).sort((a,b)=>b-a)
    })
}

ascDesc([7, 5,7,8,6]);
/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

const quitarDuplicados = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de elementos");

    if(!(arr instanceof Array)) return console.error(`El valor no es un arreglo`);

    if(arr.length === 0) return console.error("Che capo ta vacío :P");

    if(arr.length === 1) return console.error("Mínimo 2 elementos bro");

    // return console.info({
    //     original: arr,
    //     sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index) 
    // })

    return console.info({
        original: arr,
        sinDuplicados: [...new Set(arr)]
    })

}

quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

const promedio = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error(`El valor no es un arreglo`);

    if(arr.length === 0) return console.error("Che capo ta vacío :P");

    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} no es un número`);
    }

    return console.info({
        original: arr,
        promedio: arr.reduce((total, num, index, arr) =>{
            total += num;
            if(index === arr.length-1){
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
            } else{
                return total;
            }
        })
    })
}

promedio([9,8,7,6,8,8,3,9,5,10]);


/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
X  - Todos los datos del objeto son obligatorios.
X  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
X  - Valida que el título no rebase los 100 caracteres.
X  - Valida que el director no rebase los 50 caracteres.
X  - Valida que el año de estreno sea un número entero de 4 dígitos.
X  - Valida que el país o paises sea introducidos en forma de arreglo.
X  - Valida que los géneros sean introducidos en forma de arreglo.
X  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
X  - Crea un método estático que devuelva los géneros aceptados*.
X  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
X  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
   }


   static get listaGeneros(){
       return ["Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
   }

   static generosAceptados() {
       return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
   }

   //Validaciones para muchas funciones 

   validarCadena(propiedad, valor){
       if(!valor) return console.warn(`${propiedad} ${valor} está vacío`);

       if(typeof valor !== "string") return console.error(`${propiedad} ${valor} ingresado, NO es una cadena de texto`);

       return true;
   }

   validarLongitud(propiedad, valor, longitud) {
       if(valor.length > longitud) return console.error(`${propiedad} ${valor} excede el número de carácteres permítidos (${longitud})`);
       return true;
   }

   validarNumero(propiedad, valor){
       if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);

       if(typeof valor!== "number") return console.error(`El valor ${valor} Ingresado, No es un número`);

       return true;
   }

   validarArreglo(propiedad, valor){
        if(valor === undefined) return console.warn(`${propiedad} ${valor} ingresado No es un arreglo`);

        if(!(valor instanceof Array)) return console.error(`${propiedad} ${valor} no tiene datos`);

        if(valor.length === 0) return console.error("Che capo ta vacío :P");

        for (let cadena of valor) {
            if(typeof cadena !== "string") return console.error(`El valor ${cadena} no es una cadena`);
    }
    return true;
   }

   //Validaciones Únicas

   validarIMDB (id) {
        if(this.validarCadena("IMDB id", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`IMDB id ${id} no es válido, debe tener 9 carácteres, los 2 primeros letras minúsculas y los restantes números`);
            }
        }
   }

   validarTitulo (titulo) {
        if(this.validarCadena("Titulo", titulo)){
            this.validarLongitud("Título", titulo, 100);
        }
    }  

    validarDirector (director) {
        if(this.validarCadena("Director", director)){
            this.validarLongitud("Director", director, 50);
        }
    } 

    validarEstreno (estreno) {
        if(this.validarNumero("Año de Estreno", estreno)){
            if(!(/^([0-9]){4}$/.test(estreno))){
                return console.error(`Año de Estreno ${estreno} no es válido, debe ser de 4 números`);
            }
        }
   }

   validarPais (pais){
       this.validarArreglo("País", pais)
   }

   validarGeneros (generos){
       if (this.validarArreglo("Géneros", generos)){
           for (let genero of generos) {
               //console.log(genero, Pelicula.listaGeneros.includes(genero));
               if(!Pelicula.listaGeneros.includes(genero)){
                   console.error(`Genero(s) incorrectos "${generos.join(", ")} `);
                   Pelicula.generosAceptados();
               }
           }
       }
   }

   validarCalificacion (calificacion) {
        if(this.validarNumero("Calificación", calificacion)){
            return(calificacion < 0 || calificacion > 10)
                ? console.error(`La calificación debe ser un número entre 0 y 10`)
                : this.calificacion = calificacion.toFixed(1);
        }
    }

    fichaTecnica(){
        console.info(`Ficha Técnica:\nTítulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno}"\nPaís:"${this.pais.join(", ")}"\nGéneros:"${this.generos.join(", ")}"\nCalificación:"${this.calificacion}"\nIMBD ID:"${this.id}"`)
    }


}

// const peli = new Pelicula ({
//     id:"tt1234567",
//     titulo:"El hobbit: un viaje inesperado",
//     director: "Peter Jackson",
//     estreno: 2014,
//     pais: ["Argentina"],
//     generos: ["Adventure"],
//     calificacion: 7.4
// });

// peli.fichaTecnica();

const misPelis = [
    {
        id:"tt0012345",
        titulo:"El hobbit: un viaje inesperado",
        director: "Peter Jackson",
        estreno: 2012,
        pais: ["Argentina"],
        generos: ["Adventure", "Fantasy"],
        calificacion: 7.6
    },
    {
        id:"tt0012346",
        titulo:"El hobbit: la desolación de Smaug",
        director: "Peter Jackson",
        estreno: 2013,
        pais: ["Argentina"],
        generos: ["Adventure", "Fantasy"],
        calificacion: 7.9
    },
    {
        id:"tt0012347",
        titulo:"El Hobbit: la batalla de los cinco ejércitos (The Hobbit: The Battle of the Five Armies)",
        director: "Peter Jackson",
        estreno: 2015,
        pais: ["Argentina"],
        generos: ["Adventure", "Fantasy"],
        calificacion: 7.4
    } 
];

misPelis.forEach(elemento => new Pelicula(elemento).fichaTecnica());