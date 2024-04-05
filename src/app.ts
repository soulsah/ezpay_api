import express from "express";
import { connectDatabase } from "./adapters/database";


const cors = require("cors");

const port = process.env.PORT || 3030;
const app = express();

app.use(cors());
app.use(express.json());

connectDatabase().catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
});

app.listen(port, () => {
    console.log(`🔥 Server running on http://localhost:${port}`);
})