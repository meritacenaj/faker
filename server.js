const express = require("express");
var faker = require('./node_modules/faker');
const app = express();
const port = 8000;
app.listen( port, () => console.log(`Listening on port: ${port}`) );
    
// req is shorthand for request
// res is shorthand for response

const createUser = () => {
    const newFake = {
        id: faker.random.uuid(),
        firtname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        phonenumber: faker.phone.phoneNumber(),
        password: faker.internet.password(),
    };
    return newFake;
};


// console.log(newFakeUser);
app.get("/api/Users/new", (req, res) => {
    const newFakeUser= createUser();
    res.json({ newFakeUser });
});  

const createCompany = () => {
    const newFake = {
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
                  
    };
    return newFake;
};
    

app.get("/api/companyes/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json({ newFakeCompany });
});  

