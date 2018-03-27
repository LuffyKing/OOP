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
  }
  /**
 * It sets the formation of the team via the setter
 * @param {String} newFormation The string containing the new formation of the team
 */
  set formation(newFormation) {
    const hasFormation = !!newFormation;
    if (hasFormation) {
      this.formation = newFormation;
    }
  }
  /**
 * It gets the formation of the team via the getter
 * @returns {String} formation the string containing the formation of the team
 */
  get formation() {
    return this.formation;
  }
  /**
 * It gets the style of play of the team via the getter
 * @returns {String} formation the string containing the formation of the team
 */
  get styleOfPlay() {
    return this.styleOfPlay;
  }
  /**
 * It sets the style of play of the team via the setter
 * @param {String} newStyleOfplay the string containing the new style of play of the team
 */
  set style(newStyleOfplay) {
    const hasStyleOfPlay = !!newStyleOfplay;
    if (hasStyleOfPlay) {
      this.styleOfPlay = newStyleOfplay;
    }
  }
}
