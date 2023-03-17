export async function connectToServer(address:string,token){
    return await useFetch(`https://vpnxton.def.team/api/servers/${address}/connect`,{
        method: 'GET',
        headers:{
            'Authorization':token
        }
    })
}
