// 1-  Bring express Here
const express = require("express")
const { faker } = require('@faker-js/faker');

// - DEFINE THE PORT AS GLOBAL VARIABLE
const PORT = 8000
const app = express()
/* 
2- invoke the function express (execute the function express) 
and save the return in variable called app 
*/

    const createUser = () => {
        const newFake = {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            lastName: faker.person.lastName(),
            firstName: faker.person.firstName(),
            _id: faker.string.uuid()
        };
        return newFake;
    };
    const createCompany = () => {
        const newFake = {
            _id: faker.string.uuid(),
            name: faker.company.name(),
            address :{
                street: faker.location.street(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipCode: faker.location.zipCode(),
                country: faker.location.country()
            }
        };
        return newFake;
    };

const newfakeCompany = JSON.stringify(createCompany())
const newFakeUser = JSON.stringify(createUser());
console.log(`
    *******New User : ${newFakeUser}******* 
    *******New Company ${newfakeCompany}*******`
);

app.get("/api/users/new",(req,res) => {
    res.json(createUser())
})
app.get("/api/companies/new",(req,res) => {
    res.json(createCompany())
})
app.get("/api/user/company",(req,res) => {
    const user = createUser()
    const company = createCompany()
    res.json({user,company})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});