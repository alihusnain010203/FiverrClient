import React, { useState } from 'react'
import './Gigsstyle.scss'
import {gigs} from '../../dummydata.js'
import GigCard from '../../components/GigCard/GigCard'
const Gigs = () => {
  const [open,setOpen]=useState(false)
 const [sort,setSort]=useState('sales')

 const reSort=(type)=>{
  setSort(type)
  setOpen(false)
 }
  return (
   <div className="Gigs">
    <div className="container">
      <span className="breadcrumbs">FIVERR {'>'} GRAPHICS & DESIGN</span>
      <h1>AI Artists</h1>
      <p>
        Explore the boundaries of art and technology with Fiverr's
        AI artists
      </p>
      <div className="menu">
        <div className="left">
          <span>Budget</span>
          <input type="text" placeholder='min' />
          <input type="text" placeholder='max' />
          <button>Apply</button>
        </div>
        <div className="right">
          <span className="sortBy">Sort by</span>
          <span className="sortType">{sort==='sales' ? 'Best Selling' : 'Newest'}</span>
          <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
          {open && <div className="rightmenu">
    {sort==='sales' ? <span onClick={()=>reSort('createdAt')}>Newest</span> : <span onClick={()=>reSort('sales')}>Best Selling</span>}
           
          </div>}
        </div>
      </div>
      <div className="cards">
       {
        gigs.map((gig)=>{
          return <GigCard key={gig.id} item={gig}/>
        })
       }
        </div>
      </div>
   </div>
  )
}

export default Gigs