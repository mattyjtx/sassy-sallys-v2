import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.scss"

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' ></img>
                <button>
                    <Link className='link' to="products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src='https://images.pexels.com/photos/8594503/pexels-photo-8594503.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' ></img>
                <button>
                    <Link className='link' to="products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src='https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' ></img>
                <button>
                    <Link className='link' to="products/1">Shoes</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src='https://images.pexels.com/photos/11185100/pexels-photo-11185100.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' ></img>
                <button>
                    <Link className='link' to="products/1">Accessories</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src='https://images.pexels.com/photos/9794893/pexels-photo-9794893.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' ></img>
                <button>
                    <Link className='link' to="products/1">New Arrivals</Link>
                </button> 
                    </div>
                </div>
            </div>
            <div className="row">
            <img src='https://images.pexels.com/photos/8311894/pexels-photo-8311894.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' ></img>
                <button>
                    <Link className='link' to="products/1">Accessories</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories