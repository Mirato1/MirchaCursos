const d = document;

export default function draw(inputSorteo, btnAdd, btnWinner, playerList, result){

    const $input = d.getElementById(inputSorteo);
	const $btnAdd = d.getElementById(btnAdd);
	const $playerList = d.getElementById(playerList);
	const $btnWinner = d.getElementById(btnWinner);
	const $resultado = d.getElementById(result);
	let playerArray = [];

	const addToGame = () => {
		const inputValue = $input.value;
		// cuando toque el boton, no tenga q volver a poner el mouse sobre el input#paja
		$input.focus();
		// verifico que no eswte vacio
		if (inputValue === '' || inputValue.length === 0) {
			alert('No ingresaste nada');
		} else {
			// limpiar el mensaje del impostor
			$resultado.innerHTML = '';
			// pongo los nombres en un array para luego hacer el math.random
			playerArray.push(inputValue);
			// pongo los nombre de la lista ordenada de html
			$playerList.insertAdjacentHTML('beforeend', `<li>${inputValue}</li>`);
			// limpio el input
			$input.value = '';
		}
	};
	const getWinner = () => {
		$input.focus();
		// obtengo el numero del impostor aleatoriamnete
		const random = Math.floor(Math.random() * playerArray.length);
		// el impostor va a ser el nombre que este en la posicion random
		const ganador = playerArray[random];
		// limpio el array por las dudas
		playerArray = [];
		// que cuatro segundo despues de tocar el btn desaparezca
		setTimeout(() => {
			// limpio el ul
			$playerList.innerHTML = '';
		}, 4000);
		// message
		$resultado.innerHTML = `<b>"${ganador}" Es el ganador</b>`;
	};
	$btnAdd.addEventListener('click', () => {
		addToGame();
	});
	$btnWinner.addEventListener('click', () => {
		if (playerArray.length === 0) {
			// si toca el btn pero no puso ningun nombre
			$resultado.innerHTML = '<b>No ingresaste nada</b>';
		} else {
			getWinner();
		}
	});
}