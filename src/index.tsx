import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Plansza from './Plansza/Plansza';
import registerServiceWorker from './registerServiceWorker';

import {observe} from './State/Game';

observe((pozycjaKonia:number[]) =>
ReactDOM.render(
  <Plansza pozycjaKonia={pozycjaKonia}/>,
  document.getElementById('root') as HTMLElement
));
registerServiceWorker();
