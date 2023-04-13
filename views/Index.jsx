const React = require('react')

function Index(props) {
    const { flights } = props;

    return (
        <div> 
             <nav>
        <a href="/flightform">Book a new Flight</a>
      </nav>
            <h1> Flight Details </h1>
            {flights.map((flight, i) => {
                return (
                    <div key={flight._id} >
                     <p>   flight= {flight.airline}</p>
                     <p>   flightNumber= {flight.flightNo} </p>
                     <p>   Date = {Date(flight.departs)}</p>
                    
                        </div>
                    )
            })}
        </div>
        
        )
}

module.exports = Index;
