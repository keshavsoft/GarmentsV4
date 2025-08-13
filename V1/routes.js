import express from 'express';

const router = express.Router();

import { router as routerFromItems } from "./Items/routes.js";

router.use("/Items", routerFromItems);

export { router };