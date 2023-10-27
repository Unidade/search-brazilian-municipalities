import { Router } from "express"
import { getMunicipioUseCase } from "../app/usecase.js"
import { logger } from "../log/logger.js"

export const router = Router()

router.post("/", async (req, res) => {
  logger.info(`POST /search request.body: ${JSON.stringify(req.body, null, 2)}`)
  const { polygon } = req.body

  const useCase = await getMunicipioUseCase()
  const matchedResults = await useCase.searchMunicipiosWithinPolygon(polygon)

  logger.info(`POST /search response: ${matchedResults}`)
  return res.status(200).json(matchedResults)
})
