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
    curScene > 1 && option == 1? curScene+=1 : curScene+=2;
    changeScene(curScene)
    console.log(curScene)
}
function changeScene(curScene){
    image.src = `imagens/scene${curScene}.png`
}