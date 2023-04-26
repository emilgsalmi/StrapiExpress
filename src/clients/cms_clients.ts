import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:1337/api"
});

export class CMSClients {
    constructor() {}

    //* For Televisions
    //? hämtar alla TV apparater
    public async getTelevisions(): Promise<any>{
        const response = await client.get("/televisions")
        return response.data;
    }

    //? hämtar bara en TV
    public async getTelevision(id:number): Promise<any>{
        const response = await client.get(`/televisions/${id}`)
        return response.data;
    }

    //? raderar en TV
    public async deleteTelevision(id:number): Promise<any>{
        const response = await client.delete(`/televisions/${id}`);
        return response.data;
    }

    //? adderar en TV
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

    //? uppdaterar en TVs värde
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

    //* For Computers

    //? hämtar alla datorer
    public async getComputers(): Promise<any>{
        const response = await client.get("/computers");
        return response.data;
    }

    //? hämtar bara en dator
    public async getComputer(id:number): Promise<any>{
        const response = await client.get(`/computers/${id}`);
        return response.data;
    }

    //? raderar en dator
    public async deleteComputer(id:number): Promise<any>{
        const response = await client.delete(`/computers/${id}`);
        return response.data;
    }

    //? adderar en dator
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

    //? uppdaterar en dators värde
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

    //* For Audio Devices

    //? hämtar alla högtalare
    public async getAudios(): Promise<any>{
        const response = await client.get("/audios");
        return response.data;
    }

    //? hämtar bara en högtalare
    public async getAudio(id:number): Promise<any>{
        const response = await client.get(`/audios/${id}`);
        return response.data;
    }

    //? raderar en högtalare
    public async deleteAudio(id:number): Promise<any>{
        const response = await client.delete(`/audios/${id}`);
        return response.data;
    }

    //? adderar en högtalare
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

    //? uppdaterar en högtalares värde  
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

    //* For Mobile Devices
    //? hämtar alla mobiler
    public async getMobiles(): Promise<any>{
        const response = await client.get("/mobiles");
        return response.data;
    }
    //? hämtar bara en mobil
    public async getMobile(id:number): Promise<any>{
        const response = await client.get(`/mobiles/${id}`);
        return response.data;
    }
    //? raderar en mobil
    public async deleteMobile(id:number): Promise<any>{
        const response = await client.delete(`/mobiles/${id}`)
        return response.data;
    }

    //? adderar en mobil till databasen
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

    //? uppdaterar värdet på en mobil
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



