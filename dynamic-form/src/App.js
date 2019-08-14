import React from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    characters: []
  };
  handleSubmit = (character) =>{
    console.log(character)
    const characters = [...this.state.characters, character];
    console.log("characters", characters);
    this.setState({characters});
  }
  // handleRemove = (index) =>{
  //   // let characters = [...this.state.characters];
  //   // characters = characters.filter(c=>c.name !== character.name);
  //   // this.setState({characters});
  //   const { characters } = this.state
  //   this.setState({characters: characters.filter((character, i) => {
  //     return i !== index
  //   }),})
  // }
  render() {
    const {characters} = this.state;
    console.log("Rendered characters", characters);
    return (
      <main className="container">
        <Table characters={characters}/>
        <Form  handleSubmit={this.handleSubmit}/>
      </main>
    );
  }
}

export default App;
