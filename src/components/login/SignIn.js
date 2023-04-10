import React ,{ useState }from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='d-flex justify-content-center vh-100'>
      <div className='card mx-auto my-5 p-5 border-0 shadow vh-100'>
        <div className="d-flex flex-column vh-100">
        <div class="row">
            <div className='col-10 mb-5'>
              <ArrowBackIcon sx={{ color: 'black', fontSize: 32 }} />
            </div>
          </div>
          <div class="row">
            <div className='col-10'>
              <img className="logo-img align-self-start"  src="logo-sm.png" alt="Logo" />
            </div>
          </div>
          <div class="row mt-4">
            <div className='col-10'>
              <h4>Sign in</h4>
            </div>
          </div>
          <div class="row">
            <div className='col-10'>
              <p className='text-muted small'>Using your beautgenics account</p>
            </div>
          </div>
          <div class="row mt-5">
            <div className='col-12'>
              <input type='text' className='email p-2 border rounded'  placeholder='Email address/Phone' style={{ width: '100%', height: '56px', fontSize: '18px',border: '1px solid #ccc' }}/>
            </div>
          </div>
          <div class="row mt-2">
            <div className='col-12'>
              <input 
                type={showPassword ? 'text' : 'password'}
                className='password p-2 border rounded'  
                placeholder='Enter your password' 
                style={{ width: '100%', height: '56px', fontSize: '18px', border: '1px solid #ccc' }}
                />
            </div>
          </div>
          <div class="row mt-2">
            <div className='col-12 text-end'>
              <p className='text-danger'>Forgot password?</p>
            </div>
          </div>
          <div class="row mt-2">
            <div className='col-12 d-flex flex-row '>
              <input class="form-check-input pl-3" type="checkbox" value="" id="rememberMe"/>
              <p className='text-muted mb-0 pl-3 align-self-center'>Remember my login info</p>
            </div>
          </div>
          <div class="row mt-2">
            <div className='col-12'>
              <button className='btn w-100 mt-4 text-white' style={{backgroundColor:"#C83B53"}}>Sign in</button>
            </div>
          </div>
          <div class="row mt-2">
            <div className='col-12'>
              <h6 className='text-center sign-in'>Don't have an account? <span style={{color:"#C83B53"}}>Sign up</span></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn