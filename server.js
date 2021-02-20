const express = require("express");
const mahasiswaRoutes = require("./routes/mahasiswa");
const apiRoutes = require("./routes/api");
const app = express();

app.use(express.json());

// routing
app.get("/", function (req, res) {
  res.json({
    message: "success",
    data: "halo",
  });
});

app.use("/api", apiRoutes);

const LISTEN_PORT = 3000;

app.listen(LISTEN_PORT);
