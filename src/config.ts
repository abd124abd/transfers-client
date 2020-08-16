import {Secret} from 'jsonwebtoken';

interface Config {
  JWT_SECRET: Secret;
};

const config: Config = {
  JWT_SECRET: process.env.REACT_APP_JWT_SECRET || 'secret',
};

export default config;
