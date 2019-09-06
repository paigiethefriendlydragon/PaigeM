import React from 'react'

class PaigeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: []

    }
  }
  componentDidMount(){
    fetch(`api/v1/paiges`)
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
      this.setState({videos: body.json})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))

  }

  render(){
    let videosArray = this.state.videos.map(video => {
      return(
        <VideoComponent
           videoId ={video.id}
           videoKey ={video.id}
           videoName ={video.name}
           />
      )
    })
    return(
      <div>
      {videosArray}
      </div>
    )
  }
 }








export default PaigeContainer
