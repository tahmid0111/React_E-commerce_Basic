import React from 'react'

const SingleWomenProduct = (props) => {

    const {title,image, id} = props.product
  return (
    <>
      <div className="">
        <h1 className='text-5xl'>{title}</h1>
        <img src={image} alt="product-images" />
      </div>
    </>
  )
}

export default SingleWomenProduct
