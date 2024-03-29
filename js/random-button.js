(function(){
	var $dvdContainer = $('.dvdContainer'); 			//Stores all images
	var $randomButton = $('#randomButton');						//Stores button elements
	var myMovies = [];									//Create empty DVD array
	
	$dvdContainer.each(function(){						//Loop through DVDs
	var dvds = this;									//Store DVDs in variable
	myMovies.push(dvds);								//Stores DvDs in array
	});
	
	//Buttons, event handlers, and filters go here
	$('<button/>', {									//Create empty button
		text: 'Random',									//Add text 'random'
		click: function(){								//Add onclick handler to it
			$(this)										//Get the clicked on button
			.addClass('active')							//Add the class of active
			.siblings()									//Get its siblings
			.removeClass('active');						//Remove active from them
			//Generate a random number based on the myMovies array
			var randomDVD = 
				myMovies[Math.floor(Math.random() * myMovies.length)]; 
			$dvdContainer								//With all of the dvds
			.hide()										//Hide them
			//Find DVD in the array based on random number that was generated
			.filter(randomDVD)
			.show();									//Show just that dvd
		}
	}).appendTo($randomButton);								//Add to the buttons container
}());