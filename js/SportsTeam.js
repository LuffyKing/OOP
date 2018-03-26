/**
 * A class that serves as the super class for sports teams
 */
class SportsTeam {
  /**
 * Takes in the the name , number of players, stadium stadiumLocation
 * city, country and the gender
 * @param {Object} sportInfo objec the team
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

  payPlayers(){
    this.players.forEach(player=> player.isPaid=true)
  }



  changeLocation(newLocation, city, country){
    this.stadiumLocation = newLocation;
    this.city = city || this.city;
    this.country = country || this.country;
  }

  changeName(name) {
    this.name = name;
  }
}
export default SportsTeam;
