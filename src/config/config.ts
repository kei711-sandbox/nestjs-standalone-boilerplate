type Config = {
  nodeEnv: string;
};

const config: () => Config = () => ({
  nodeEnv: process.env.NODE_ENV ?? 'local',
});

export default config;
