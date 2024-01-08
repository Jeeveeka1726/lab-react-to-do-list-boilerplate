import React from 'react'
import './App.css'
import Todoitem from './Component/Todoitem';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      input: "",
      todoList : [],
    }
  }


  inputChange=(e)=>{
    this.setState({
      input: e.target.value
    })
  }

  formSubmit = (e)=>{
    e.preventDefault();
    if (this.state.input.length > 0){
      this.setState({
        input: "",
        todoList : [...this.state.todoList, this.state.input]
      })
    }
  }

  updateItem = (newitem,index) =>{
    let data = this.state.todoList;
    data.splice(index,1,newitem)
    this.setState({
      todoList: data,
    })
  }

  deleteItem=(index)=>{
    let data = this.state.todoList
    data.splice(index,1)
    this.setState({
      todoList: data,
    })
  }

  render(){
    return(
      <>
      <div className='align'>
        <div className='background'>
          <form onSubmit={this.formSubmit}>
            <input type="text" placeholder="Type here" value={this.state.input} onChange={this.inputChange} />
            <button>Add Item</button>
          </form>
          <h3>{this.state.input}</h3>
        <div>
          <h2></h2>
          {
            this.state.todoList.length==0 ?(
              <>
              </>
            ) : (
              this.state.todoList.map((ele,i)=>{
                return(
                  <>
                  <div>
                    <Todoitem
                      e={ele}
                      index = {i}
                      updateItem={this.updateItem}
                      deleteItem={this.deleteItem}
                    />
                  </div>
                  </>
                )
              })
            )
          }
        </div>
        </div>
      </div>
      </>
    )
  }
}


  export default App

