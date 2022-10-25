import {useParams} from "react-router";
import {Apartment} from "../components/Apartment";
import {Link} from "react-router-dom";

export const ApartmentPage = (props) =>{
    const {id} = useParams()
    const apartment = props.apartments.filter(apartment=>apartment.id === +id)
    return (
    apartment[0] ?
        <div>
            <Link to="/">Главная</Link>/<Link to={`/apartment/${apartment[0].id}`}>{apartment[0].name}</Link>
            <Apartment apartment={apartment[0]}/>
        </div>:
        <h1>Таких апартаментов не существует:(</h1>)
}