module.exports = {
  remainingDays(job) {
    const remaining_days = (job["total-hours"] / job["daily-hours"]).toFixed();

    const createdDate = new Date(job["created-at"]);

    const dueDay = createdDate.getDate() + Number(remaining_days);

    const dueDate = createdDate.setDate(dueDay);

    const timeDiff = dueDate - Date.now();

    const dayInMs = 1000 * 60 * 60 * 24;

    const dayDiff = Math.floor(timeDiff / dayInMs);

    return dayDiff;
  },
  calculateBudget(job, valueHour) {
    return valueHour * job["total-hours"];
  },
};
