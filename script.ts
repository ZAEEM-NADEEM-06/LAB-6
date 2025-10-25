// Task 1 — Basic Types & Variables
let nameZaeem: string = "Hello"
let ageZaeem: number = 22
let isStudentZaeem: boolean = true
let anythingZaeem: any = "Can be anything"
let unknownZaeem: unknown = 123

let fruits: string[] = ["Apple", "Banana", "Cherry"]
let personZaeem: [string, number] = ["Zaeem", 22]

function checkTypeZaeem(value: string | number) 
{
  if (typeof value === "string") console.log("It's a string:", value)
  else console.log("It's a number:", value)
}
checkTypeZaeem("Hello")
checkTypeZaeem(10)



// Task 2 — Functions & Parameters
function addZaeem(a: number, b: number) 
{
  return a + b
}
function greetZaeem(name?: string) 
{
  console.log("Hello", name || "Guest")
}
function logZaeem(message: string = "Welcome") 
{
  console.log(message)
}
function sumZaeem(...nums: number[]) 
{
  return nums.reduce((a, b) => a + b, 0)
}
console.log(addZaeem(3, 4))
greetZaeem("Zaeem")
greetZaeem()
logZaeem()
console.log(sumZaeem(1, 2, 3, 4))



// Task 3 — Interfaces & Objects
interface UserZaeem 
{
  id: number
  name: string
  email?: string
}
function showUserZaeem(u: UserZaeem) 
{
  console.log("ID:", u.id, "Name:", u.name, "Email:", u.email || "None")
}
let usersZaeem: UserZaeem[] = [
  { id: 1, name: "Zaeem", email: "z@gmail.com" },
  { id: 2, name: "Ali" }
]
usersZaeem.forEach(showUserZaeem)



// Task 4 — Classes & Access Modifiers
class PersonMainZaeem 
{
  name: string
  private age: number

  constructor(n: string, a: number) 
  {
    this.name = n
    this.age = a
  }

  introduce() 
  {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old`)
  }
}

class StudentZaeem extends PersonMainZaeem 
{
  id: number

  constructor(n: string, a: number, i: number) 
  {
    super(n, a)
    this.id = i
  }

  study() 
  {
    console.log(this.name, "is studying")
  }
}

let s1 = new StudentZaeem("Zaeem", 21, 1001)
s1.introduce()
s1.study()



// Task 5 — Inheritance & Abstract Classes
abstract class ShapeZaeem 
{
  abstract area(): number
}
class CircleZaeem extends ShapeZaeem 
{
  constructor(public radius: number) { super() }
  area() { return Math.PI * this.radius * this.radius }
}
class RectangleZaeem extends ShapeZaeem 
{
  constructor(public width: number, public height: number) { super() }
  area() { return this.width * this.height }
}
let c1 = new CircleZaeem(5)
let r1 = new RectangleZaeem(4, 6)
console.log("Circle area:", c1.area())
console.log("Rectangle area:", r1.area())



// Task 6 — Generics
function identityZaeem<T>(value: T) 
{
  return value
}
console.log(identityZaeem("Hello"))
console.log(identityZaeem(123))

class BoxZaeem<T> {
  private items: T[] = []
  add(item: T) { this.items.push(item) }
  getAll() { return this.items }
}
let box1 = new BoxZaeem<string>()
box1.add("Apple")
console.log(box1.getAll())

let box2 = new BoxZaeem<number>()
box2.add(10)
console.log(box2.getAll())



// Task 7 — Union & Intersection Types
function printIdZaeem(id: number | string) 
{
  console.log("ID:", id)
}
interface AdminZaeem { role: "admin" }
type PersonTypeZaeem = AdminZaeem & { name: string }
let admin1: PersonTypeZaeem = { role: "admin", name: "Zaeem" }
console.log(admin1)



// Task 8 — Type Guards
function isStringZaeem(v: unknown): v is string 
{
  return typeof v === "string"
}
function checkValueZaeem(v: unknown) 
{
  if (isStringZaeem(v)) console.log("String length:", v.length)
  else if (typeof v === "number") console.log("Number square:", v * v)
  else console.log("Unsupported type")
}
checkValueZaeem("Hello")
checkValueZaeem(5)
checkValueZaeem(true)



// Task 9 — Enums
enum StatusZaeem { Active, Inactive, Pending }
function getStatusZaeem(s: StatusZaeem) 
{
  if (s === StatusZaeem.Active) console.log("Active")
  else if (s === StatusZaeem.Inactive) console.log("Inactive")
  else console.log("Pending")
}
getStatusZaeem(StatusZaeem.Active)
getStatusZaeem(StatusZaeem.Pending)



// Task 10 — Utility Types
interface UserInfoZaeem { id: number, name: string, email: string }
type CreateZaeem = Omit<UserInfoZaeem, "id">
let newUser: CreateZaeem = { name: "Zaeem", email: "z@mail.com" }
console.log(newUser)



// Task 11 — Type Assertions & Casting
let valZaeem: unknown = "123"
let numZaeem: number = Number(valZaeem as string)
console.log(numZaeem * 2)
let msgZaeem: string | null = "Welcome"
console.log(msgZaeem!.toUpperCase())



// Task 12 — Simple Logging (no decorators)
function logCreationZaeem(objName: string) 
{
  console.log("Object created:", objName)
}

class PersonDecoZaeem 
{
  constructor(public name: string) 
  {
    logCreationZaeem("PersonDecoZaeem")
  }

  greet(msg: string) 
  {
    console.log(this.name, "says:", msg)
  }
}

const p1 = new PersonDecoZaeem("Zaeem")
p1.greet("Hello")



// Task 13 — Advanced Generics
class RepositoryZaeem<T> 
{
  private data: T[] = []
  add(item: T) { this.data.push(item) }
  getAll() { return this.data }
}
interface ProductZaeem { id: number, title: string }
let userRepo = new RepositoryZaeem<UserInfoZaeem>()
userRepo.add({ id: 1, name: "Zaeem", email: "z@mail.com" })
let productRepo = new RepositoryZaeem<ProductZaeem>()
productRepo.add({ id: 101, title: "Laptop" })
console.log(userRepo.getAll())
console.log(productRepo.getAll())
