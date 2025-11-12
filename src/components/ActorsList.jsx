import ActorCard from "./ActorCard"

export default function ActorList({ actorsList }) {

    return (
        <div className="container py-5">
            <div className="row g-5">
                {actorsList.map(actor => (
                    <ActorCard key={actor.id} actor={actor} />
                ))
                }
            </div>
        </div>
    )
}