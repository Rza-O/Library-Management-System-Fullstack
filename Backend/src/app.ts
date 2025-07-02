import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { booksRoutes } from "./app/controllers/books.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";

const app: Application = express();
app.use(
	cors({
		origin: "http://localhost:5173",
	})
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/books", booksRoutes);
app.use("/api/borrow", borrowRoutes);

app.get("/", (req: Request, res: Response) => {
	res.send("Hola! Welcome to our Library Management System!");
});

export default app;
