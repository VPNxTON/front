export async function addNewServer(token:string,data){
    return await useFetch('https://vpnxton.def.team/api/servers/request',{
        method: 'POST',
        body:data,
        headers:{
            'Authorization':token
        }
    })
}
