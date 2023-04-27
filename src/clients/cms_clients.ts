import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:1337/api"
});

export class CMSClients {
    constructor() {}

    public async getTelevisions(): Promise<any>{
        const response = await client.get("/televisions")
        return response.data;
    }

    public async getTelevision(id:number): Promise<any>{
        const response = await client.get(`/televisions/${id}`)
        return response.data;
    }

    public async deleteTelevision(id:number): Promise<any>{
        const response = await client.delete(`/televisions/${id}`);
        return response.data;
    }

    public async addTelevision(
        name:string,
        description:string,
        manufacturer:string,
        price:number,
        screen_size:number
    ){
        const addedTelevision = await client.post("/televisions", {
            data:{
                name:name,
                description:description,
                manucaturer:manufacturer,
                price:price,
                screen_size:screen_size
            }
        })
        return addedTelevision
    }

    public async updateTelevision(
        id:number,
        name:string,
        description:string,
        manucaturer:string,
        price:number,
        screen_size:number
    ){
        const updatedTelevisions = await client.put(`/televisions/${id}`, {
            data:{
                name:name,
                description:description,
                manufacturer:manucaturer,
                price:price,
                screen_size:screen_size
            }
        });
        return updatedTelevisions;
    }

    public async getComputers(): Promise<any>{
        const response = await client.get("/computers");
        return response.data;
    }

    public async getComputer(id:number): Promise<any>{
        const response = await client.get(`/computers/${id}`);
        return response.data;
    }

    public async deleteComputer(id:number): Promise<any>{
        const response = await client.delete(`/computers/${id}`);
        return response.data;
    }

    public async addComputers(
        name:string,
        description:string,
        manefacturer:string,
        price:number,
        processor:string
    ){
        const addedComputers = await client.post("/computers",{
            data:{
                name:name,
                description:description,
                manefacturer:manefacturer,
                price:price,
                processor:processor
            }
        })
        return addedComputers;
    }

    public async updateComputers(
        id:number,
        name:string,
        description:string,
        manefacturer:string,
        price:number,
        processor:string
    ){
        const updatedComputers = await client.put(`/computers/${id}`,{
            data:{
                name:name,
                description:description,
                manefacturer:manefacturer,
                price:price,
                processor:processor
            }
        })
        return updatedComputers;
        
    }

    public async getAudios(): Promise<any>{
        const response = await client.get("/audios");
        return response.data;
    }

    public async getAudio(id:number): Promise<any>{
        const response = await client.get(`/audios/${id}`);
        return response.data;
    }

    public async deleteAudio(id:number): Promise<any>{
        const response = await client.delete(`/audios/${id}`);
        return response.data;
    }

    public async addAudio(
        name:string,
        description:string,
        manufacturer:string,
        price:number,
        effect:number
    ){
        const addedAudio = await client.post("/audios",{
            data:{
                name:name,
                description:description,
                manufacturer:manufacturer,
                price:price,
                effect:effect
            }
        })
        return addedAudio;
    }

    public async updateAudio(
        id:number,
        name:string,
        description:string,
        manufacturer:string,
        price:number,
        effect:number
    ){
        const updatedAudio = await client.put(`/audios/${id}`,{
            data:{
                name:name,
                description:description,
                manufacturer:manufacturer,
                price:price,
                effect:effect
            }
        })

        return updatedAudio;

    }

    public async getMobiles(): Promise<any>{
        const response = await client.get("/mobiles");
        return response.data;
    }

    public async getMobile(id:number): Promise<any>{
        const response = await client.get(`/mobiles/${id}`);
        return response.data;
    }

    public async deleteMobile(id:number): Promise<any>{
        const response = await client.delete(`/mobiles/${id}`)
        return response.data;
    }

    public async addMobile(
        name:string,
        description:string,
        manefacturer:string,
        price:number,
        screen_type:number
    ){
        const addedMobile = await client.post("/mobiles",{
            data:{
                name:name,
                description:description,
                manefacturer:manefacturer,
                price:price,
                screen_type:screen_type
            }
        })
        return addedMobile;
    }

    public async updateMobile(
        id:number,
        name:string,
        description:string,
        manefacturer:string,
        price:number,
        screen_type:number
    ){
        const updatedMobile = await client.put(`/mobiles/${id}`,{
            data:{
                name:name,
                description:description,
                manefacturer:manefacturer,
                price:price,
                screen_type:screen_type
            }
        })
        return updatedMobile;
    }
}



