let pozycjaKonia = [0, 0];
let observer:any = null;

function emitChange() {
  observer(pozycjaKonia);
}

export function observe(o: any) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function ruszKonia(x:number, y: number) {
    pozycjaKonia = [x, y];
  emitChange();
}

export function czyMoznaPrzesunacKonia(toX: number, toY: number) {
    const [x, y] = pozycjaKonia;
    const dx = toX - x;
    const dy = toY - y;
    
    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
  }