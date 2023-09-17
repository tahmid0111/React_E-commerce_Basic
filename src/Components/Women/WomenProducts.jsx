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
        <div className="grid lg:md:grid-cols-3 grid-cols-1 gap-4">
            {
                datas.map((product) => <SingleWomenProduct key={product.id} product={product} />)
            }
        </div>
    </>
  )
}

export default WomenProducts
