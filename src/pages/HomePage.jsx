import {Link} from "react-router-dom";
import {apartments} from "../apartments";

export const HomePage = () =>{
    return <div>
        <h1>Домашняя страница</h1>
        <div style={{display:"flex", flexDirection:"column"}}>
            {apartments.map(apartment => <Link to={`/apartment/${apartment.id}`} key={apartment.id}>{apartment.id}. {apartment.name}</Link>)}
        </div>
    </div>
}