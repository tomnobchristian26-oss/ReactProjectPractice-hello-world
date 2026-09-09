import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind/>
      {/* <FunctionClick/>
      <ClassClick/> */}
       {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="Stark" heroName="IronMan">
        <p>This is Children props</p>
        </Greet>

      
        <Greet name="Bruce" heroName="Hulk"/>
        <button>Action</button>
        <Greet name="Steve" heroName="Capt. America"/> */}
        {/* <Welcome heroName="IronMan"/>
        <Welcome heroName="Hulk"/> */}
        {/* <Welcome heroName="Capt. America"/> */}

        {/* <Hello/> */}
    </div>
  );
}

export default App;
