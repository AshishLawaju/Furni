import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("*", (req, res) => res.json("url not found"));
app.use((err, req, res, next) => {
  res.json({ msg: err.message });
});
export { app };

/* 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use((express.json({limit:"16kb"})))
app.use(express.urlencoded({extended:true,limit:"16kb"})) //nested jssn in url
app.use(express.static("public")) //pubic images testo ko lai 


app.use(cookieParser())  //now able to req.cookie res.cokie
 */