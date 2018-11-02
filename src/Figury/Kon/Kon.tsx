import * as React from 'react';
import {ConnectDragSource, DragSource, DragSourceConnector, DragSourceMonitor} from 'react-dnd';
import {ItemTypes} from '../../consts';

const knightSource: any = {
  beginDrag(props: any) {
    return {};
  }
};

const collect =  (connect: DragSourceConnector, monitor: DragSourceMonitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

interface IProps {
  connectDragSource?: ConnectDragSource;
  isDragging?: boolean;
}

@DragSource(ItemTypes.kon, knightSource, collect)
export default class Kon extends React.Component<IProps> {
  
  public render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource!(
    <div style={{
      cursor: 'move',
      fontSize: 25,
      fontWeight: 'bold',
      opacity: isDragging ? 0.5 : 1,
    }}>
    ♘
    </div>);
  }
}
