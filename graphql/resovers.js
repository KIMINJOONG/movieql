const kim = {
    name : "inJoong",
    age: 24,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => kim
    }
};

export default resolvers;