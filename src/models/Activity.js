export default class Activity {
  constructor(data) {
    this.data = [];
    data.sessions.forEach((session, index) => {
      session.day = index + 1;
      this.data.push(session);
    });
  }
}
