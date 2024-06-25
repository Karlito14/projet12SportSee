/**
 * @file Fichier de la class API utilisateur
 * @author Carlos Leiroz
 */

/**
 * URL de l'api
 * @constant {string}
 */
const URL = 'http://localhost:3000/user';

/**
 * Class pour l'API utilisateur
 */
export class ApiUser {
  /**
   * @property {Function} getUser Récupère les infos de l'utilisateur
   * @param {number} userId ID de l'utilisateur
   * @returns object
   */
  static async getUser(userId) {
    const response = await fetch(`${URL}/${userId}`);
    const user = await response.json();
    return user.data;
  }

  /**
   * @property {Function} getActivity Récupère les activités quotidienne de l'utilisateur
   * @param {number} userId ID de l'utilisateur
   * @returns object
   */
  static async getActivity(userId) {
    const response = await fetch(`${URL}/${userId}/activity`);
    const activity = await response.json();
    return activity.data;
  }

  /**
   * @property {Function} getSessions Récupère la durée des sessions de l'utilisateur
   * @param {number} userId ID de l'utilisateur
   * @returns object
   */
  static async getSessions(userId) {
    const response = await fetch(`${URL}/${userId}/average-sessions`);
    const sessions = await response.json();
    return sessions.data;
  }

  /**
   * @property {Function} getPerformance Récupère les performances de l'utilisateur
   * @param {number} userId ID de l'utilisateur
   * @returns object
   */
  static async getPerformance(userId) {
    const response = await fetch(`${URL}/${userId}/performance`);
    const performance = await response.json();
    return performance.data;
  }

  static async getGender(name) {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6435883dc3mshf8c8f2fcbc0b9b4p10b01djsnef4b42685af4',
        'x-rapidapi-host': 'genderify3.p.rapidapi.com',
      },
    };

    const response = await fetch(
      `https://genderify3.p.rapidapi.com/genderify?text=${name}`,
      options
    );
    const result = await response.json();
    return result;
  }
}
