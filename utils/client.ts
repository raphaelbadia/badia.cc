export const client = (endpoint, customConfig = {}) => {
  const config = {
    method: 'GET',
    ...customConfig,
  };
  return window.fetch(`/api/${endpoint}`, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return Promise.reject(data);
  });
};
