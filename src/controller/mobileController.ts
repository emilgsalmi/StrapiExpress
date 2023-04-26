import { Request, Response } from "express";
import { CMSClients } from "../clients/cms_clients";

export class MobileController{
    private client: CMSClients
    constructor(client:CMSClients){
        this.client = client
    }

    public async getMobiles(req:Request, res:Response){
        const data = await this.client.getMobiles();
        res.send(data.data);
    }

    public async getMobile(req:Request, res:Response){
        const id = +req.params.id
        const data = await this.client.getMobile(id)
        res.send(data.data)
    }

    public async deleteMobile(req:Request, res:Response){
        const id = +req.params.id
        try{
            await this.client.deleteMobile(id)
            res.sendStatus(200)
        } catch {
            res.sendStatus(500)
        }
    }

    public async addMobile (req:Request, res:Response){
        const {name, description, manefacturer, price, screen_type} = req.body

        try{
            this.client.addMobile(
                name,
                description,
                manefacturer,
                price,
                screen_type
            );
            res.send("Mobil tillagd")
        } catch{
            res.send("nåt gick fel")
        }
    }

    public async updateMobile(req:Request, res:Response){
        const id = +req.params.id
        const {name, description, manefacturer, price, screen_type} = req.body;

        try{
            this.client.updateMobile(
                id,
                name,
                description,
                manefacturer,
                price,
                screen_type
            );
            res.send("Mobil uppdaterad")
        } catch{
            res.send("nåt gick fel")
        }
    }
}