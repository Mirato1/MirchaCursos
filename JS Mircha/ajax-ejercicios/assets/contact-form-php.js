const d = document;

function contactForm() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  //console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      //console.log($input, pattern);

      if (pattern && $input.value !== "") {
        //console.log("El input tiene patrón");
        //Esa "i" que vemos es un flag, en este caso su función es decir que el pattern recibido en nuestro javascript será "case insensitive", se pueden usar diferentes flags para así acompañar a nuestras expresiones regulares del HTML y en algunos casos probablemente facilitar algunas tareas.
        let regex = new RegExp(pattern, "i");
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        //console.log("El input NO tiene patrón");
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    //alert("Enviando Formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    fetch("./assets/send_mail.php", {
      method: "POST",
      body: new FormData(e.target),
      mode: "cors",
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $loader.classList.add("none");
        $response.classList.remove("none");
        $response.innerHTML = `<p>${json.message}</p>`;
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error al envíar.";

        $response.innerHTML = `<p>Error ${err.statusText}: ${message}</p>`;
      })
      .finally(() =>
        setTimeout(() => {
          $response.classList.add("none");
          $response.innerHTML = "";
        }, 3000)
      );

    // setTimeout(() => {
    //   $loader.classList.add("none");
    //   $response.classList.remove("none");
    //   $form.reset();

    //   setTimeout(() => $response.classList.add("none"), 3000);
    // }, 3000);
  });
}

d.addEventListener("DOMContentLoaded", contactForm);
