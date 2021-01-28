const index = require("./routes/index");
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();
const jsonQuery = require("json-query");
const jp = require("jsonpath");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4001;
const cors = require("cors");
//const server = http.createServer(app);
const rp = require("request-promise");
const path = require("path");

app.use(cors());
const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.static(path.join(__dirname, "../frontend/build/")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,      Accept"
  );
  next();
};

app.use(allowCrossDomain);
let interval;
io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  rp("https://api.coincap.io/v2/assets/bitcoin")
    .then((body) => {
      // console.log(body);
      socket.emit("BTC", { body });
    })
    .catch((err) => {
      console.log(err);
    });

  rp("https://api.coincap.io/v2/assets/ethereum")
    .then((body) => {
      // console.log(body);
      socket.emit("ETH", { body });
    })
    .catch((err) => {
      console.log(err);
    });

  rp("https://api.coincap.io/v2/assets/tether")
    .then((body) => {
      // console.log(body);
      socket.emit("USDT", { body });
    })
    .catch((err) => {
      console.log(err);
    });

  rp("https://api.coincap.io/v2/assets/polkadot")
    .then((body) => {
      // console.log(body);
      socket.emit("DOT", { body });
    })
    .catch((err) => {
      console.log(err);
    });

  rp("https://api.coincap.io/v2/assets/xrp")
    .then((body) => {
      // console.log(body);
      socket.emit("XRP", { body });
    })
    .catch((err) => {
      console.log(err);
    });
};

app.get("/", (req, res) => {
  // res.redirect("https://http://localhost:4001/");
  res.send("test");
});
app.get("/bitcoin", (req, res) => {
  rp("https://api.coincap.io/v2/assets/bitcoin")
    .then((body) => {
      // console.log(body);
      res.send(body);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/ethereum", (req, res) => {
  let marketData = getServerSideProps("ethereum");

  marketData.then(function (data) {
    res.send(data);
  });
});

app.get("/tether", (req, res) => {
  let marketData = getServerSideProps("tether");
  marketData.then(function (data) {
    res.send(data);
  });
});

app.get("/polkadot", (req, res) => {
  let marketData = getServerSideProps("polkadot");
  marketData.then(function (data) {
    res.send(data);
  });
});

async function getServerSideProps(id) {
  /*  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC,
  };
  const result = await CoinGeckoClient.coins.markets({ params });
  //  const query = jp.query(result, "$..data[0]");*/
  // const query = jp.query(result, "$..data[?(@.id=='" + id + "')]");
}
