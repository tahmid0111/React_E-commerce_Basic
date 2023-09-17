import React from 'react'

const SingleProduct = (props) => {
    const {id, title, image} = props.product;
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt="" />
    </>
  )
}

export default SingleProduct
