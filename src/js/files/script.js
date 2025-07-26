// Контейнер со всеми видео
const videosWrap = document.querySelector('.videos');


// Обработчик клика
if (videosWrap) {
    const videoEventHandler = (e) => {
        // Если у e.target нет класа video, значит данный элемент не является видео
        if (!e.target.classList.contains('video')) return false;
        const video = e.target,
            allVideos = document.querySelectorAll('.video');

        const overlay = document.querySelectorAll('.play');
        // Останавливаем все видео
        allVideos.forEach((source, index) => {
            if (source === video) return;
            source.classList.remove('isPlaying');
            source.pause();
            overlay[index].classList.remove('_active');
        })
        // Если у видео есть класс isPlaying - тогда остановить его, если нет - запустить
        if (video.classList.contains('isPlaying')) {
            video.closest('div').querySelector('.play').classList.remove('_active');
            video.pause()
        } else {
            video.closest('div').querySelector('.play').classList.add('_active');
            video.play()
        }
        video.classList.toggle('isPlaying')
    }
    // Event listener на контейнер со всеми видео
    videosWrap.addEventListener('click', (e) => videoEventHandler(e))
}

//========================================================================================================================================================

//Аудио
document.querySelectorAll('.custom-audio-button').forEach(button => {
    button.addEventListener('click', function () {
        toggleAudio(this);
    });
});

function toggleAudio(button) {
    const targetId = button.getAttribute('data-target');
    const targetAudio = document.getElementById(targetId);
    const allAudios = document.querySelectorAll('.custom-audio-player');

    // Остановить все аудио, кроме текущего
    allAudios.forEach(audio => {
        if (audio !== targetAudio && !audio.paused) {
            audio.pause();
            audio.currentTime = 0; // Сбросить позицию
            // Найти кнопку, связанную с этим аудио, и сбросить её стиль
            const associatedButton = document.querySelector(`button[data-target="${audio.id}"]`);
            if (associatedButton) {
                associatedButton.classList.remove('playing');
            }
        }
    });

    // Переключить состояние текущего аудио
    if (targetAudio.paused) {
        targetAudio.play();
        button.classList.add('playing');
    } else {
        targetAudio.pause();
        targetAudio.currentTime = 0;
        button.classList.remove('playing');
    }
}

//========================================================================================================================================================

//скролл

function scroll() {

    let scrolls = document.querySelectorAll('.scroll');

    if (scrolls) {

        let speed = 2; // Скорость скролла.
        let left = 0;
        let top = 0;
        let drag = false;
        let coorX = 0;
        let coorY = 0;

        scrolls.forEach(scroll => {
            scroll.addEventListener('mousedown', function (e) {
                drag = true;
                coorX = e.pageX;
                coorY = e.pageY;
            });
            document.addEventListener('mouseup', function () {
                drag = false;
                left = scroll.scrollLeft;
                top = scroll.scrollTop;
            });
            scroll.addEventListener('mousemove', function (e) {
                if (drag) {
                    this.scrollLeft = left - (e.pageX - coorX) * speed;
                    this.scrollTop = top - (e.pageY - coorY) * speed;
                }
            });
        });

    }

};

scroll()

//========================================================================================================================================================

const selectWrapper = document.querySelector('.select-section');
const reviewSlides = document.querySelectorAll('.reviews__slide');

if (selectWrapper) {
    // Функция фильтрации
    function filterReviews(category) {
        reviewSlides.forEach(slide => {
            const slideCategory = slide.getAttribute('data-category');

            if (category === '1' || category === slideCategory) {
                slide.closest('.swiper-wrapper')?.classList.remove('hidden');
                slide.style.display = '';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    // Подписываемся на событие из SelectConstructor
    document.addEventListener("selectCallback", function (e) {
        const originalSelect = e.detail.select;
        const selectName = originalSelect.name;

        // Убедимся, что это нужный селект
        if (selectName === 'form[]' && originalSelect.closest('.select-section')) {
            const selectedValue = originalSelect.value;
            filterReviews(selectedValue);
        }
    });

    // Инициальная фильтрация
    const initialSelect = document.querySelector('.select-section');
    if (initialSelect) {
        filterReviews(initialSelect.value);
    }
}