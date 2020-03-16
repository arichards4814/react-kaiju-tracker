// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

import * as requests from './requests'

class KaijuCard extends React.Component {

  state = {
    editFormShowing: false,
    id: this.props.id,
    editName: this.props.name,
    editPower: this.props.power,
    editImage: this.props.image
  }
  // const {id, name, power, image} = props

  // How can we show the edit form conditionally?

  toggleEdit = () => {
    console.log("test")
    this.setState({editFormShowing: !this.state.editFormShowing})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    let editedData = {
      name: this.state.editName,
      power: this.state.editPower,
      image: this.state.editImage
    }

    requests.patchKaiju(editedData, this.state.id)
      .then(body => this.props.patchHelper(body))
    this.setState({editFormShowing: !this.state.editFormShowing})
  }

  render() {
    {console.log(this.state.editFormShowing)}
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{this.props.name}</h2>
        <h3 className='kaiju-card-power'>Power: {this.props.power}</h3>

        <img className='kaiju-card-image' src={this.props.image} alt={this.props.name} />

        {this.state.editFormShowing ? <EditKaijuForm edits={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> : ""}
        <button onClick={this.toggleEdit} className='kaiju-card-edit-button'>Edit</button>

      </div>
    )
  }
}

export default KaijuCard
