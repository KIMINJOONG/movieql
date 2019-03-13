export const people = [
    {
        id: "1",
        name: "injonng",
        age: 18,
        gender: "male"
    },
    {  
        id: "2",
        name: "lee",
        age: 18,
        gender: "male"
    },
    {   
        id: "3",
        name: "kmjonng",
        age: 24,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === people.id);
    return filteredPeople[0];
};