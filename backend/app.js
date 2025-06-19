import express from "express";

import customersRoutes from "./src/routes/customers.js"

import swagger from "swagger-ui-express";
import fs from "fs";
import path from "path";

// Creo una constante que es igual a la libreria que importé
const app = express();

const swaggerDocument = JSON.parse(
     fs.readFileSync(path.resolve("../Documentation.json")
     ,
     "utf-8")
    )



app.use(express.json())

app.use("/api/doc", swagger.serve, swagger.setup(swaggerDocument));

app.use("/api/customers", customersRoutes);
export default app;