import React from 'react'
import './categorydetail.css'
const CategoryDetails = ({categorie}) => {
    console.log(categorie);
    const {id,category_logo,category_name,job_available}=categorie;
  return (
    <div className='category-detail' >
        <img src={category_logo} alt="" />
        <h2 className='category-name'>{category_name}</h2>
        <p className='job-available'>{job_available}<span> Jobs Available</span></p>
    </div>
  )
}

export default CategoryDetails