import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data = [
        {
            id: 1,
            img:"https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/1007017/pexels-photo-1007017.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Skirt",
            desc: "hehehe yup",
            isNew: true,
            oldprice: 19,
            price:12,
        },
        {
            id: 1,
            img:"https://images.pexels.com/photos/3798129/pexels-photo-3798129.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/7180886/pexels-photo-7180886.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Long Sleeve Shirt",
            desc: "hehehe no",
            isNew: true,
            oldprice: 19,
            price:12,
        },
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt='' />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$69</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'> Reset Cart</span>
    </div>
  )
}

export default Cart