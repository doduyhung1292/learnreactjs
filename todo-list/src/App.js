import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './component/todolistItem';

class App extends Component {
 
 constructor () {
   super();
   this.todoItem = [ 
   {title: 'Nấu cơm', isComplete: true},
   {title:'Quets nhà', isComplete: true},
   {title:'Rửa bát'}
   ];
 }
render() {
  if (this.todoItem.length >0) {
  return (
    <div className="App">
       {
        this.todoItem.map((item) => <TodoItem key={item} item={item} />)
       }
    </div>
  );
} else { return (<div className="App">Nothing</div>)};
}
}

export default App;
