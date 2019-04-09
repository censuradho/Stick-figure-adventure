var curScene = 0;
function button(option) {
	if (curScene == 0) { //start
		document.getElementById('txt').innerHTML ='O inicio de sua jornada é uma bifurcação<br>1 - Caminho da esquerda | 2 - Caminho da ponte'
		document.getElementById('cena').src = '_imagens/scene1.png'
		curScene = 1
		}
	else if (curScene == 1) {
		if (option == 1) { //left path
			document.getElementById('txt').innerHTML = 'Logo a frente tem uma pequena casa<br>1 - Dar a volta | 2 - Bater na porta'
			document.getElementById('cena').src = '_imagens/scene2.png'
			curScene = 2;
		}
		else { //bridge path
			document.getElementById('txt').innerHTML = 'A paisagem é linda, porem você esta atrazado<br>1 - Atravessar a ponte | 2 - Admirar a paisagem'
			document.getElementById('cena').src = '_imagens/scene3.png'
			curScene = 3
		}
	}
	else if (curScene == 2) { //Front of the house
		if (option == 1) {
			document.getElementById('txt').innerHTML = 'Tem uma bruxa dentro da casa.<br>1 - Passar despercebido | 2 - Acenar para ela'
			document.getElementById('cena').src = '_imagens/scene4.png'
			curScene = 4 
		}
		else {
			document.getElementById('txt').innerHTML = 'Ali morava uma Bruxa, ela o capturou<br> e vai fazer um ensopado com você<br><b>Atualize a página para recomeçar.<b>'
			document.getElementById('cena').src = '_imagens/scene5.png'
			curScene = 67; //somente para o botão não executar nenhum comando
		}
	}
	else if (curScene == 4){ //visão da janela da casa
		if (option == 1) {
			document.getElementById('txt').innerHTML = '<b>Atualize para recomeçar<b>';
			document.getElementById('cena').src = '_imagens/scene8.png'
			curScene = 12312323 //somente para o botão não executar nenhum comando
		}
		else {
			document.getElementById('txt').innerHTML = 'Ela o capturou e vai fazer um ensopado com você!<br><b>Atualize a pagina para recomeçar<b>'
			document.getElementById('cena').src = '_imagens/scene5.png'
		}
	}
	else if (curScene == 3) { //escolhas em cima da ponte
		if (option == 1) {
			document.getElementById('txt').innerHTML = 'Tem um Ogro vindo na sua direção!<br>1 - dar um oi para ele | 2 - pular na água'
			document.getElementById('cena').src = '_imagens/scene7.png'
			curScene = 7;
		}
		else {
			document.getElementById('txt').innerHTML = 'Vôce estava distraido, veio um Ogro gigante e<br>ele o devorou!<br><b>Atualize a pagina para recomeçar<b>'
			document.getElementById('cena').src = '_imagens/scene6.png'
		}
	}
	else if (curScene == 7) { //de frente para o ogro
		if (option == 1) {
			document.getElementById('txt').innerHTML = 'Ele o devorou!<br><b>Atualize a página para recomeçar'
			document.getElementById('cena').src = '_imagens/scene6.png'
		}
		else{ //ele te pegou
			document.getElementById('txt').innerHTML = '<b>Atualize a página para recomeçar<b>'
			document.getElementById('cena').src = '_imagens/scene9.png'
		}
	}
}
	
