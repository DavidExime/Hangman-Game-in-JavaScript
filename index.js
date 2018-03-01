var germancars = ['BMW', 'Audi', 'Porches','Mercedes', 'Volkswagen']
var  word = Math.floor(Math.random() * germancars.length);
var hints =["Beamer","Quatrro","Stallion","Benz","Beetle"]
var hintBox = document.getElementById('hints')
var puzzleWord =germancars[word] 
var splitWord = puzzleWord.split('')
var playerChance = 3
var puzzleLife = splitWord.length
var winMessage = "YOU ARE SUCH A WINNER!"
var loseMessage = "TRY AGAIN DUMMY!"
var playerMessage = document.getElementById('playerMessage')
var usedLetters = document.getElementById('usedLetters')
var input = document.getElementById('input')
var submit = document.getElementById('submit')
var wordHolder = document.getElementById('wordHolder')
var div = document.createElement('DIV');
div.setAttribute('class', 'dashes')
hintBox.innerHTML=hints[word]




for(let i=0;i<splitWord.length;i++){
	var div = document.createElement('DIV');
	div.setAttribute('class', 'dashes')
	wordHolder.appendChild(div)
	div.style.width='70px';
	div.style.height='70px';
	div.style.borderBottom ='2px solid';
	div.style.margin='10px';
	div.style.display='inline-block';
	
}

submit.addEventListener('click', function(){
// for loop, if usedLetters === input dont add letter, else do
	usedLetters.innerHTML += input.value + ' '

	for(let i=0;i<splitWord.length;i++){


		if (input.value == splitWord[i]){
			puzzleLife--
			var answer =document.getElementsByClassName('dashes')[i]
			answer.innerHTML=input.value
		}
		if (puzzleLife<=0){
			playerMessage.innerHTML=winMessage

		}
	} 
	function validateLetter(value){
		return (splitWord.indexOf(value)=== -1) ? false : true

	}
	if (validateLetter(input.value) ==false){
		playerChance--
		alert('You have ' + playerChance + ' ' + 'left')
	}
	if (playerChance<=0){
		playerMessage.innerHTML=loseMessage
	}

})






 












