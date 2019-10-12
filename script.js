const project = () =>{
    const btn = document.querySelector('#content button');

    //add event listener to button to execute a function
    btn.addEventListener('click', function(){
	// getting elements
	const text = document.querySelector('#content textarea');
	const output = document.querySelector('#content div p');
	
	// letter classes
	const letterA = document.getElementsByClassName('letterA');
	const letterE = document.getElementsByClassName('letterE');
	const letterI = document.getElementsByClassName('letterI');
	const letterO = document.getElementsByClassName('letterO');
	const letterU = document.getElementsByClassName('letterU');
	
	// getting text input
	const textInput = text.value;
	
	//array
	const letters = textInput.split('');

	//reset output on every click
	output.innerHTML='';
	
	//filter through every letter of the array and place it in a span
	letters.forEach(letter => {
	    const spanny = document.createElement("SPAN");
	    spanny.innerHTML = letter;
	    if (letter==='a') {
		letterA.innerHTML = letter;
		spanny.classList.add('letterA');
		output.appendChild(spanny);
	    } else if (letter==='e') {
		letterE.innerHTML = letter;
		spanny.classList.add('letterE');
		output.appendChild(spanny);		
	    } else if (letter==='i') {
		letterI.innerHTML = letter;
		spanny.classList.add('letterI');
		output.appendChild(spanny);
	    } else if (letter==='o') {
		letterO.innerHTML = letter;
		spanny.classList.add('letterO');
		output.appendChild(spanny);
	    } else if (letter==='u') {
		letterU.innerHTML = letter;
		spanny.classList.add('letterU');
		output.appendChild(spanny);
	    } else {
		output.appendChild(spanny);		
	    }
	});
	
    });
};
project();
