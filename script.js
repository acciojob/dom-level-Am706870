// Function to find the DOM level of the element with id="level"
function levelFinder() {
	var targetElement = document.getElementById('level');
	var level = 0;
	while(targetElement){
		level++;
		targetElement = targetElement.parentElement;	
	}
	alert(`The level of the element is:` +level);

}

// Call the function when the DOM is fully loaded
window.onload = levelFinder; 

		