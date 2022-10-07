import Performance from "../models/Performance";

async function fetchData() {
  const result = await fetch(`/mock.json`);
  const data = await result.json();
  return data;
}

async function getInfo(id) {
  const data = await fetchData();
  const userInfos = data.userInfos.find((info) => info.data.id === id);
  if (!userInfos) {
    throw Error("user not found");
  }

  return userInfos.data;
}

async function getPerformance(id) {
  const data = await fetchData();
  const performance = data.performance.find(
    (performance) => performance.data.userId === id
  );

  if (!performance) {
    throw Error("user not found");
  }

  return new Performance(performance.data);
}

async function getActivity(id) {
  const data = await fetchData();
  const activity = data.activity.find(
    (currentActivity) => currentActivity.data.userId === id
  );
  if (!activity) {
    throw Error("user not found");
  }

  return activity.data;
}

async function getAverageSessions(id) {
  const data = await fetchData();
  const averageSessions = data.averageSessions.find(
    (session) => session.data.userId === id
  );
  if (!averageSessions) {
    throw Error("user not found");
  }

  return averageSessions.data;
}

export { getInfo, getActivity, getAverageSessions, getPerformance };
