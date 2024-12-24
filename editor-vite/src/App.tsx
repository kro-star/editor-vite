import './App.css';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home';

function App() {
  return (<>
    <div className='h-100vh  p-3'>
      <div className='container-fluid h-100-footer'>

        <Home />

      <Footer />
      </div>
    </div>
  </>
  );
}

export default App;
