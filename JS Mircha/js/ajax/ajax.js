//XML
(() =>{

    const xhr = new XMLHttpRequest(),
    //Paso n° 1 la instancia de variables
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

        
        // Paso n°2 asignar el/los evento/s
        xhr.addEventListener("readystatechange", e =>{
            //Sólo importa cuando sea completado, osea que sea equivalente a 4(StateComplete) readyStateChange detecta cualquier cambio.
            if(xhr.readyState !== 4) return;

            console.log(xhr);
            // 100-199 Informativas 200-299 Satisfactorias 300-399 Redirecciones 400-499 Errores Clientes 500-599 Errores Servidores
            if(xhr.status >= 200 && xhr.status < 300){
                //console.log(xhr.responseText);
                let json = JSON.parse(xhr.responseText);
                console.log(json);
                console.log(json);

                json.forEach((el) =>{
                    const $li = document.createElement("li");
                    $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                    $fragment.appendChild($li);
                })

                $xhr.appendChild($fragment);

            } else{
                console.log("Error");
                let message = xhr.statusText || "Ocurrió un error";
                $xhr.innerHTML = `Error ${xhr.status}: ${message}`;

            }


        });

    //Paso n°3 Abrir la petición estableciendo el método y la API
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    //Paso n°4 Enviar la petición
    xhr.send();

})(); 


//API FETCH
(() =>{   
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.ok ? res.json() : Promise.reject(res))

    .then((json) => {
        console.log(json);
        json.forEach((el) =>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        })

        $fetch.appendChild($fragment);
        //$fetch.innerHTML = json;
    })
    .catch((err) =>{
        console.log("Estamos en el catch", err);
        let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
        console.log("Esto se ejecutará siempre crack");
    });
})();

/* **********     API FETCH Async Await     ********** */
(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
      $fragment = document.createDocumentFragment();
  
    async function getData () {
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

            console.log(res, json);
            //if(!res.ok) throw new Error("Ocurrió un error al solicitar los datos");      
            if(!res.ok) throw{ status: res.status, statusText: res.statusText};

            json.forEach((el) =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.username} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
    
            $fetchAsync.appendChild($fragment);
        }

        catch(err){
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        }

        finally{
            console.log("Me chupa un huevo todo bro");
        }       
    }
    getData();
})();


//AXIOS
(() => {
    const $axios = document.getElementById("axios"),
  $fragment = document.createDocumentFragment();

  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(res =>{
    let json = res.data;
    json.forEach((el) =>{
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.username} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
    })

    $axios.appendChild($fragment);
  })

  .catch(err => {
    let message = err.response.statusText || "Ocurrió un error";
    $axios.innerHTML = `Error ${err.response.status}: ${message}`;
  })

  .finally(() => {
      console.log("Esto siempre le chupa un huevo");
  });

})();

/* **********     Curso JavaScript: 110. AJAX: Librería Axios + Async-Await - #jonmircha     ********** */
(() => {
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();
  
  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;
  
      console.log(res, json);
  
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
  
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutará independientemente del try... catch");
    }
  }
  
  getData();
  
})();