$(function(){
	//this code will execute after the DOM is loaded
	var url = 'https://api.icndb.com/jokes/random';
	var button = document.getElementById('get-joke');
	var paragraph = document.getElementById('joke');

	function getJoke() {
 		 var xhr = new XMLHttpRequest(url);
 		 xhr.open('GET', url);
 		 xhr.addEventListener('load', function(){
  	  	 var response = JSON.parse(xhr.response);
    	 paragraph.innerHTML = response.value.joke;
  		}); 
  	xhr.send();
	}

	getJoke();  

	button.addEventListener('click', function(){
  	getJoke();
	});
 
});