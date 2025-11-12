import ActorsList from "./ActorsList"
import ActressesList from "./ActressesList"

export default function Main({ actorsList, actressesList }) {

    return (
        <main>
            <ActorsList actorsList={actorsList} />
            <ActressesList actressesList={actressesList} />
        </main>
    )
}