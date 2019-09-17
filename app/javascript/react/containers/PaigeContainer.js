import React, { Component } from 'react'
import PaigeVideoComponent from '../components/PaigeVideoComponent'

class PaigeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      paiges: {},
    }
  }
  componentDidMount(){
    fetch(`/api/v1/paiges/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json();
    })
    .then(body =>{
      this.setState({paiges: body})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){

    return(
      <div id='paige-component'>
        <div id='paragraph'>
          <h1> Bio </h1>
            <p>{this.state.paiges.bio} </p>
          <h1> Contact PaigeMarie </h1>
            <p> Lwhatdoyourelfeyessee@gmail.com </p>
            <p> 573-275-3713 </p>
        </div>
      </div>
    )
  }
 }


export default PaigeContainer
