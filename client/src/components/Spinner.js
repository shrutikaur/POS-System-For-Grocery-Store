import React from 'react'

const Spinner = () => {
  return (
    <div className='Spinner'>
        <div className='spinner-border' role="status">
            <span className='visually-hidden'>Loading...</span>
        </div>
    </div>
  )
}

export default Spinner