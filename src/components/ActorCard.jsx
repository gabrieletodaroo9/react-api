export default function ActorCard({ actor }) {

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100">
                <img src={actor.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{actor.name}</h5>
                    <p className="card-text">{actor.biography}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Birth year: </strong>{actor.birth_year}</li>
                    <li className="list-group-item"><strong>Nationality: </strong>{actor.nationality}</li>
                    <li className="list-group-item"><strong>Awards: </strong>{actor.awards.join(", ")}</li>
                </ul>
            </div>
        </div>
    )
}