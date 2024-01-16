import TODOLIST from './components/TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
<div className="App" style={{ background: 'linear-gradient(to right, #0d1f38, #01030e)', minHeight: '100vh' }}>
   
      <TODOLIST/>
    
    </div>
  );
}

export default App;
