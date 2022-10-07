const daysOfTheWeek = ["L", "M", "M", "J", "V", "S", "D"];

export default class AverageSessions {
  constructor(data) {
    this.data = [];
    data.sessions.forEach((session, index) => {
      session.day = daysOfTheWeek[index];
      this.data.push(session);
    });
  }
}
