// const tinderUser = new Object()

const tinderUser = {}
 
tinderUser.id = "123abc"
tinderUser.name = "Atul" 
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "atul@gmail.com",
    fulname: {
        userfullname: {
            firstname: "Atul",
            lastname: "Singh"
        }
    }
}
//  console.log(regularUser.fulname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "atul@gmail.com",

    },
    {
        id: 1,
        email: "atul@gmail.com",

    },
    {
        id: 1,
        email: "atul@gmail.com",

    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Atul"
}

const {courseInstructor: Instructor} = course

console.log(Instructor);

// {
//     "name": "Atul",
//     "courseName": "JavaScript",
//     "price": "free"

// }
