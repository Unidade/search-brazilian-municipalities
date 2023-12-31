import express from "express"
import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"
import { router as searchRouter } from "./routers/search.js"
import { router as municipioRouter } from "./routers/municipio.js"
import { notFound } from "./middleware/404.js"
import { handleError } from "./middleware/handle-error.js"
import cors from "cors"

export const app = express()
app.use(express.json())
app.use(cors())

app.use("/search", searchRouter)
app.use("/municipio", municipioRouter)
/* set up swagger in the root */
const swaggerDocument = YAML.load("api.yaml")
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(handleError)
app.use(notFound)
