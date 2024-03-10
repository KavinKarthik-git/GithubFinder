import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import User from "./components/User";
import axios from "axios";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./components/About";
class App extends React.Component{
  state={
    userdata:[],
    loading:false,
    alertst:null
  }
  
  searchfn = async (item)=>{
  this.setState({loading:true})
  const result = await axios.get(`https://api.github.com/search/users?q=${item}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
  this.setState({userdata:result.data.items})
  this.setState({loading:false})


  }

  clearUsersfn =()=>{this.setState({userdata:[] , loading:false})}

  alertfn = (msg,type) =>{ 
    this.setState({alertst:{msg, type}});
    setTimeout(()=>this.setState({alertst:null}),2000);
}

  render(){
   
    return (
      <Router>
      <div className="App">
           <Navbar title='GitHub_finder'  />

           <div className="container">
              <Alert alert ={this.state.alertst}/>
              
          <Routes>
          <Route exact path="/" element={<Fragment>
            <Search
            searchuser={this.searchfn}
            clearUsers={this.clearUsersfn}
            showClear={this.state.userdata.length > 0 ? true : false}
            alertprop={this.alertfn}
          />
         <User user={this.state.userdata} loading={this.state.loading} />
         </Fragment>}/>
           
          
        <Route exact path="/about" element={<About />} /> 
        
        </Routes>
              
      </div>
      </div>
      </Router>
      );
  }
  
  
}

export default App;
