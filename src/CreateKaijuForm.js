import React from 'react'

class CreateKaijuForm extends React.Component {

  render() {
    // {console.log(this.props)}
    return (
      <form id='create-kaiju-form' onSubmit={this.props.addKaiju}>

        <label>Name: </label>
        <input type='text' name="name" placeholder="add your name here.." onChange={this.props.handleChange} value={this.props.name}/>

        <label>Power: </label>
        <input type='text' name="power" placeholder="add your power here..." onChange={this.props.handleChange} value={this.props.power}/>

        <label>Image: </label>
        <input type='text' name="image" placeholder="add your image url here..." onChange={this.props.handleChange} value={this.props.image}/>

        <br/>

        <input type='submit' value='Create Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
