const textArea = document.getElementById('txt');
const image = document.getElementById('cena');
let curScene = 0;

let Button = document.querySelectorAll('input');

function addRestartAoButton() {
	Button.forEach(() => {
		restart()
	});
}

const restart = ()=> {
	curScene = 0
}

function button(option) {
	if (curScene == 0) { 
		textArea.innerHTML ='O inicio de sua jornada é uma bifurcação<br>1 - Caminho da esquerda | 2 - Caminho da ponte'
		image.src = 'imagens/scene1.png'
		curScene = 1
		}

	else if (curScene == 1) {
		if (option == 1) { 
			textArea.innerHTML = 'Logo a frente tem uma pequena casa<br>1 - Dar a volta | 2 - Bater na porta'
			image.src = 'imagens/scene2.png'
			curScene = 2;
		}
		else { 
			textArea.innerHTML = 'A paisagem é linda, porem você esta atrazado<br>1 - Atravessar a ponte | 2 - Admirar a paisagem'
			image.src = 'imagens/scene3.png'
			curScene = 3
		}
	}

	else if (curScene == 2) { 
		if (option == 1) {
			textArea.innerHTML = 'Tem uma bruxa dentro da casa.<br>1 - Passar despercebido | 2 - Acenar para ela'
			image.src = 'imagens/scene4.png'
			curScene = 4 
		}
		else {
			textArea.innerHTML = 'Ali morava uma Bruxa, ela o capturou<br> e vai fazer um ensopado com você<br><b>Click em qualquer botão pa pagina para recomeçar<b>'
			image.src = 'imagens/scene5.png'

			addRestartAoButton();
		}
	}

	else if (curScene == 4){ 
		if (option == 1) {
			textArea.innerHTML = '<b>Click em qualquer botão pa pagina para recomeçar<b>';
			image.src = 'imagens/scene8.png';

			addRestartAoButton();
		}
		else {
			textArea.innerHTML = 'Ela o capturou e vai fazer um ensopado com você!<br><b>Click em qualquer botão pa pagina para recomeçar<b>'
			image.src = 'imagens/scene5.png';

			addRestartAoButton();
		}
	}

	else if (curScene == 3) { 
		if (option == 1) {
			textArea.innerHTML = 'Tem um Ogro vindo na sua direção!<br>1 - dar um oi para ele | 2 - pular na água'
			image.src = 'imagens/scene7.png'
			curScene = 7;
		}
		else {
			textArea.innerHTML = 'Vôce estava distraido, veio um Ogro gigante e<br>ele o devorou!<br><b>Click em qualquer botão pa pagina para recomeçar<b>'
			image.src = 'imagens/scene6.png';

			addRestartAoButton();
		}
	}

	else if (curScene == 7) { 
		if (option == 1) {
			textArea.innerHTML = 'Ele o devorou!<br><b>Click em qualquer botão pa pagina para recomeçar<b>'
			image.src = 'imagens/scene6.png'

			addRestartAoButton();
		}
		else{ 
			textArea.innerHTML = '<b>Click em qualquer botão pa pagina para recomeçar<b>'
			image.src = 'imagens/scene9.png';

			addRestartAoButton();
		}
	}
}
	
