import { Provider } from 'react-redux';
import './App.css';
import Todo from './components/Todo';
import { store } from './redux/store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
