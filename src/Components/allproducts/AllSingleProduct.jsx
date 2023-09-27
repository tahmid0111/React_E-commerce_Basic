import React from 'react'

const AllSingleProduct = (props) => {
    const { id, title} = props.product;
    const {image} = props.product.category
  return (
    <>
      <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      </div>
    </>
  )
}

export default AllSingleProduct
