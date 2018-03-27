import SportTeam from './SportsTeam';

/**
 * A class that serves as the class for footbal teams
 */
class FootballTeam extends SportTeam {
  /**
 * Takes in the the sportInfo object
 * @param {Object} sportInfo object conataining the info of the team
 */
  constructor(sportInfo) {
    super(sportInfo);
    this.formation = sportInfo.formation;
    this.styleOfPlay = sportInfo.styleOfPlay;
    this.bonus = sportInfo.bonus;
  }
  /**
 * Pays players based on bonuses unique to football
 * @return {undefined} sportInfo objec the team
 */
  payPlayers() {
    this.players.forEach((player) => {
      player.amount = player.baseSalary * ((this.bonus.scoring + this.bonus.tackling) + 1);
    });
  }
}
