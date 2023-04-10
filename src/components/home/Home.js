import React from 'react'
import Header from '../header/Header'
import User from '../user/User'
import Services from '../user/Services'
const Home = () => {
    const name = 'Sarika'
  return (
    <div className='container container-fluide bg-secondary'>
        <div className='card rounded-0'>
            <Header/>
            <User name = {name}/>
        </div>
        <div className='card border-0 rounded-0'>
            <Services/>
        </div>
        
    </div>
  )
}

export default Home