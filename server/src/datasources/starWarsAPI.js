const { RESTDataSource } = require("apollo-datasource-rest");

class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://127.0.0.1:7000/`;
  }

  getCharacters() {
    return this.get(`characters`);
  }

  getCharacter(id) {
    return this.get(`character/${id}`);
  }

  getCharacterDroids(id) {
    return this.get(`character/${id}/droids`);
  }

  updateCharacter(id, data) {
    return this.post(`character/${id}`, data);
  }
}

module.exports = StarWarsAPI;
