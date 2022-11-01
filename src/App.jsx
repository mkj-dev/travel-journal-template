import Header from './components/Header'
import Journal from './components/Journal'
import journeyData from './data'

function App() {
    const places = journeyData.map(place => {
        return (
            <Journal 
                key={place.id}
                {...place}
            />
        )
    })

    return (
        <>
            <Header />
            {places}
        </>
    )
}

export default App
