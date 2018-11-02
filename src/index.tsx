import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Plansza from './Plansza/Plansza';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Plansza pozycjaKonia={[7,4]}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
