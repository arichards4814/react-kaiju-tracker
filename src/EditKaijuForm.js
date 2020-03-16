import React from 'react'


class EditKaijuForm extends React.Component {

  

  render() {
    const {editName, editPower, editImage} = this.props.edits
    return (
      <>
        <form className='kaiju-card-edit-form' onSubmit={this.props.handleSubmit}>

          <label>Name: </label>
          <input type='text' name="editName" value={editName} onChange={this.props.handleChange}/>
          <br/>

          <label>Power: </label>
          <input type='text' name="editPower" value={editPower} onChange={this.props.handleChange}/>
          <br/>

          <label>Image URL: </label>
          <input type='text' name="editImage" value={editImage} onChange={this.props.handleChange}/>
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
