import * as React from 'react';
import './PojedynczePole.css';

interface IProps {
    kolor: string;
}

class PojedynczePole extends React.Component<IProps>{

    private klasa = `${this.props.kolor} pole`
    
  public render() {
    return (
      <div className={this.klasa}>{this.props.children}</div>
    );
  }
}

export default PojedynczePole;
