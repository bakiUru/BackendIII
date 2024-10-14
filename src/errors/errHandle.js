import { logger } from "../utils/logger.js";

export const errorHandle = (err, req, res, next) => {
  logger.error(err.message)
  const status = err.status || 500;
  const message = status === 500 ? "Internal server error" : err.message ;

  res.status(status).json({ status: "error", error: message });
};
