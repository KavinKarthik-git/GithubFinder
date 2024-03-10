import React from 'react';
import PropTypes from 'prop-types';

 const Userlist = ({eachuser:{login,avatar_url,html_url}}) => {
    return (
      <div className='card text-center'>
        <h3>{login}</h3>
        <img src={avatar_url} alt='' className='round-img' style={{width:'60px'}}></img>
        
      <div>
      <a href={html_url} className='btn btn-dark.btn-sm'>VIEW</a>
      </div>
      </div>
    )
  
};
Userlist.propTypes={eachuser:PropTypes.object.isRequired};


export default Userlist