export function useMyFetch(request,opts){
    const config = useRuntimeConfig()

    return useFetch(request,{baseUrl: config.public.baseUrl,...opts})
}
