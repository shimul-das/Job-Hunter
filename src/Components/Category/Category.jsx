import React, { useEffect, useState } from 'react'
import './category.css'
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = () => {
    const [categories,setcategories]=useState([]);
    useEffect(()=>{
        fetch('CategoryList.json')
        .then(res=>res.json())
        .then(data=>setcategories(data))
        },[]);
  return (
    <div>
        <h1 className='c-title'>Job Category List</h1>
        <p className='c-info'>Explore thousands of job opportunities with all the information you need. Its your future</p>
    <div className='category'>
        
{
    categories.map(categorie=><CategoryDetails key={categorie.id} categorie={categorie}></CategoryDetails>)
}
    </div>
    </div>
  )
}

export default Category