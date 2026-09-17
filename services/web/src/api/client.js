export const api = {
  async getPortfolio() {
    const response = await fetch(`${import.meta.env.BASE_URL}portfolio.json`, { headers: { Accept: 'application/json' } });
    if (!response.ok) {
      throw new Error(`Portfolio request failed with status ${response.status}`);
    }
    return response.json();
  },
};
