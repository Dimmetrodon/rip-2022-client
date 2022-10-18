export const Apartment = ({apartment}) => {
    return (
        <div>
            <p>{apartment.id}. {apartment.name}</p>
            <p>{apartment.description}</p>
        </div>
    )
}