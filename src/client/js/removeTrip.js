/* Function called by event listener */
function removeTrip() {
    // get user input values
    localStorage.clear()
    document.getElementById('highT').innerHTML = "";
    document.getElementById('lowT').innerHTML = "";
    return document.getElementById('lowT').innerHTML
  }

  export {removeTrip}