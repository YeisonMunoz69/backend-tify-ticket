const api = {
  quotaApi: {
    uri: process.env.QUOTAS_API_URI || '',
    user: process.env.QUOTAS_USER || '',
    password: process.env.QUOTAS_PASS || '',
  },
};

export { api };
