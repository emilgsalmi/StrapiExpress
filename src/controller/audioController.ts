import { Request, Response } from "express";
import { CMSClients } from "../clients/cms_clients";

export class AudiosController{
    private client: CMSClients
    constructor(client:CMSClients){
        this.client = client
    }

    public async getAudios(req:Request, res:Response){
        const data = await this.client.getAudios();
        res.send(data.data);
    }

    public async getAudio(req:Request, res:Response){
        const id = +req.params.id
        const data = await this.client.getAudio(id)
        res.send(data.data)
    }

    public async deleteAudio(req:Request, res:Response){
        const id = +req.params.id
        try{
            await this.client.deleteAudio(id)
            res.sendStatus(200)
        } catch {
            res.sendStatus(500)
        }
    }

    public async addAudio (req:Request, res:Response){
        const {name, description, manefacturer, price, effect} = req.body

        try{
            this.client.addAudio(
                name,
                description,
                manefacturer,
                price,
                effect
            );
            res.send("Högtalare tillagd")
        } catch{
            res.send("nåt gick fel")
        }
    }

    public async updateAudio(req:Request, res:Response){
        const id = +req.params.id
        const {name, description, manefacturer, price, effect} = req.body;

        try{
            this.client.updateAudio(
                id,
                name,
                description,
                manefacturer,
                price,
                effect
            );
            res.send("Högtalare uppdaterad")
        } catch{
            res.send("nåt gick fel")
        }
    }
}