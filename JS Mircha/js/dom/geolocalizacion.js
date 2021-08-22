const d = document, 
    n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
        options = {
            // Dispositivo trate de hacer la mejor lectura posible.
            enableHightAccuracy: true,
            // Cuánto tiempo va a esperar la respuesta a la lectura.
            timeout: 5000,
            // Cada vez que tome una lecture no haya una refencia anterior.
            maximumAge: 0
        };  

    const success = position => {
        let coords = position.coords;
        console.log(position);

        $id.innerHTML = `
            <p>Tu posición actual es:</p>
            <ul>
                <li>Latitud:<b>${coords.latitude}</b></li>
                <li>Longitud:<b>${coords.longitude}</b></li>
                <li>Precisión:<b>${coords.accuracy}</b> mts</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
        
        `
    };

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error: ${err}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success, error, options);
}