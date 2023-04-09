import React, { useEffect, useState } from 'react'
import
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = () => {
    const [categories,setcategories]=useState([]);
    useEffect(()=>{
        fetch('CategoryList.json')
        .then(res=>res.json())
        .then(data=>setcategories(data))
        },[]);
  return (
    <div className='category'>
{
    categories.map(categorie=><CategoryDetails key={categorie.id} categorie={categorie}></CategoryDetails>)
}
    </div>
  )
}

export default Category