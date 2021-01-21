import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import './index.css';

class AddNew extends React.Component{
    render(){
        return(
        <form>
            <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
            Add
            </button>
        </form>
        );
    }
}

class ItemCount extends React.Component {
    render() {
      return (
          <div>
              <h1 style={{color:"blue", textAlign:"center"}}>Total Items: {this.props.totalItems}</h1>
          </div>
      );
    }
  }

  class Page extends React.Component{
      render(){
          return(
              <div>
              <AddNew/>
              <ItemCount totalItems={0}/>
              </div>
          );
      }
  }

  ReactDOM.render(<Page/>, document.getElementById("root"));