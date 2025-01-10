//object - used to store data in the of key and value pair

var firstName = "noor";
const obj1 = { firstName, age: 29, address: "Ramanagaram", nationality: "Indian" };
console.log("obj1", obj1.firstName, obj1.age, obj1.address, obj1.nationality); //dot operator

//
const obj2 = { obj: { firstName, age: 29, address: "Ramanagaram", nationality: "Indian" } }
console.log("obj2",obj2.obj.address)

//
const obj3 = { subject: function abc() {
    return "object function example"
    }, 
    obj: { firstName, age: 29, address: "Ramanagaram", nationality: "Indian" }
}