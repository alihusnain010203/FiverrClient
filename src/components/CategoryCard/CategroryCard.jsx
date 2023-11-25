import React from 'react'
import './CategoryCardStyle.scss'
import { Link } from 'react-router-dom'

const CategroryCard = ({ item , key}) => {
  return (
    
    <Link className='link' key={key} to={'/gigs?cat=design'}>
      <div className="categoryCard">
        <img src={item.img} alt="" />
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    
      </div>
    </Link>
  )
}

export default CategroryCard