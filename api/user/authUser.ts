import {useMyFetch} from "~/api/apiInstance";

export async function userAuth(wallet:string){
    return await useFetch('https://vpnxton.def.team/api/auth',{
        method: 'POST',
        body:{
            wallet
        }
    })
}
