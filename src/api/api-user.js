export class ApiUser {
  static async fetchUser(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    const user = await response.json();
    return user.data;
  }

  static async getActivity(userId) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    const activity = await response.json();
    return activity;
  }

  static async getSessions(userId) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    const sessions = await response.json();
    return sessions;
  }

  static async getPerformance(userId) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    const performance = await response.json();
    return performance;
  }
}
