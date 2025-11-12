export default function ActCard({ act }) {

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100">
                <img src={act.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{act.name}</h5>
                    <p className="card-text">{act.biography}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Birth year: </strong>{act.birth_year}</li>
                    <li className="list-group-item"><strong>Nationality: </strong>{act.nationality}</li>
                    <li className="list-group-item"><strong>Awards: </strong>{Array.isArray(act.awards) ? act.awards.join(", ") : act.awards}</li>
                </ul>
            </div>
        </div>
    )
}