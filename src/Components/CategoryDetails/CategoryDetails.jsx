import React from 'react'

const CategoryDetails = ({categorie}) => {
    console.log(categorie);
    const {id,category_logo,category_name,job_available}=categorie;
  return (
    <div >
        <img src={category_logo} alt="" />
        <h2>{category_name}</h2>
        <p>{job_available}<span> Jobs Available</span></p>
    </div>
  )
}

export default CategoryDetails