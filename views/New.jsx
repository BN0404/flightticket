const React = require("react");

function New() {
  return (
    <div>
      <h1> Flight Form</h1>

      <form action="/flight" method="POST">
        Name: <input type="text" name="airline" /> <br />
        {/* Number of Passengers:<input type="number" name="number"/> <br/> */}
        Departure: <input type="date" name="departs" /> <br />
        {/* Arrival:<input type="MMDDYYYY" name="date" />
            <br /> */}
        Flight: <input type="text" name="flightNo" />
        <input type="submit" value="Book your Flight" />
      </form>
    </div>
  );
}

module.exports = New;
