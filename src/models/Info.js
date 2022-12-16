export default class UserInfo {
  constructor(data) {
    this.data = { ...data, todayScore: data.todayScore || data.score };
  }
}
