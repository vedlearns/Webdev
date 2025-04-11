//Core Module
const fs=require('fs');
const path=require('path');

//Local Module
const rootDir=require('../utils/pathUtil');
const favoritesDataPath=path.join(rootDir,'data','favorites.json');

class Favorites{

  static addToFavorites(homeId,callback)
  {
    Favorites.getFavorites((favorites)=>{
        if(favorites.includes(homeId))
        {
          callback("Home is already marked Favorite");
        }
        else{
          favorites.push(homeId);
          fs.writeFile(favoritesDataPath,JSON.stringify(favorites),callback);
        }
    })
  }
  static getFavorites(callback)
  {
    fs.readFile(favoritesDataPath,(err,data)=>{
      callback(!err? JSON.parse(data):[]);
    })
  }

}

module.exports={Favorites};