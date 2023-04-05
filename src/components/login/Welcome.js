import React from 'react'

const Welcome = () => {
  return (
    <div>
      <div className="d-flex vh-100">
        <div class="row">
          <div className='col-6'>
            <img className="logo-img align-self-start" style={{marginTop: '150px'}} src="logo-sm.png" alt="Logo" />
          </div>
        </div>
        <div class="row mt-4">
          <div className='col-6'>
            <h1>Welcome to <br/><span style={{color : "#C83B53"}}>Beautgenics</span></h1>
          </div>
        </div>
        <div class="row">
          <div className='col-10'>
            <h6 className='text-muted'>An app where you can manage all your <br/>Beauty Analyst activities & much more ...</h6>
          </div>
        </div>
        <div class="row mt-5">
          <div className='col-6'>
            <h6 className='text-muted'>Let's get started...</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome