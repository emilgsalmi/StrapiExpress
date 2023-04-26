import express from "express";
import { CMSClients } from "../clients/cms_clients";
import { AudiosController } from "../controller/audioController";

const client = new CMSClients();
const controller = new AudiosController(client)

const audioRouter = express.Router()

audioRouter.get("/", controller.getAudios.bind(controller))
    .get("/:id", controller.getAudio.bind(controller))
    .delete("/:id", controller.deleteAudio.bind(controller))
    .put("/:id", controller.updateAudio.bind(controller))
    .post("/", controller.addAudio.bind(controller))

    export default audioRouter;