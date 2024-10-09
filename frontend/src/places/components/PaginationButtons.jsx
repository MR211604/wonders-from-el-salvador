import ReactPaginate from 'react-paginate'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'


export function PaginationButtons({ setCurrentPage, currentPage, totalPages }) {

  const handleClickPage = ({ selected }) => {
    setCurrentPage(selected + 1)
  }

  const showNextButton = currentPage !== totalPages;
  const showPreviousButton = currentPage !== 1;

  return (
    <div>
      <ReactPaginate
        breakLabel={<span className='flex'>
          ...
        </span>}
        nextLabel={
          showNextButton ? (
            <span className='w-10 h-10 flex items-center justify-center bg-slate-400 rounded-md hover:bg-slate-500 transition duration-300 ease-in-out'>
              <BsChevronRight color='white' />
            </span>
          ) : null
        }
        previousLabel={
          showPreviousButton ? (
            <span className='w-10 h-10 flex items-center justify-center bg-slate-400 rounded-md hover:bg-slate-500 transition duration-300 ease-in-out'>
              <BsChevronLeft color='white' />
            </span>
          ) : null
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='font-bold cursor-pointer block hover:bg-slate-200 w-10 h-10 flex items-center justify-center rounded-md mx-2 transition duration-300 ease-in-out'
        activeClassName='bg-slate-300 text-black'
        pageRangeDisplayed={5}
        pageCount={totalPages}
        onPageChange={handleClickPage}        
      />
    </div>
  )
}
