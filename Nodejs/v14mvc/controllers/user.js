const { Home } = require("../models/home");
const {Favorites}=require("../models/favorites");

exports.getHome = (req, res, next) => {
  res.render("home", { title: "Home" });
};
exports.getHomeList = (req, res, next) => {
  Home.fetchAll((registeredHouse) =>
    res.render("home-list", { registeredHouse: registeredHouse, title: "Home" })
  );
};

exports.getFavorites = (req, res, next) => {
  Favorites.getFavorites(favorites=>{
    Home.fetchAll((registeredHouse) =>{
      const favoriteHomes=registeredHouse.filter(home=>favorites.includes(home.id));
      res.render("favorites", {
        registeredHouse: favoriteHomes,
        title: "Favorites",
      })
  });
  })

};
exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHouse) =>
    res.render("bookings", { registeredHouse: registeredHouse, title: "Bookings " })
  );
};
exports.getHomeDetails = (req, res, next) => {
  const homeId=req.params.homeId;
  Home.findById(homeId,home=>{
    if(home){
      console.log("Home Details Found",home);
      res.render("home-details", { home: home, title: "Home" })
    }
    else{
      res.redirect("/")
    }
  })
};
exports.postAddToFavorites=(req,res,next)=>{
console.log("came to add to favorites",req.body);
Favorites.addToFavorites(req.body.id,error=>{
  if(error)
  {
    console.log("Error while marking favorite: ",error);
  }
  res.redirect("/favorites");
  
})
}
