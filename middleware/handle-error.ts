import { ErrorRequestHandler, Handler, NextFunction } from "express"

export const handleError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(500).json({
      message: err.message,
    })
  }

  return res.status(500).json({
    message: "Internal server error",
  })
}
