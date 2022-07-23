import React, { Component } from "react"
import './App.css'
import ListItem from "./ListItem.js"


class MyList extends Component {
  render() {
  let todoItems = this.props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />
  })  
    return (
      <>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </>
    )
  }
}

export default MyList

