const d = document;

export default function searchFilter(input, selector, reset){

    d.addEventListener("keyup", e => {
        if (e.target.matches(input)){

            if(e.key === "Escape") e.target.value = "";           

            //console.log(e.key);
            d.querySelectorAll(selector).forEach(el => el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) 
                ? el.classList.remove("filter") 
                : el.classList.add("filter")); 
        }
    })

    d.addEventListener("click", (e) => {
        if (e.target.matches(reset)) {    
            d.querySelector(input).value = "";             
        }
        d.querySelectorAll(selector).forEach(el => el
                ? el.classList.remove("filter") 
                : el.classList.add("filter")); 
    });
}

