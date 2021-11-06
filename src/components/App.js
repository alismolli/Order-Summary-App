import './styles/App.css';
import {Main} from './Main';
import Buttons from './Buttons';
import Header from './Header';
function App() {
  return (
    <article className="payment-card">
      <Header/>
      <Main/>
      <Buttons/>
    </article>
  );
}

export default App;
