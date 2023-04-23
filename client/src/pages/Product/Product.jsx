import React from 'react'
import { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity,setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/15832369/pexels-photo-15832369.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/14615199/pexels-photo-14615199.jpeg?auto=compress&cs=tinysrgb&w=600"
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h1>Prod.Title</h1>
        <span className='price'>$299</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A labore sunt eius fugiat nostrum amet et animi numquam, aperiam deleniti nam dolore aliquam voluptate quia suscipit earum rem nihil ipsa!</p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev) => prev ===1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
        <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: Shirt</span>
          <span>Tag: Shirt, Women</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFO</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product