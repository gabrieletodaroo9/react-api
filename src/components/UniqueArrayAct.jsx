import ActCard from "./ActCard"

export default function UniqueArrayAct({ uniqueArray }) {


    const uniqueArrayFinal = uniqueArray.map((act, index) => ({
        ...act, id: index + 1
    }))

    return (
        <div className="container py-5">
            <div className="row g-5">
                {uniqueArrayFinal.map(act => (
                    <ActCard key={act.id} act={act} />
                ))
                }
            </div>
        </div>
    )
}