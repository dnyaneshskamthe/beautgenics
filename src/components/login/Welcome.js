import React from 'react'

const Welcome = () => {
  return (
    <div className='d-flex justify-content-center vh-100'>
      <div className='card mx-auto my-5 p-5 border-0 shadow vh-100'>
        <div className="d-flex flex-column vh-100">
          <div class="row">
            <div className='col-10'>
              <img className="logo-img align-self-start"  src="logo-sm.png" alt="Logo" />
            </div>
          </div>
          <div class="row mt-4">
            <div className='col-10'>
              <h1>Welcome to <br/><span style={{color : "#C83B53"}}>Beautgenics</span></h1>
            </div>
          </div>
          <div class="row">
            <div className='col-10'>
              <p className='text-muted small'>An app where you can manage all your <br/>Beauty Analyst activities & much more ...</p>
            </div>
          </div>
          <div class="row mt-5">
            <div className='col-10'>
              <h6 className='text-muted'>Let's get started...</h6>
            </div>
          </div>
          <div class="row mt-5">
            <div className='col-12'>
            <img className="align-self-start img-fluid" style={{marginTop: '1rem'}} src="google.png" alt="Logo" />
            </div>
          </div>
          <div class="row mt-2">
            <div className='col-12'>
            <img className="align-self-start img-fluid" style={{marginTop: '1rem'}} src="apple.png" alt="Logo" />
            </div>
          </div>
          <div class="row mt-2">
            <div className='col-12'>
              <h6 className='text-center sign-in'>Already have an account? <span className='text-danger '>Sign in</span></h6>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Welcome
