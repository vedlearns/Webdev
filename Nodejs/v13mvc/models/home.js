//Core Module
const fs=require('fs');
const path=require('path');

//Local Module
const rootDir=require('../utils/pathUtil');
const homeDataPath=path.join(rootDir,'data','homes.json')
//Fake Database
// const registeredHouse=[];

class Home{
  constructor(houseName,price,location,rating){
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.rating=rating;
  }
  save(){
    Home.fetchAll((registeredHouse)=> {registeredHouse.push(this);
    
    fs.writeFile(homeDataPath,JSON.stringify(registeredHouse),err=>console.log("File Writing Concluded", err))})
   
  }

  static fetchAll(callback){

    fs.readFile(homeDataPath,(err,data)=>{
      // console.log("File Read :",err,data)
      // if(!err){
      //  return callback(JSON.parse(data));
      // }
      // callback([])
      callback(!err?JSON.parse(data):[]);
    })
      
  }
}

module.exports={Home} 