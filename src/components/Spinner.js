import React from 'react'
import loading from '../loading.gif'
const Spinner = () => {
    return (
      <div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img className='my-3' src={loading} alt="loading" style={{ width: "50px", height: "50px" }} />
      </div>
      </div>
    )
  }
export default Spinner