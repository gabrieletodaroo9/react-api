export default function ActressCard({ actress }) {

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100">
                <img src={actress.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{actress.name}</h5>
                    <p className="card-text">{actress.biography}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Birth year: </strong>{actress.birth_year}</li>
                    <li className="list-group-item"><strong>Nationality: </strong>{actress.nationality}</li>
                    <li className="list-group-item"><strong>Awards: </strong>{actress.awards}</li>
                </ul>
            </div>
        </div>
    )
}