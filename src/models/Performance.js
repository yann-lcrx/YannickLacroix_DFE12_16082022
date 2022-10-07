export default class Performance {
  constructor(data) {
    this.data = [];
    data.data.forEach((performance) => {
      performance.kind = data.kind[performance.kind];
      this.data.push(performance);
    });
  }
}
