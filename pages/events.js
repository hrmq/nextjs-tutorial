import { useState } from 'react'

export default function EventList({ eventList }) {
    const [events, setEvents] = useState(eventList)

    const fetchSportEvents = async() => {
        const response = await fetch(`http://localhost:4000/events?category=sports`)
        const data = await response.json()
        setEvents(data)
    }

    return (
        <>
            <button onClick={() => fetchSportEvents()}>Sports Events</button>
            <h1>List of events</h1>
            {
                events.map(event => (
                    <div key={event.id}>
                        <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr />
                    </div>
                ))
            }
        </>
      )
}


export async function getServerSideProps() {
    const response = await fetch(`http://localhost:4000/events`)
    const data = await response.json()

    return {
        props: {
            eventList: data
        }
    }
}