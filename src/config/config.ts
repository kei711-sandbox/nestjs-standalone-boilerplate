type Config = {
  port: number;
  nodeEnv: string;
};

const config: () => Config = () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  nodeEnv: process.env.NODE_ENV ?? 'local',
});

export default config;
