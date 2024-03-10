
import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {
    

    static propTypes={
        searchuser:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        
    }

    
    state={
        iptext:''
        
    };


    onChange = e => this.setState({[e.target.name]:e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.iptext==='')
        {
          this.props.alertprop("please enter something", "light")
         
        }
        else{
            this.props.searchuser(this.state.iptext)
            this.setState({iptext:" "})
        }
        
        
 
    };
    

  render() {
    
    const {clearUsers, showClear} = this.props;
    return (
        <div>
        <form onSubmit={this.onSubmit} className='form'>
            <input type='text' name='iptext' placeholder='Type here' value={this.state.iptext} onChange={this.onChange}></input>
            <input type ='submit' value='Ok' className='btn btn-dark btn-block'></input>
        </form>
        {showClear && ( <button className='btn btn-light btn-block' onClick={clearUsers}>Trash</button>)}
                
        
    </div>
    )
  }
}


export default Search 