import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//for handeling incoming json
app.use(
  express.json({
    limit: "16kb",
  })
);

//for handeling inputs from URL
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

//to store static asset-> stores in public folder(name can be anything)
app.use(express.static("public"));

app.use(cookieParser());

export { app };
