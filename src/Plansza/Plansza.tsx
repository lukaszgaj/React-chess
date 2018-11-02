import * as React from 'react';
import './Plansza.css';
import PojedynczePole from './PojedynczePole/PojedynczePole';

class Plansza extends React.Component {
  public render() {
    return (
      <div className="plansza">
        <div className="szachownica">
          <div className="cyferki">
            <div className="cyferka"/>
            <div className="cyferka">8</div>
            <div className="cyferka">7</div>
            <div className="cyferka">6</div>
            <div className="cyferka">5</div>
            <div className="cyferka">4</div>
            <div className="cyferka">3</div>
            <div className="cyferka">2</div>
            <div className="cyferka">1</div>
          </div>
          <div className="container">
            <div className="literki">
              <div className="literka">A</div>
              <div className="literka">B</div>
              <div className="literka">C</div>
              <div className="literka">D</div>
              <div className="literka">E</div>
              <div className="literka">F</div>
              <div className="literka">G</div>
              <div className="literka">H</div>
            </div>
            <div className="pola">
              {this.narysujPlansze()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  private narysujPlansze = () => {
    const plansza = [];
    for (let i = 8; i > 0; i--) {
      for (let j = 1; j < 9; j++) {
        plansza.push(<PojedynczePole name={String.fromCharCode(64 + j) + i.toString()} kolor={i % 2 === 0 ? (64 + j) % 2 === 0 ? 'czarne' : 'biale' : (64 + j) % 2 === 0 ? 'biale' : 'czarne'} />);
      }
    }
    return plansza;
  }

}

export default Plansza;
