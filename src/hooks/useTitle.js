import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title= `${title} - Kids Sports`;
    },[title])
}

export default useTitle;