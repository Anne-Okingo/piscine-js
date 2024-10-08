function citiesOnly(array){
return array.map(area => area.city)
}

function upperCasingStates(array){
    return array.map(caps => 
        caps
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    )
  }

function fahrenheitToCelsius(array) {
    return array.map(tempF => {
      const fahrenheitValue = parseInt(tempF)
      const celsiusValue = Math.floor((fahrenheitValue - 32) * 5 / 9)
      return `${celsiusValue}°C`
    })
  }

  function trimTemp(array) {
    return array.map(item => ({
      ...item, 
            temperature: item.temperature.replace(/\s+/g, '') 
    }))
  }

  function tempForecasts(array) {
    return array.map(item => {
            const fahrenheitValue = parseInt(item.temperature);
      const celsiusValue = Math.floor((fahrenheitValue - 32) * 5 / 9);
                  const stateCapitalized = item.state
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
           return `${celsiusValue}°Celsius in ${item.city}, ${stateCapitalized}`;
    });
  }