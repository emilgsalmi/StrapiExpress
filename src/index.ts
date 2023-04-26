import express from "express"
import televisionRouter from "./routes/televisionRouter";
import computerRouter from "./routes/computerRouter";
import audioRouter from "./routes/audioRouter";
import mobileRouter from "./routes/mobileRouter";

const app = express();
app.use(express.json());

app.use("/televisions", televisionRouter);
app.use("/televisions/:id", televisionRouter);

app.use("/computers", computerRouter)
app.use("/computers/:id", computerRouter)

app.use("/audios", audioRouter)
app.use("/audios/:id", audioRouter)

app.use("/mobiles", mobileRouter)
app.use("/mobiles/:id", mobileRouter)

app.get("/", (req, res) => {
    res.send("Examination 1")
});
app.listen(8008, () => {
    console.log("http://localhost:8008");
})