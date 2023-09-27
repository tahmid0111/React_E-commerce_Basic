import React from 'react'

const SingleProduct = (props) => {
    const {id, title, image} = props.product;
  return (
    <>
      <div>
      <h1>{title}</h1>
      <img src={image} alt="" />
      </div>
    </>
  )
}

export default SingleProduct
