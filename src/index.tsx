import ReactDOM from 'react-dom';
import {Root} from './pages/root';

function startApp() {
  ReactDOM.render(<Root />, document.getElementById('root'));
}

startApp();