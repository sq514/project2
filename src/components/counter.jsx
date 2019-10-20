import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ProperType from ''
class Counter extends Component {

  
  render() {
    items = {items:{
              a:1,
              b:2,
              c:3,
            },
            rows:2,
            vbucks:3}
    return (
      
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          onClick={() => this.props.(this.props.counter)}
          className="btn btn-secondary btm-sm m-2">Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btm-sm m-2">Decrement        
        </button>

        <button 
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">Delete
        </button>


      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    /*const a = {item1:1,item2:2}
    const b = a.item1;
    const {item1, item2} = a;*/
    const {value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
