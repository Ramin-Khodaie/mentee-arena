import axiosHandler from "../config/axios"
import { urls } from "../constant/urls"

export const getCharacters = (page: any) => {    
    return axiosHandler.get(urls.character.replace("{page}", page)).then((res) => res.data).catch((err) => console.log(err))
}