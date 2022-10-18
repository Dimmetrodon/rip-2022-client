import {useParams} from "react-router";
import {Apartment} from "../components/Apartment";

export const ApartmentPage = ({apartments}) =>{
    const {id} = useParams()
    const apartment = apartments.filter(apartment=>apartment.id === +id)
    return (
    apartment[0] ? <Apartment apartment={apartment[0]}/> : <h1>Таких апартаментов не существует:(</h1>)
}