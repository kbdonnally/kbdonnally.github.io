// portfolio
if (document.querySelector('.portfolio-wrapper')) {
	const gallery = document.querySelector('.portfolio__gallery');
	const button  = document.querySelector('.portfolio-modal__button');
	let modal 	  = document.querySelector('.portfolio-modal');
	// touch event handler
	const touchGallery = new Hammer(gallery);
	
	touchGallery.on('tap press', showModal);

	gallery.addEventListener('click', showModal);
	button.addEventListener('click', hideModal);
	modal.addEventListener('click', hideModal);


	function showModal(e) {
		if (e.target.classList.contains('portfolio-pics__img')) {
			const img 	     = e.target;
			const src 	     = img.src;
			const alt 	     = img.alt
			const caption 	 = img.title;

			let modalImg 	 = document.querySelector('.portfolio-modal__img');
			let modalCaption = document.querySelector('.portfolio-modal__caption');

			modalImg.src = src;
			modalImg.alt = alt;
			modalCaption.innerText = caption;
			modal.classList.add('portfolio-modal--show');
		}
	}

	function hideModal() {
		modal.classList.remove('portfolio-modal--show');
	}
}

// home
if (document.querySelector('.new-home-wrapper')) {
	const opt1 		 = document.querySelector('.nh-options__option-1');
	const opt2 		 = document.querySelector('.nh-options__option-2');
	const opt3 		 = document.querySelector('.nh-options__option-3');
	let inThatCase	 = document.querySelector('.nh-p3__title');
	let responseElem = document.querySelector('.nh-p3__text');

	opt1.addEventListener('click', scrollDown);
	opt2.addEventListener('click', scrollDown);
	opt3.addEventListener('click', scrollDown);

	function scrollDown() {
		inThatCase.scrollIntoView({behavior: 'smooth'});
	}
}