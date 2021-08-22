const d = document,
  $main = d.querySelector("main"),
  $links = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
async function loadPokemons(url) {
  try {
    $main.innerHTML = `<img class="loader" src="../assets/rings.svg" alt="Cargando...">`;

    let res = await fetch(url),
      json = await res.json(),
      $template = "",
      $habilidades = "",
      $prevLink,
      $nextLink;

    console.log(json);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    for (let i = 0; i < json.results.length; i++) {
      console.log(json.results[i]);
      try {
        let respuesta = await fetch(json.results[i].url),
          pokemon = await respuesta.json(),
          habilidades = await pokemon.abilities;

        //console.log(respuesta, pokemon);
        //console.log(habilidades);

        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        for (let i = 0; i < habilidades.length; i++) {
          $habilidades = `<li>${habilidades[i].ability.name}</li> `;
          console.log(habilidades[i]);
        }

        $template += `
            <figure>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <figcaption>${pokemon.name}</figcaption>
                <ul>
                    ${$habilidades}
                </ul>
            </figure>  
        `;
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un error al envíar.";

        $template += `
            <figure>
                <figcaption>
                    Error ${err.status}: ${message}
                </figcaption>

            </figure>
        `;
      }
    }

    $main.innerHTML = $template;
    $prevLink = json.previous ? `<a href="${json.previous}">⏮️</a>` : "";
    $nextLink = json.next ? `<a href="${json.next}">⏭️</a>` : "";
    $links.innerHTML = $prevLink + " " + $nextLink;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un error al envíar.";

    $main.innerHTML = `<p>Error ${err.statusText}: ${message}</p>`;
  }
}

d.addEventListener("DOMContentLoaded", (e) => loadPokemons(pokeAPI));

d.addEventListener("click", (e) => {
  if (e.target.matches(".links a")) {
    e.preventDefault();
    loadPokemons(e.target.getAttribute("href"));
  }
});
