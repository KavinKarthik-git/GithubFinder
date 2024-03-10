import React from 'react'

const Alert = ({alert}) => {
  return (
    alert!=null &&
    <div className='alert alert-light'>
        {alert.msg}
    </div>
  )
}
export default Alert;