export const client = (endpoint, customConfig = {}) => {
  const config = {
    method: 'GET',
    ...customConfig,
  };
  return window.fetch(`/api/${endpoint}`, config).then(async (response) => {
    if (response.status === 204) return null;
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return Promise.reject(data);
  });
};

export const paramsToString = (params) =>
  Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
