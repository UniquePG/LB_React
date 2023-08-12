import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {

    const { page, handlePageChange, totalPage } = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-2 shadow-md fixed bottom-0 bg-white'>
        <div className='flex w-11/12 max-w-[670px] justify-between py-2'>
            <div className='flex gap-x-3'>
                { page > 1 && 
                ( <button 
                    className='border-2 rounded-md px-5 py-1 bg-white'
                onClick={ ()=> handlePageChange(page-1)}>
                        Previous
                    </button>)
                }

                { page < totalPage && 
                ( <button 
                    className='border-2 rounded-md px-5 py-1 bg-white'
                onClick={ ()=> handlePageChange(page+1)}>
                        Next
                    </button>)
                }
            </div>



            <p className='font-bold text-sm'>
                Page {page} of {totalPage}
            </p>

        </div>

    </div>
  )
}

export default Pagination