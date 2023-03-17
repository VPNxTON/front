export async function getUserHistory(token){
    console.log(token)
    return await useFetch('https://vpnxton.def.team/api/session/list',{
        method: 'GET',
        headers:{
            'Authorization':token
        }
    })
}
