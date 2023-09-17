import React from 'react'

const AllSingleProduct = (props) => {
    const { id, title, image } = props.product;
  return (
    <>
      <img src={image} alt="" />
    </>
  )
}

export default AllSingleProduct
