import './App.css';


import Rightbar from './componentes/rightbar/Rightbar';
import Sidebar from './componentes/sidebar/Sidebar';


function App() {
  return (
      <div className="app">
          <Sidebar />
        <div className="centro"><h1>Centro</h1></div>
          <Rightbar />          
      </div>

  );
}

export default App;
