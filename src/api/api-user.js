const URL = 'http://localhost:3000/user';

export class ApiUser {
  static async getUser(userId) {
    const response = await fetch(`${URL}/${userId}`);
    const user = await response.json();
    return user.data;
  }

  static async getActivity(userId) {
    const response = await fetch(`${URL}/${userId}/activity`);
    const activity = await response.json();
    return activity.data;
  }

  static async getSessions(userId) {
    const response = await fetch(`${URL}/${userId}/average-sessions`);
    const sessions = await response.json();
    return sessions.data;
  }

  static async getPerformance(userId) {
    const response = await fetch(`${URL}/${userId}/performance`);
    const performance = await response.json();
    return performance.data;
  }
}
