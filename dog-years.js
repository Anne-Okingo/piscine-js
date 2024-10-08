
const orbital = {
    earth : 1.0,
    mercury : 0.2408467,
    venus : 0.61519726,
    mars : 1.8808158,
    jupiter : 11.862615,
    saturn : 29.447498,
    uranus : 84.016846,
    neptune : 164.79132,
};
function dogYears(planet,ageInSec){
const OrbitalEarthSecond = 31557600;
const YearsOnEarth = ageInSec / OrbitalEarthSecond;

const PlanetOrbitalYears = YearsOnEarth / orbital[planet];
const dogYearsPlanet = PlanetOrbitalYears * 7;

return parseFloat(dogYearsPlanet.toFixed(2));
}

console.log(dogYears("mercury",2134835688));