import 'dotenv/config';
import signale from 'signale';

const config = {
  EXAMPLE_KEY: process.env.EXAMPLE_KEY as string,
  PORT: process.env.PORT as string,
};

for (const key in config) {
  if (!config[key as keyof typeof config]) {
    signale.fatal(`Missing ${key} in .env`);
    process.exit(1);
  }
}

export default config;
