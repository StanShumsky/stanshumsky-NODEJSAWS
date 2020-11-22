const {
  PG_HOST,
  PG_PORT,
  PG_DATABASE,
  PG_USERNAME,
  PG_PASSWORD,
  SQS_URL,
  SNS_ARN,
} = process.env;

export const POSTGRES_DB_CONFIG = {
  host: PG_HOST,
  port: Number(PG_PORT),
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
};

export const AWS_CONFIG = {
  region: 'eu-west-1',
  bucket: 'shumsky-s3',
  sqsUrl: SQS_URL,
  snsArn: SNS_ARN,
};
