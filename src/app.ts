import express from "express";
import * as bodyParser from 'body-parser';

const cors = require("cors");

const port = process.env.PORT || 3030;
const app = express();

app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`🔥 Server running on http://localhost:${port}`);
})