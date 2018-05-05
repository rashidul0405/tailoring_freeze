module.exports = {
  apps: [
    {
      name: "api",
      script: "./packages/api/index.js",
      cwd: "./packages/api",
      instances: "max",
      exec_mode: "cluster",
      //prettier-ignore
      env: {
        "PORT": 5000,
        "NODE_ENV": "production"
      },
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm Z"
    },
    {
      name: "admin",
      script: "./packages/admin/index.js",
      cwd: "./packages/admin",
      instances: "max",
      exec_mode: "cluster",
      //prettier-ignore
      env: {
        "PORT": 5001,
        "NODE_ENV": "production"
      },
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm Z"
    }
  ]
}
