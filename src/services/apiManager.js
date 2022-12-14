import Activity from "../models/Activity";
import AverageSessions from "../models/AverageSessions";
import Performance from "../models/Performance";

/**
 * Returns basic user data from API
 * @param {string} id
 * @returns {object} containing user id, information, daily score and key data
 */
async function getInfo(id) {
  const result = await fetch(
    `http://${process.env.REACT_APP_API_PATH}/user/${id}`
  );
  const data = await result.json();

  return data.data;
}

/**
 * Returns user performance data from API
 * @param {string} id
 * @returns {object} containing user performance according to five criteria
 */
async function getPerformance(id) {
  const result = await fetch(
    `http://${process.env.REACT_APP_API_PATH}/user/${id}/performance`
  );
  const data = await result.json();

  return new Performance(data.data);
}

/**
 *
 * @param {string} id
 * @returns {object} containing info about user's daily activity
 */
async function getActivity(id) {
  const result = await fetch(
    `http://${process.env.REACT_APP_API_PATH}/user/${id}/activity`
  );
  const data = await result.json();

  return new Activity(data.data);
}

/**
 *
 * @param {string} id
 * @returns {object} containing average session duration per weekday
 */
async function getAverageSessions(id) {
  const result = await fetch(
    `http://${process.env.REACT_APP_API_PATH}/user/${id}/average-sessions`
  );
  const data = await result.json();

  return new AverageSessions(data.data);
}

export { getInfo, getActivity, getAverageSessions, getPerformance };
