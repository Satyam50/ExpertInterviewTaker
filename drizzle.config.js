/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:QnNIKs3RUz7q@ep-quiet-bar-a5a748rf.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };