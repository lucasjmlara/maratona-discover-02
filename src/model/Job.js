const Database = require("../db/config");

// let data = [
//   {
//     id: 1,
//     name: "Pizzaria Guloso",
//     "daily-hours": 2,
//     "total-hours": 60,
//     "created-at": Date.now(),
//   },
//   {
//     id: 2,
//     name: "OneTwo Project",
//     "daily-hours": 3,
//     "total-hours": 2,
//     "created-at": Date.now(),
//   },
// ];

module.exports = {
  async get() {
    const db = await Database();

    const jobs = await db.all(`SELECT * FROM jobs`);

    await db.close();

    return jobs.map((job) => ({
      id: job.id,
      name: job.name,
      "daily-hours": job.daily_hours,
      "total-hours": job.total_hours,
      "created-at": job.created_at,
    }));
  },
  async update(updatedJob, jobId) {
    const db = await Database();

    db.run(`UPDATE jobs SET 
      name = "${updatedJob.name}",
      daily_hours = ${updatedJob["daily-hours"]},
      total_hours = ${updatedJob["total-hours"]}
      WHERE id = ${jobId}
    `);

    await db.close();
  },
  async delete(id) {
    const db = await Database();

    await db.run(`DELETE FROM jobs WHERE id = ${id}`);

    await db.close();
  },
  async create(newJobs) {
    const db = await Database();

    await db.run(`
      INSERT INTO jobs (name, daily_hours, total_hours, created_at)
      VALUES ("${newJobs.name}", ${newJobs["daily-hours"]}, ${newJobs["total-hours"]}, ${newJobs["created-at"]})
    `);

    await db.close();
  },
};
