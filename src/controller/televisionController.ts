import { Request, Response } from "express";
import { CMSClients } from "../clients/cms_clients";

export class TelevisionsController{
    private client: CMSClients
    constructor(client:CMSClients){
        this.client = client
    }

    public async getTelevisions(req:Request, res:Response){
        const data = await this.client.getTelevisions();
        res.send(data.data);
    }

    public async getTelevision(req:Request, res:Response){
        const id = +req.params.id
        const data = await this.client.getTelevision(id)
        res.send(data.data)
    }

    public async deleteTelevision(req:Request, res:Response){
        const id = +req.params.id
        try{
            await this.client.deleteTelevision(id)
            res.sendStatus(200)
        } catch {
            res.sendStatus(500)
        }
    }

    public async addTelevision (req:Request, res:Response){
        const {name, description, manefacturer, price, screen_size} = req.body

        try{
            this.client.addTelevision(
                name,
                description,
                manefacturer,
                price,
                screen_size
            );
            res.send("TV tillagd")
        } catch{
            res.send("nåt gick fel")
        }
    }

    public async updateTelevision(req:Request, res:Response){
        const id = +req.params.id
        const {name, description, manefacturer, price, screen_size} = req.body;

        try{
            this.client.updateTelevision(
                id,
                name,
                description,
                manefacturer,
                price,
                screen_size
            );
            res.send("TV uppdaterad")
        } catch{
            res.send("nåt gick fel")
        }
    }
}