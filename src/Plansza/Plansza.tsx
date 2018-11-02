import * as React from 'react';
import './Plansza.css';
import PojedynczePole from './PojedynczePole/PojedynczePole';

class Plansza extends React.Component {
  public render() {
    return (
      <div className="szachownica">
        <div className="plansza">
          {this.narysujPlansze()}
        </div>
      </div>
    );
  }

  private narysujPlansze = () => {
    const plansza = [];
    for (let i = 8; i > 0; i--) {
      for (let j = 1; j < 9; j++) {
        plansza.push(<PojedynczePole name={String.fromCharCode(64 + j) + i.toString()} kolor={i % 2 === 0 ? (64+j) % 2 === 0 ? 'czarne' : 'biale' : (64+j) % 2 === 0 ? 'biale' : 'czarne'}/>);
      }
    }
    return plansza;
  }

}

export default Plansza;
