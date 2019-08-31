import React, {Component} from 'react';
import './todolistItem.css';

class todolistItem extends  Component {
  render() {
  	let className = "TodoItem";
  	const {item} = this.props;
  	if (item.isComplete){
  		className += " TodoItem-complete"
  	}
  	return (
          <div className={className}>
            <p>{this.props.item.title}</p>
          </div> 
  		);
  }
}
export default todolistItem;