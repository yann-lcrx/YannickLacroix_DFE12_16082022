import Activity from "../models/Activity";
import AverageSessions from "../models/AverageSessions";
import UserInfo from "../models/Info";
import Performance from "../models/Performance";

async function fetchData() {
  const result = await fetch(`/mock.json`);
  const data = await result.json();
  return data;
}

async function getInfo(id) {
  const data = await fetchData();
  const userInfos = data.userInfos.find(
    (info) => info.data.id.toString() === id
  );
  if (!userInfos) {
    throw Error("user not found");
  }

  return new UserInfo(userInfos.data).data;
}

async function getPerformance(id) {
  const data = await fetchData();
  const performance = data.performance.find(
    (performance) => performance.data.userId.toString() === id
  );

  if (!performance) {
    throw Error("user not found");
  }

  return new Performance(performance.data);
}

async function getActivity(id) {
  const data = await fetchData();
  const activity = data.activity.find(
    (currentActivity) => currentActivity.data.userId.toString() === id
  );
  if (!activity) {
    throw Error("user not found");
  }

  return new Activity(activity.data);
}

async function getAverageSessions(id) {
  const data = await fetchData();
  const averageSessions = data.averageSessions.find(
    (session) => session.data.userId.toString() === id
  );
  if (!averageSessions) {
    throw Error("user not found");
  }

  return new AverageSessions(averageSessions.data);
}

export { getInfo, getActivity, getAverageSessions, getPerformance };
