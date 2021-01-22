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
            <button type="submit" className="btn">
            Add
            </button>
        </form>
        );
    }
}

class TaskList extends React.Component{
    render(){
        return(
            <div id="task-list">
                <div class="card text-center" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5>Today's Tasks:</h5>
                        <ul>
                            <li>Task One</li>
                            <li>Task Two</li>
                        </ul>
                        <br></br>
                    </div>
                </div>
            </div>
        );
    }
}

class ItemCount extends React.Component {
    render() {
      return (
          <div id="item-count">
              <h1 style={{color:"blue", textAlign:"center"}}>Total Tasks: {this.props.totalItems}</h1>
          </div>
      );
    }
  }

  class Page extends React.Component{
      render(){
          return(
              <div>
              <AddNew/>
              <TaskList/>
              <ItemCount totalItems={0}/>
              </div>
          );
      }
  }

  ReactDOM.render(<Page/>, document.getElementById("root"));