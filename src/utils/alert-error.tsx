import toast from "react-hot-toast";

export default function alertError (err:any){
    toast.error(
        (err.response ? err.response.data.message : err.message)||"something went wrong"
        )
}