
export default function Location( locations ) {

 //   console.log(locations.location.city);
    return (
        <div className="location">
            <p>{locations.location.city}</p>
            <p>{locations.location.state} - {locations.location.country}</p>

        </div>
    )
}