/*  1) Programa una función que cuente el número de caracteres de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá 10. */

const counter = (words) => {
    try {
        if (words == "") {
            throw "ERROR: Texto Vacío";
          }
          else if(typeof(words) !== "string"){
            throw "ERROR: No es un texto";;
          }
          else {
            console.log(`Tú cadena mide ${words.length} carácteres`);
          }
    } catch (error) {
        alert(`${error}`);
    }
};

counter('Hola Mundo');

/* Ejercicio por Mircha */

const contarCaracteres = (cadena = "") => 
  (!cadena || typeof cadena !== "string")
    ? console.warn("No ingresaste nada ó no es un texto")
    : console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

contarCaracteres("Hola");


/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

const cortar = (frase, cant) => {
    try {
        if (frase == "" || cant == 0) {
            throw "ERROR: Texto Vacío ó Cantidad Inválida";
          }
          else if(typeof(frase) !== "string" || typeof(cant) !== "number"){
            throw "ERROR: No es un texto ó la cantidad no es un número";;
          }
          else {
            let textoR = frase.slice(0, cant);
            console.log(textoR);
          }
    } catch (error) {
        alert(`${error}`);
    }
}

cortar("Hola Mundo", 4);

/* Ejercicio por Mircha */

const recortarTexto = (cadena = "", longitud = undefined) => 
  (!cadena || typeof cadena !== "string" || typeof longitud !== "number")
    ? console.warn("No ingresaste nada ó no es un texto")
    : (longitud === undefined)
      ?console.warn("No ingresaste ninguna longitud")
      :console.info(cadena.slice(0, longitud));

recortarTexto("Hola Mundo", 2);

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */ 

const ejercicio03 = (string, separator) => {
  try {
    if (string === "") {
        throw "ERROR: Texto Vacío";
      }
      else if(typeof(string) !== "string"){
        throw "ERROR: No es un texto";;
      }
      else {
        console.log(string.split(separator));
      }
  } catch (error) {
    alert(`${error}`);
  }
}

ejercicio03("Hola que tal", " ");

/* Ejercicio por Mircha */

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  (!cadena || typeof cadena !== "string")
    ? console.warn("No ingresaste nada")
    : (separador === undefined)
      ? console.warn("No ingresaste un caracter separador")
      : console.info(cadena.split(separador));

cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep", ",")

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const ejercicio04 = (string, multiplicador) => {
  try {
    if (string === "" || multiplicador === 0 || Math.sign(multiplicador) === -1) {
        throw "ERROR: Texto Vacío ó cantidad inválida";
      }
      else if(typeof(string) !== "string" || typeof(multiplicador) !== "number"){
        throw "ERROR: No es un texto ó el multiplicador no es un número";;
      }
      else {
        for (let i = 0; i < multiplicador; i++) {
          console.log(`${string} ${i+1}`);
        }
      }
  } catch (error) {
    alert(`${error}`);
  }
}

ejercicio04("Hola", 5);

/* Ejercicio por Mircha */

const repetirTexto = (texto = "", veces = undefined) =>{
  if(!texto) return console.warn("No ingresaste un texto");

  if(veces === undefined) return console.warn("No ingresaste la cantidad de veces");

  if(veces === 0) return console.error("El número de veces no puede ser 0");

  if(Math.sign(veces) === -1) return console.error("El número no puede ser negativo");
  
  for (let i = 1; i <= veces; i++) {
    console.info(`${texto}, ${i}`);
  }

}

repetirTexto("Hola Mundo", 3)


/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const invertir = (cadena = "") => 
  (!cadena)
    ? console.warn("No ingresaste nada ó no es un texto")
    : console.info(cadena.split("").reverse().join(""));

