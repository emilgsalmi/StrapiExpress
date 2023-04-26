import express from "express";
import { CMSClients } from "../clients/cms_clients";
import { ComputersController } from "../controller/computerController";

const client = new CMSClients();
const controller = new ComputersController(client)

const computerRouter = express.Router()

computerRouter.get("/", controller.getComputers.bind(controller))
    .get("/:id", controller.getComputer.bind(controller))
    .delete("/:id", controller.deleteComputer.bind(controller))
    .put("/:id", controller.updateComputers.bind(controller))
    .post("/", controller.addComputers.bind(controller))

    export default computerRouter;