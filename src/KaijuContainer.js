//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    name: "",
    power: "",
    image: ""
  }

  componentDidMount(){
    requests.fetchKaijus()
    .then(resp => this.setState({kaijus: resp}))
        //.then(body => this.setState({kaijus: body}))
  }

  renderKaijuCards = () => {
    return this.state.kaijus.map((kaiju, ind) => <KaijuCard key={ind} {...kaiju} patchHelper={this.patchKaijusPessimistically}/>)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addKaiju = (e) => {
    e.preventDefault()
    
    let addKaijuData = {
      name: this.state.name,
      power: this.state.power,
      image: this.state.image
    }

    requests.postKaijus(addKaijuData)
      .then(resp => resp.json())
        .then(body => {
          let kaijusCopy = [...this.state.kaijus]
          kaijusCopy.push(body)
          this.setState({kaijus: kaijusCopy})
        })
  }

  patchKaijusPessimistically = (data) => {
    let kaijuCopy1 = [...this.state.kaijus]
    let kaijuIndex = kaijuCopy1.findIndex(kaiju => kaiju.id === data.id)
    kaijuCopy1[kaijuIndex] = data
    this.setState({kaijus: kaijuCopy1})
  }

  render() {
    console.log(this.state.kaijus)
    return (
      <>

        <CreateKaijuForm addKaiju={this.addKaiju} handleChange={this.handleChange} kaijuInfo={this.state}/>

        <div id='kaiju-container'>

          {this.renderKaijuCards()}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
