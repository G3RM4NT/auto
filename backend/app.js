import express from "express";

import cookieParser from "cookie-parser";

import customersRoutes from "./src/routes/customers.js"

// Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());
//Que postman acepte guardar cookies
app.use(cookieParser());


app.use("/api/customers", customersRoutes);

export default app;