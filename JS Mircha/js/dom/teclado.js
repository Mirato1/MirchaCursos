const d = document;

let x = 0, 
    y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
    switch (e.keyCode) {
        //37 Izquierda 38 Arriba 39 Derecha 40 Abajo
        case 37:
            if(limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--
            };
            break;

        case 38:
            if(limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--
            };
            break;

        case 39:
            if(limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++
            };
            break;

        case 40:
            if(limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++          
            };
            break;        
    
        default:
            break;
    }
    $ball.style.transform = `translate(${x*7}px, ${y*8.5}px)`;
}

export function shortcuts (e){
    if(e.key === "a" && e.altKey){
        alert("Qué onda wachooo");
    }
    if(e.key === "p" && e.altKey){
        prompt("Cómo te llamas :P");
    }
}