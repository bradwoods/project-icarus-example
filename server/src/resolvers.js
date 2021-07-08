const resolvers = {
  Query: {
    characters: (_, __, { dataSources }) => dataSources.starWarsAPI.getCharacters(),
    character: (_, { id }, { dataSources }) => dataSources.starWarsAPI.getCharacter(id),
  },

  Mutation: {
    updateCharacter: (_, { id, data }, { dataSources }) => dataSources.starWarsAPI.updateCharacter(id, data),
  },

  Character: {
    droids: ({ id }, _, { dataSources }) => dataSources.starWarsAPI.getCharacterDroids(id),
  },
};

module.exports = resolvers;
