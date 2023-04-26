import { Request, Response } from "express";
import { CMSClients } from "../clients/cms_clients";

export class ComputersController{
    private client: CMSClients
    constructor(client:CMSClients){
        this.client = client
    }

    public async getComputers(req:Request, res:Response){
        const data = await this.client.getComputers();
        res.send(data.data);
    }

    public async getComputer(req:Request, res:Response){
        const id = +req.params.id
        const data = await this.client.getComputer(id)
        res.send(data.data)
    }

    public async deleteComputer(req:Request, res:Response){
        const id = +req.params.id
        try{
            await this.client.deleteComputer(id)
            res.sendStatus(200)
        } catch {
            res.sendStatus(500)
        }
    }

    public async addComputers (req:Request, res:Response){
        const {name, description, manefacturer, price, processor} = req.body

        try{
            this.client.addComputers(
                name,
                description,
                manefacturer,
                price,
                processor
            );
            res.send("Dator tillagd")
        } catch{
            res.send("nåt gick fel")
        }
    }

    public async updateComputers(req:Request, res:Response){
        const id = +req.params.id
        const {name, description, manefacturer, price, processor} = req.body;

        try{
            this.client.updateComputers(
                id,
                name,
                description,
                manefacturer,
                price,
                processor
            );
            res.send("Dator uppdaterad")
        } catch{
            res.send("nåt gick fel")
        }
    }
}