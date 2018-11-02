import * as React from 'react';
import Kon from '../../Figury/Kon/Kon';
import './PojedynczePole.css';

interface IProps {
    name: string;
    kolor: string;
}

class PojedynczePole extends React.Component<IProps>{

    private klasa = `${this.props.kolor} pole`
    
  public render() {
    return (
      <div className={this.klasa}>      <Kon/></div>
    );
  }
}

export default PojedynczePole;
