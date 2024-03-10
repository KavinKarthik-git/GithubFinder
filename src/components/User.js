import React from 'react'
import Userlist from './Userlist'
import Loadingcomp from './Loadingcomp'
import PropTypes from 'prop-types'
const User =({user,loading}) => {
    
      if(loading)
      {
         <Loadingcomp/>
      }
      else{
        return (
        <div style={gridstyle}>
        {user.map(i=> (<Userlist key = {i.id} eachuser={i} />))}
        
      </div>
        )
      }
     
    
    }
   
User.propTypes={user:PropTypes.array.isRequired};
User.propTypes={loading:PropTypes.bool.isRequired};

const gridstyle=
{
  display:'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}
export default User