import { useState } from "react"

export function Carrousel({ slides }) {

  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    const isLastIndex = current === slides.length - 1;
    const newIndex = isLastIndex ? 0 : current + 1;
    setCurrent(newIndex);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  }


  return (

    <>
      <div className="relative w-full h-full">
        <div className="relative h-56 overflow-hidden md:h-96 lg:h-[500px]">

          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide, index) => (
              <img key={index} className="w-full h-full object-cover" src={slide} alt={`Slide ${index}`} />
            ))}
          </div>

          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse ">
            {
              slides.map((_, slideIndex) => (
                <button key={slideIndex} type="button" onClick={() => goToSlide(slideIndex)} className={`w-3 h-3 bg-white rounded-full ${current === slideIndex ? 'bg-gray-300' : 'bg-gray-500'}`} aria-current={current === slideIndex} aria-label={`Slide ${slideIndex + 1}`} data-carousel-slide-to={slideIndex}></button>
              ))
            }

          </div>

          <button onClick={prevSlide} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>

          </button>
          <button onClick={nextSlide} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>

        </div>
      </div>
    </>



  )
}
