import ActorCard from "./ActorCard"

export default function Main({ actorsList }) {

    return (
        <main>
            <div className="container py-5">
                <div className="row g-5">
                    {actorsList.map(actor => (
                        <ActorCard actor={actor} />
                    ))
                    }
                </div>
            </div>
        </main>
    )
}