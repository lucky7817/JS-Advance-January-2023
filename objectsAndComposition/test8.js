let student = {
    name: 'Dilyan',
    lastName: 'Ivanov',
    age: 32,
    location: { lat: 42.658, ing: 23.2569 },
}
console.log(student.location.lat);

let { location: { ing } } = student;
let {location: address} = student
console.log(address)


function createRect (width, height) {
     const rect = {width, height};

     rect.getArea = () => { return rect.width * rect.height;};

     //return rect;
     console.log(rect)
}

createRect(5, 5);