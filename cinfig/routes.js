import { Router } from "express";
import infoController from "../Controller/infoController.js"

const router = new Router()

router.get('/info',infoController.index)
/* router.post('/info',infoController.store) */
/*router.get('/info:id',infoController.details)*/
export default router