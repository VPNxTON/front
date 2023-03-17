export const useUserStore = defineStore('userStore',()=>{
    const token = ref( localStorage.getItem('userToken'))
    const userToken = ref(token)

    function setUserToken(value) {
        token.value=value
        localStorage.setItem('userToken',value)
    }
    function removeToken(){
        token.value=null
        localStorage.removeItem('userToken')
    }
    const activeServersList = ref([])

    function setServerList(value) {
        activeServersList.value=value
    }

    const userHistoryList = ref([])

    function setUserHistoryList(value) {
        userHistoryList.value=value
    }

    return{
        setUserHistoryList,
        userHistoryList,
        activeServersList,
        setServerList,
        userToken,
        setUserToken,
        removeToken
    }
})
