import Activity from "../models/Activity";
import AverageSessions from "../models/AverageSessions";
import Performance from "../models/Performance";

async function getInfo(id) {
  const result = await fetch(
    `http://${process.env.REACT_APP_BASE_PATH}/user/${id}`
  );
  const data = await result.json();

  return data.data;
}

async function getPerformance(id) {
  const result = await fetch(
    `http://${process.env.REACT_APP_BASE_PATH}/user/${id}/performance`
  );
  const data = await result.json();

  return new Performance(data.data);
}

async function getActivity(id) {
  const result = await fetch(
    `http://${process.env.REACT_APP_BASE_PATH}/user/${id}/activity`
  );
  const data = await result.json();

  return new Activity(data.data);
}

async function getAverageSessions(id) {
  const result = await fetch(
    `http://${process.env.REACT_APP_BASE_PATH}/user/${id}/average-sessions`
  );
  const data = await result.json();

  return new AverageSessions(data.data);
}

export { getInfo, getActivity, getAverageSessions, getPerformance };
