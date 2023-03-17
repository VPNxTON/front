import {useMyFetch} from "~/api/apiInstance";

export async function getServersList(){
    return await useFetch('https://vpnxton.def.team/api/servers',{
        method: 'GET',
    })
}
