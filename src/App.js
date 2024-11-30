import './App.css';
import UserProvider from './Store/store';
import Test from './Components.js/Test';
import NavBar from './Components.js/NavBar';

function App() {

  return (
    <div className="App">
      <UserProvider>
        <header className="App-header">
          <NavBar/>
          <Test>
          </Test>
        </header>
      </UserProvider>
    </div>
  );
}

export default App;
