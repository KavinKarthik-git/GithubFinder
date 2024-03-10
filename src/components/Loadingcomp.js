import React,{Fragment} from 'react'
import spinner from './spinner.gif'

const Loadingcomp = () => {
  return (
    <Fragment>
    <img src={spinner} alt='Loading..'style={{width:'200px', margin:'auto',display:'block'}}  ></img>
    </Fragment>
  )
}


export default Loadingcomp