import React from 'react'

const SingleWomenProduct = (props) => {
<<<<<<< HEAD
    const {title, id} = props.product
  return (
    <>
      <div className="">
        <h1 className=''>{title}</h1>
=======
    const {id, title, image } = props.product
  return (
    <>
      <div className="">
        <h1 className='text-5xl'>{title}</h1>
        <img src={image} alt="product-images" />
>>>>>>> e5ea6a93d151de4e24c2c8629d3a3fe881658384
      </div>
    </>
  )
}

export default SingleWomenProduct
