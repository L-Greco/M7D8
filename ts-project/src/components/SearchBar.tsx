import {useState} from "react"
import { Spinner } from "react-bootstrap"
import QueryList from "./QueryList"
import {fetchedDataSuperBigObject} from "../types/interfaces"


const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

// interface ObjWithName { 
//     name: string 
// }

const SearchBar = function () {
    const [query,setQuery] = useState("")
    const [Loading,setLoading] = useState(false)
    const [data,setData] = useState<fetchedDataSuperBigObject[]>([])
    // const [data,setData] = useState<ObjWithName  | null>(null)
    // the commented lines are to actually show if we use 
    const handleEnter = async function () {
        try {
            setLoading(true)
        let res = await fetch(endpoint+query)
        if (res.ok) {
            let result = await res.json()
            setLoading(false)
            setData(result.data)
            console.log(data)
        }
         else  {
            setLoading(false)
             alert("Something went wrong.   Status :  "+res.status)
         }
        } catch (error) {
            setLoading(false)
            console.log(error);
            
        }
    }

    return (
        <>
        <h1>Turn it On!</h1>
        <div style={{ display: "flex", alignItems: "flex-end" }} className="mt-3">
        <input
          className="form-control mt-3 "
          type="search"
          style={{ fontFamily: '"Indie Flower" !important' }}
          placeholder="Type your query..."
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "NumpadEnter") {
              handleEnter();
            }
          }}
        ></input>
        <button
          className="btn btn-outline-info px-4"
          onClick={() => {
            handleEnter();
          }}
        >
          Go!
        </button>
       
      </div>
      {Loading && <Spinner className="mt-3" animation="border" variant="info" />}
      <QueryList tracks={data} />
          </>
    )
}


export default SearchBar