import genres from "../Data/genres";
import useData from "./useData";


export interface Genre{
    id:number
    name:string
    image_backGround : string;
}

const useGenres = () => ({data:genres , error:null , isLoading : false})

export default useGenres;

    