invertir("Hola Mundo");

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const textoEnCadena = (cadena ="", texto = "") => {
  if (!cadena) return console.warn("No ingresaste el texto largo");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;

  while(i !== -1){
    i = cadena.indexOf(texto, i)
    if(i !== -1){
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

textoEnCadena("Hola mundo adios mundo", "mundo");


/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const palindromo = (palabra ="") => {
  if(!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return(palabra === alReves)
    ?console.info(`Sí es palíndromo`)
    :console.info(`No es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
}

palindromo("Salas");


/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const eliminarCaracteres = (texto ="", patron = "") =>
  (!texto)
    ?console.warn("No ingresaste un texto")
    :(!patron)
      ?console.warn("No ingresaste un patrón de caracteres")
      :console.info(texto.replace(new RegExp(patron, "ig"), ""))

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");


/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500));

aleatorio();


/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un número");

  if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, no es un número`);

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return (numero === alReves)
    ?console.info(`Sí es capicúa`)
    :console.info(`No es capicúa, Número original ${numero}, Número al revés ${alReves}`);
}

capicua(2000);



/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (numero = undefined) =>{
  if (!numero === undefined) return console.warn("No ingresaste un número");

  if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, no es un número`);

  if(Math.sign(numero) === -1)return console.error("El número no puede ser negativo");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`);
}

factorial(7);

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const numeroPrimo = (numero = undefined) =>{
  if (!numero === undefined) return console.warn("No ingresaste un número");

  if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, no es un número`);

  if(numero === 0 || numero === 1) return console.error("El número no puede ser 0 ni 1");

  if(Math.sign(numero) === -1)return console.error("El número no puede ser negativo");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if ( (numero % i) === 0) {
      divisible = true;   
      break;
    }
  }
  return (divisible)
    ?console.log(`El número ${numero} No es primo`)
    :console.log(`El número ${numero} Sí es primo`)
}

numeroPrimo(10);



/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

const esPar = (numero = undefined) =>{
  if (!numero === undefined) return console.warn("No ingresaste un número");

  if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, no es un número`);

  return (numero % 2 === 0)
    ?console.info(`El número ${numero} es Par`)
    :console.info(`El número ${numero} es impar`);
}

esPar(10);


/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if(grados === undefined) return console.warn("No ingresaste grados a convertir");

  if(typeof grados!== "number") return console.error(`El valor ${grados} Ingresado, No es un número`);

  if(unidad === undefined) return console.warn("No ingresaste la unidad a convertir");

  if(typeof unidad!== "string") return console.error(`El valor ${unidad} Ingresado, No es un una unidad`);

  if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

  if(unidad === "C"){
    return console.info(`${grados}°C = ${((grados * (9/5) + 32)).toFixed(2)}°F`)
  } else if(unidad === "F"){
    return console.info(`${grados}°F = ${((grados - 32) * (5/9)).toFixed(2)}°C`)
  }
}

convertirGrados(31, "C");
convertirGrados(153.1, "F");




/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/

const convertirBinarioDecimal = (numero = undefined, base = undefined) =>{
  if(numero === undefined) return console.warn("No ingresaste numero a convertir");

  if(typeof numero!== "number") return console.error(`El valor ${numero} Ingresado, No es un número`);

  if(base === undefined) return console.warn("No ingresaste la base a convertir");

  if(typeof base!== "number") return console.error(`El valor ${base} Ingresado, No es un una unidad`);

  if(base === 2){
    return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
  } else if (base === 10){
    return console.info(`${numero} base ${base} = ${(numero.toString(base))} base 2`)
  } else{
    return console.error("El tipo de base no es válido");
  }
}

convertirBinarioDecimal(4, 10);


/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

const montoFinal = (monto = undefined, descuento = 0) =>{
  if(monto === undefined) return console.warn("No ingresaste monto");

  if(typeof monto!== "number") return console.error(`El valor ${monto} Ingresado, No es un número`);

  if(monto === 0) return console.error("El monto no puede ser 0");

  if(Math.sign(monto) === -1)return console.error("El monto no puede ser negativo");

  if(typeof descuento!== "number") return console.error(`El valor ${descuento} Ingresado, No es un número`);

  if(Math.sign(descuento) === -1)return console.error("El descuento no puede ser negativo");

  return console.info(`$${monto} - ${descuento}% = $${monto - ((monto * descuento)/100)}`)
}

montoFinal(1000, 20);



/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const calcularAnios = (fecha = undefined) =>{
  if(fecha === undefined) return console.warn("No ingresaste la fecha");

  if(!(fecha instanceof Date)) return console.error(`El valor Ingresado no es una fecha válida`);

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return (Math.sign(aniosHumanos) === -1)
    ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(aniosHumanos) === 1)
      ?console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}.`)
      :console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}

calcularAnios(new Date(1997, 7, 19));