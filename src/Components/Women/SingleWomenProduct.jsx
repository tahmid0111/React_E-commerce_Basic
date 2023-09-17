import React from 'react'

const SingleWomenProduct = (props) => {
    const {title, id} = props.product
  return (
    <>
      <div className="">
        <h1 className='text-5xl'>{title}</h1>
      </div>
    </>
  )
}

export default SingleWomenProduct
