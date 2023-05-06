import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

const FeaturedProducts = ({type}) => {


    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=> {
            try{
                const res = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*",{
                    headers: {
                        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    },
                });
                setData(res.data.data) 
            }catch(err){
                console.log(err)
            }
        };
        fetchData();
    },[]);

    console.log(data)

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