/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs, Grid } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров

//Программы
if (document.querySelector('.programs__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	var programSlider = null;
	var mediaQuerySize = 1310;

	function catalogSliderInit() {
		if (!programSlider) {
			programSlider = new Swiper('.programs__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation],
				observer: true,
				observeParents: true,
				speed: 800,
				preloadImages: true,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.programs__arrow-prev',
					nextEl: '.programs__arrow-next',
				},

				// Брейкпоинты
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					600: {
						slidesPerView: 1.5,
					},
					767.98: {
						slidesPerView: 2,
					},
					991.98: {
						slidesPerView: 2.5,
					},
				},
			});
		}
	}

	function catalogSliderDestroy() {
		if (programSlider) {
			programSlider.destroy();
			programSlider = null;
		}
	}
	window.addEventListener('resize', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize(1024)
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			catalogSliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			catalogSliderDestroy()
		}
	});
};

//Уровни обучения
if (document.querySelector('.learning-levels__sliders')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	const thumbsSwiper = new Swiper('.learning-levels__thumbs', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 12,
		autoHeight: false,
		speed: 800,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.learning-levels__arrow-prev',
			nextEl: '.learning-levels__arrow-next',
		},
	});
	const swiper = new Swiper('.learning-levels__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		thumbs: {
			swiper: thumbsSwiper
		},
		observer: true,
		observeParents: true,
		slidesPerView: 2.3,
		spaceBetween: 20,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.learning-levels__arrow-prev',
			nextEl: '.learning-levels__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.5,
			},
			767.98: {
				slidesPerView: 2,
			},
			991.98: {
				slidesPerView: 2.3,
			},
		},
	});
};

//Уровни обучения
if (document.querySelector('.learning-block__sliders')) { // Указываем скласс нужного слайдера
	const swiper = new Swiper('.learning-block__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 2.3,
		spaceBetween: 20,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.learning-block__arrow-prev',
			nextEl: '.learning-block__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.5,
			},
			767.98: {
				slidesPerView: 2,
			},
			991.98: {
				slidesPerView: 2.3,
			},
		},
	});
};

//Программа обучения
if (document.querySelector('.learning-models__sliders')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	const thumbsSwiper = new Swiper('.learning-models__thumbs', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Thumbs],
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 12,
		autoHeight: false,
		speed: 800,
		on: {
			click: function () {
				this.slides.forEach((slide, index) => {
					slide.classList.toggle('active', index === this.clickedIndex);
				});
			}
		}
	});
	const swiper = new Swiper('.learning-models__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Thumbs],
		thumbs: {
			swiper: thumbsSwiper
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1.3,
		spaceBetween: 20,
		speed: 800,
		preloadImages: true,

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.5,
			},
			767.98: {
				slidesPerView: 1.3,
			},
			991.98: {
				slidesPerView: 1.3,
			},
		},
	});
};

//Преподаватели
if (document.querySelector('.teachers__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	var teachersSlider = null;
	var mediaQuerySizeTeachers = 767.98;

	function teachersSliderInit() {
		if (!teachersSlider) {
			teachersSlider = new Swiper('.teachers__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation, Grid],
				observer: true,
				observeParents: true,
				slidesPerView: 3,
				spaceBetween: 0,
				speed: 800,
				preloadImages: true,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.teachers__arrow-prev',
					nextEl: '.teachers__arrow-next',
				},

				// Брейкпоинты
				breakpoints: {
					0: {
						slidesPerView: 1,
						grid: {
							rows: 3,
						},
					},
					767.98: {
						slidesPerView: 3,
						grid: {
							rows: 3,
						},
					},
					991.98: {
						slidesPerView: 3,
					},
					1310: {
						slidesPerView: 3,
					},
				},
			});
		}
	}

	function teachersSliderDestroy() {
		if (teachersSlider) {
			teachersSlider.destroy();
			teachersSlider = null;
		}
	}
	window.addEventListener('resize', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize(1024)
		if (windowWidth <= mediaQuerySizeTeachers) {
			// Инициализировать слайдер если он ещё не был инициализирован
			teachersSliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			teachersSliderDestroy()
		}
	});
};

//Отзывы
if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.reviews__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 2.3,
		spaceBetween: 0,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.reviews__arrow-prev',
			nextEl: '.reviews__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.02,
			},
			600: {
				slidesPerView: 1.2,
			},
			767.98: {
				slidesPerView: 1.5,
			},
			991.98: {
				slidesPerView: 1.7,
			},
			1310: {
				slidesPerView: 2.3,
			},
		},
	});
};

//Новости главная
if (document.querySelector('.news__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.news__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.news__arrow-prev',
			nextEl: '.news__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.2,
			},
			600: {
				slidesPerView: 1.8,
			},
			767.98: {
				slidesPerView: 2,
			},
			991.98: {
				slidesPerView: 3,
			},
			1310: {
				slidesPerView: 4,
			},
		},
	});
};

//Новости
if (document.querySelector('.main-news-slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.main-news-slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.news__arrow-prev',
			nextEl: '.news__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.8,
			},
			767.98: {
				slidesPerView: 2,
			},
			991.98: {
				slidesPerView: 3,
			},
			1310: {
				slidesPerView: 4,
			},
		},
	});
};

//Баннер
if (document.querySelector('.banner__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.banner__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 800,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.banner__arrow-prev',
			nextEl: '.banner__arrow-next',
		},
	});
};

//Отзывы
const reviewsSlider = document.querySelectorAll('.reviews-slider');
if (reviewsSlider) {
	reviewsSlider.forEach(reviewSlider => {

		const column = reviewSlider.closest('.main-reviews__column');
		if (!column) return;

		const prevButton = column.querySelector('.reviews-prev');
		const nextButton = column.querySelector('.reviews-next');

		if (!prevButton || !nextButton) return;

		// Инициализация Swiper
		new Swiper(reviewSlider, {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			speed: 800,

			// Навигация (кнопки "влево/вправо")
			navigation: {
				prevEl: prevButton,
				nextEl: nextButton,
			},

			// Брейкпоинты
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 1.8,
				},
				767.98: {
					slidesPerView: 2,
				},
				991.98: {
					slidesPerView: 3,
				},
				1310: {
					slidesPerView: 3,
				},
			},
		});
	});
}