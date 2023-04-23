// BEGIN
export function Point (x, y) {
    this.getX = () => x;
    this.getY = () => y;
}

export function Segment (beginPoint, endPoint) {
    this.getBeginPoint = () => beginPoint;
    this.getEndPoint = () => endPoint;
}

export function reverse (segment) {
    let aX = segment.getEndPoint().getX();
    let aY = segment.getEndPoint().getY();
    let bX = segment.getBeginPoint().getX();
    let bY = segment.getBeginPoint().getY();
    
    let a = new Point(aX, aY);
    let b = new Point(bX, bY);


    return new Segment(a, b);
}
// END
