import { useState, useEffect} from 'react'
import SingleWomenProduct from './SingleWomenProduct'

const WomenProducts = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])
  return (
    <>
        <div className="flex flex-col">
            {
                datas.map((product) => <SingleWomenProduct key={product.id} product={product} />)
            }
        </div>
    </>
  )
}

export default WomenProducts
