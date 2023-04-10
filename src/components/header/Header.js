import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className='d-flex justify-content-center'>
        <div className='card mx-auto  p-2 border-0 shadow w-100' style={{backgroundColor:"#C83B53"}}>
            <div className="d-flex flex-row align-items-center">
                <MenuIcon style={{color: "white"}} />
                <span className='text-white'> | </span>
                <div className='d-flex w-75 align-items-center'>
                    <p className='text-white pt-2 '><span><LocationOnIcon /></span>address of Person</p>
                </div>
                <span className='text-white '> || </span>
                <div className='w-25 d-flex justify-content-end'>
                    <NotificationsIcon className = "" style={{color: "white"}}/>
                </div>
               
            </div>
        </div>
    </div>

  )
}

export default Header