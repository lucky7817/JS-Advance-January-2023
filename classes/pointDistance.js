class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        let distanceX = Math.abs(point2.x - point1.x);
        let distanceY = Math.abs(point2.y - point1.y);

        let distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        return distance;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));