import * as React from 'react';
import './PojedynczePole.css';

interface IProps {
    name: string;
    kolor: string;
}

class PojedynczePole extends React.Component<IProps>{

    private klasa = `${this.props.kolor} pole`
    
  public render() {
    return (
      <div className={this.klasa}/>
    );
  }
}

export default PojedynczePole;
