import express from "express";
import { CMSClients } from "../clients/cms_clients";
import { TelevisionsController } from "../controller/televisionController";

const client = new CMSClients();
const controller = new TelevisionsController(client)

const televisionRouter = express.Router()

televisionRouter.get("/", controller.getTelevisions.bind(controller))
    .get("/:id", controller.getTelevision.bind(controller))
    .delete("/:id", controller.deleteTelevision.bind(controller))
    .put("/:id", controller.updateTelevision.bind(controller))
    .post("/", controller.addTelevision.bind(controller))

    export default televisionRouter;