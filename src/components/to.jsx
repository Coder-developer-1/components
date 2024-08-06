import { useState } from "react"

const To = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [cards, setCards] = useState([])

    const handleSubmit = () => {
        const newCard = { title, description };
        setCards([...cards, newCard]);
        setTitle('');
        setDescription('');
    }

    return(
        <>
        <div>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1794198124. */}
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:814570889. */}
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        </div>

        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>

        <div>
            {cards.map((card, index) => (
                <div key={index}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default To