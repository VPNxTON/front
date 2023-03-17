export const useServersStore = defineStore('serversStore',()=>{
    const activeServersList = ref([])

    function setServerList(value) {
        activeServersList.value=value
    }

    return{
        activeServersList,
        setServerList
    }
})
