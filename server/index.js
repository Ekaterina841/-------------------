const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Серверт запущен. Порт сервера: ${port}`);
});

app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

app.get("/account/profile", (req, res) => {
    res.send("Профиль");
});