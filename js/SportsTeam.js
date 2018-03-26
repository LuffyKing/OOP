/**
 * A class that serves as the super class for sports teams
 */
class SportsTeam {
  /**
 * Takes in the the name , number of players, stadium stadiumLocation
 * city, country and the gender
 * @param {Object} sportInfo object contaning all on the team the team
 */
  constructor({
    name,
    players,
    stadiumLocation,
    city,
    country,
    gender,
    govBody
  }) {
    this.name = name;
    this.stadiumLocation = stadiumLocation;
    this.city = city;
    this.country = country;
    this.gender = gender;
    this.govBody = govBody;
    this.players = players;
  }
  /**
 * Pays players that on the team
 * @return {undefined}
 */
  payPlayers() {
    this.players.forEach((player) => {
      player.isPaid = true;
    });
  }
  /**
 * Changes location of a team
 * @param{String} newLocation new location in the city
 * @param{String} city new city location in the country
 * @param{String} country new country location in the world
 * @return {undefined}
 */
  changeLocation(newLocation, city, country) {
    this.stadiumLocation = newLocation;
    this.city = city || this.city;
    this.country = country || this.country;
  }
  /**
 * Changes location of a team
 * @param{String} name the new name of the team
 * @return {undefined}
 */
  changeName(name) {
    this.name = name;
  }
}
export default SportsTeam;
