//Core Module
const path = require("path");

//External module
const express = require("express");

//Local Module
const adminRouter = require("./routes/adminRouter");
const storeRouter = require("./routes/storeRouter");
const rootDir = require("./utils/pathUtils");
const errorController = require("./controllers/404");
const homeController = require("./controllers/home");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRouter);
app.use("/store", storeRouter);
app.use("/home", homeController.home);

app.use(errorController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
