import './App.css';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home';
import store  from './redux/TaskStore'; 
import { Provider } from 'react-redux';

function App() {
  return (<>
    <div className='h-100vh  p-3'>
      <div className='container-fluid h-100-footer'>
      <Provider store ={store}>
        <Home />
      </Provider>

      <Footer />
      </div>
    </div>
  </>
  );
}

export default App;
