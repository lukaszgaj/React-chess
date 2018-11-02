import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Kon from '../Figury/Kon/Kon';
import './Plansza.css';
import PojedynczePole from './PojedynczePole/PojedynczePole';

interface IProps {
  pozycjaKonia: number[];
}

@DragDropContext(HTML5Backend)
class Plansza extends React.Component<IProps> {
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
              {this.narysujPola(64)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  private narysujPole = (numerPola: number) => {
    const x = Math.floor(numerPola / 8)
    const y = numerPola % 8;
    return <PojedynczePole x={x} y={y} key={numerPola}>{this.narysujKonia(x, y)}</PojedynczePole>
  }

  private narysujKonia = (x: number, y:number) => {
    const [konX, konY] = this.props.pozycjaKonia;
    if (x === konX && y === konY) {
        return <Kon/>;
    }
    return null;
  }

  private narysujPola = (liczbaPol: number) => {
    const pola = [];
    for (let i = 0; i < liczbaPol; i++) {
      pola.push(this.narysujPole(i));
    }
    return pola;
  }

}

export default Plansza;
