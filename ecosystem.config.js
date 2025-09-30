module.exports = {
    apps: [
      {
        name: "rycb_mainpage",
        script: "npm",
        args: "start",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };