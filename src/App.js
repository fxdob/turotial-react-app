import React, {Component} from 'react'
import Table from './Table'

removeCharacter = index => {
    const {characters} = this.state

    this.setState({
      characters:characters.filter((character, i) => {
      return i !== index 
      }),
    })
}
class App extends Component {
  state = {characters:[],}
  /*render() { 
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        < Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }*/
}

export default App
