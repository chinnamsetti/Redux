import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

function App() {
  let inputRef=useRef();
  let dispatch=useDispatch();

  let storeObj=useSelector((store)=>{
   return store;
  }) 
  return(
    <div className="App">
    <input className="firstInput" placeholder='search here' ref={inputRef}></input>
    <br></br>
    <button type="button" className='mainButton' onClick={()=>{
     dispatch({type:"addtollyWoodActors",data:inputRef.current.value});
    }}>Tollywood Actors</button>
    <button type="button" className='mainButton' onClick={()=>{
      dispatch({type:"addbollyWoodActors",data:inputRef.current.value});
    }} >Bollywood Actors</button>
    <button type="button" className='mainButton' onClick={()=>{
      dispatch({type:"addhollyWoodActors",data:inputRef.current.value})
    }}>Hollywood Actors</button>
    <hr></hr>
    <h2>Tollywood Actors:{storeObj.tollyWoodActors.join()}</h2>
    <h2>Bollywood Actors:{storeObj.bollyWoodActors.join()}</h2>
    <h2>HollyWood Actors:{storeObj.hollyWoodActors.join()}</h2>
  </div>
  );
}
export default App;
