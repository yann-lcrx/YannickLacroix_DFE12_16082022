const performanceKinds = [
  "Cardio",
  "Energie",
  "Endurance",
  "Force",
  "Vitesse",
  "Intensite",
];

export default class Performance {
  constructor(data) {
    this.data = [];
    data.data.forEach((performance) => {
      performance.kind = performanceKinds[performance.kind - 1];
      this.data.push(performance);
    });
  }
}
