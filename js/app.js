(() => {
	class Carousel {
		constructor(carousel, leftControl, rightControl) {
			this.carousel = carousel;
			this.scrollAmount =
				this.carousel.scrollWidth / this.carousel.childElementCount +
				10;
			this.toLeft = this.toLeft.bind(this);
			this.toRight = this.toRight.bind(this);
			leftControl.addEventListener('click', this.toLeft);
			rightControl.addEventListener('click', this.toRight);
		}
		toRight() {
			this.carousel.scrollLeft += this.scrollAmount;
		}
		toLeft() {
			this.carousel.scrollLeft -= this.scrollAmount;
		}
	}
	const carouselList = document.querySelectorAll('.products__grid'),
		slideBtnNextList = document.querySelectorAll('.slider__next'),
		slideBtnPrevList = document.querySelectorAll('.slider__prev');
	new Carousel(carouselList[0], slideBtnPrevList[0], slideBtnNextList[0]);
	new Carousel(carouselList[1], slideBtnPrevList[1], slideBtnNextList[1]);
})();
