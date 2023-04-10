import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';




function User(props) {
  const name = props.name;
  const value = 75;
  

  return (
    <div className='container d-flex justify-content-space-between'>
        <div className='mt-4 ms-4'>
        <h5 className='text-muted'>Hello {name} !!</h5>
        <h3>Senior beauty Analyst</h3>
        <LinearProgress
            className='w-50 mb-4 rounded'
            variant="determinate"
            value={value}
            style={{height:"0.5rem"}}
        />
        <p className='text-muted'>Total progress</p>
        </div>
        <div className='img-div'>
            <img src="user.png" className='rounded-circle m-4'  alt="dp"></img>
        </div>
    </div>
  );
}




export default User