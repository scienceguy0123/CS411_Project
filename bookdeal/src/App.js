import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/store';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
 
      <div >
        <Main />
      </div>
    </Provider>

  );
}

export default App;
