class User{
    constructor(fName,lName,age){
        this.fName=fName
        this.lName=lName
        this.age=age
    }
    getBirthYear(){
        return new Date().getFullYear() -this.age
    }
    get FullName(){
        return this.fName+" "+this.lName
    }
    set FullName(value){
        const [firstName,lastName]=value.split(' ');
        this.fName=firstName
        this.lName=lastName
    }
    home(){
        console.log("Lucknow");
    }

}
class Student extends User{
    constructor(fName,lName,age,standard){
        super(fName,lName,age);
        this.standard=standard
    }
    study(){
        console.log("at SRMU");
    }

}
class Employee extends Student{
    constructor(fName,lName,age,company){
        super(fName,lName,age,"BTech");
        this.company=company
    }
    getBirthYear(){
        return new Date().getFullYear() -this.age
    }
    work(){
        console.log("works at GOOGLE");
    }
    get FullName(){
        return this.fName+" "+this.lName
    }
    set FullName(value){
        const [firstName,lastName]=value.split(' ');
        this.fName=firstName
        this.lName=lastName
    }

}
const user1=new User("vedank","Singh",22)
const user2=new User("vibhu","Singh",22)

const Student1=new Student("Vedank","singh",22,"BTech")
const employee1=new Employee("Vibhu","singh",22,"Delloite")