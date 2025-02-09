//Core Module
const fs=require('fs');
const path=require('path');

//Local Module
const rootDir=require('../utils/pathUtils');
const homeDataPath=path.join(rootDir,'data','homes.json');

class Home{
  constructor(houseName,price,location,rating)
  {
    this.houseName=houseName;
    this.price=price;
    this.rating=rating;
    this.location=location;
  }

  save(){
    Home.fetchAll((registeredHouse)=>{
      registeredHouse.push(this);
      fs.writeFile(homeDataPath,JSON.stringify(registeredHouse),err=>console.log("Writing concluded ",err))
    })
  }
  static fetchAll(callback){
    fs.readFile(homeDataPath,(err,data)=>{
      callback(!err? JSON.parse(data):[])
    })
  }
}

module.exports=Home;