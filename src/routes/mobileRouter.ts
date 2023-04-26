import express from "express"
import { CMSClients } from "../clients/cms_clients"
import { MobileController } from "../controller/mobileController";

const client = new CMSClients()
const controller = new MobileController(client)

const mobileRouter = express.Router()

mobileRouter.get("/", controller.getMobiles.bind(controller))
    .get("/:id", controller.getMobile.bind(controller))
    .delete("/:id", controller.deleteMobile.bind(controller))
    .put("/:id", controller.updateMobile.bind(controller))
    .post("/", controller.addMobile.bind(controller))

    export default mobileRouter;