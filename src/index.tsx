import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Plansza from './Plansza/Plansza';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Plansza />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
