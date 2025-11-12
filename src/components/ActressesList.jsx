import ActressCard from "./ActressCard"

export default function ActressesList({ actressesList }) {

    return (
        <div className="container py-5">
            <div className="row g-5">
                {actressesList.map(actress => (
                    <ActressCard key={actress.id} actress={actress} />
                ))
                }
            </div>
        </div>
    )
}