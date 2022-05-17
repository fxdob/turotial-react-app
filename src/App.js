import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  state = {characters:[],}
  removeCharacter = index => {
      const {characters} = this.state
      this.setState({
        characters:characters.filter((character, i) => {
        return i !== index 
            }),
        })
  }
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
