import { RESTDataSource } from "apollo-datasource-rest";
import { UpdateCharacterData } from "../types";

export class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://127.0.0.1:7000/`;
  }

  getCharacters() {
    return this.get(`characters`);
  }

  getCharacter(id: string) {
    return this.get(`character/${id}`);
  }

  getCharacterDroids(id: string) {
    return this.get(`character/${id}/droids`);
  }

  updateCharacter(id: string, data: UpdateCharacterData) {
    return this.post(`character/${id}`, data);
  }
}
