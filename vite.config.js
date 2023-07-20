// Commenting
function addComment() {
	var comment = document.getElementById('commentInput').value;
	var commentsDiv = document.getElementById('commentSection');
	var commentElem = document.createElement('div');
	commentElem.className = 'comment';
	commentElem.textContent = comment;
	commentsDiv.appendChild(commentElem);
	document.getElementById('commentInput').value = '';
  }
  
  // Shopping Cart Light
  var cartItems = [];
  
  function addToCart(productName) {
	cartItems.push(productName);
	updateCartSummary();
  }
  function myFunction(x) {
	x.classList.toggle("change");
  }
  function updateCartSummary() {
	var cartSummaryDiv = document.getElementById('cart');
	cartSummaryDiv.innerHTML = '';
	for (var i = 0; i < cartItems.length; i++) {
	  var cartItem = document.createElement('div');
	  cartItem.classList.add('cart-item');
	  cartItem.innerText = cartItems[i];
	  cartSummaryDiv.appendChild(cartItem);
	}
  }
  
  // Image Carousel
  var currentImage = 0;
  var images = document.querySelectorAll('#imageCarousel img');
  var carouselContainer = document.querySelector('#imageCarousel');
  
  function cycleImages() {
	currentImage++;
	if (currentImage >= images.length) {
	  currentImage = 0;
	}
	for (var i = 0; i < images.length; i++) {
	  images[i].style.opacity = 0;
	}
	images[currentImage].style.opacity = 1;
  }
  
  setInterval(cycleImages, 2000); // Change image every 2 seconds
  
  // Hamburger Menu
  var navbar = document.querySelector('.navbar');
  var hamburger = document.querySelector('.hamburger');
  function myFunction(x) {
	x.classList.toggle("change");
  }
  hamburger.addEventListener('click', function () {
	navbar.classList.toggle('active');
  });
  
  // Text-to-Speech Feature
  function speakText() {
	var textToSpeak = document.querySelector('body').innerText;
	var speechSynthesis = window.speechSynthesis;
	var speechUtterance = new SpeechSynthesisUtterance();
	speechUtterance.text = textToSpeak;
	speechSynthesis.speak(speechUtterance);
  }
  
  // Event listener for the speak button
  document.getElementById('speakButton').addEventListener('click', speakText);
  
  
  
  