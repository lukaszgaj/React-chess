import * as React from 'react';
import { ConnectDropTarget, DropTarget, DropTargetConnector, DropTargetMonitor } from 'react-dnd';
import { ItemTypes } from '../../consts';
import { czyMoznaPrzesunacKonia, ruszKonia } from '../../State/Game';
import './PojedynczePole.css';

interface IProps {
  key: number;
  x: number;
  y: number;
  connectDropTarget?: ConnectDropTarget;
  canDrop?: boolean;
  isOver?: boolean;
}

const squareTarget: any = {
  canDrop(props: any) {
    return czyMoznaPrzesunacKonia(props.x, props.y);
  },

  drop(props: any) {
    ruszKonia(props.x, props.y);
  }
}



const collect = (connect: DropTargetConnector, monitor: DropTargetMonitor) => {
  return {
    canDrop: monitor.canDrop(),
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget(ItemTypes.kon, squareTarget, collect)
class PojedynczePole extends React.Component<IProps>{
  private klasa = `${(this.props.x + this.props.y) % 2 ? 'czarne' : 'biale'} pole`;

  public render() {
    const {children, canDrop, connectDropTarget, isOver} = this.props;
    return connectDropTarget!(
      <div className={this.klasa}>
        <div>{children}</div>
        {isOver && !canDrop && this.renderMiejsca('red')}
        {!isOver && canDrop && this.renderMiejsca('yellow')}
        {isOver && canDrop && this.renderMiejsca('green')}
      </div>
    );
  }

  private renderMiejsca(color: string) {
    return <div style={{
      backgroundColor: color,
      height: '100%',
      opacity: 1,
      width: '100%',
      zIndex: 1,
    }} />
  }
}

export default PojedynczePole;
