import TODOLIST from './components/TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   
    <div className="App" style={{ background: 'linear-gradient(to right, #111d2e, #050c2d)' }}>
  
<div class="area" >
<ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <TODOLIST/>
            
    </div >
      
      </div>
 
    
  );
}

export default App;
