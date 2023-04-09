import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img:"https://images.pexels.com/photos/3798129/pexels-photo-3798129.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/7180886/pexels-photo-7180886.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Long Sleeve Graphic Tee",
            isNew: true,
            oldprice: 19,
            price:12,
        },
        {
            id: 1,
            img:"https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Coat",
            isNew: true,
            oldprice: 19,
            price:12,
        },
        {
            id: 1,
            img:"https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/1007017/pexels-photo-1007017.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Skirt",
            isNew: true,
            oldprice: 19,
            price:12,
        },
        {
            id: 1,
            img:"https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/16122227/pexels-photo-16122227.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Hat",
            isNew: true,
            oldprice: 19,
            price:12,
        },
    ]
  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus, rem nihil velit soluta doloribus? Eveniet necessitatibus voluptatem eum dolores, libero harum ea! Et quibusdam minima officia ullam facilis officiis!
            </p>
        </div>
        <div className='bottom'>
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts