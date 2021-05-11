import './App.css';
import InputTodo from './components/InputTodos'
import ListTodos from './components/ListTodos'
import {Fragment} from "react";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
