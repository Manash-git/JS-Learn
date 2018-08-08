const name="Manash Mondal";
const age=25;
const email="emailatmanash@gmail.com";

const details='Name: '+name+ ' Age: '+age+' Email: '+email;

/**
 *  Template String use for the above thing doing in a different way
 * BackTik ( `` ) is used for that purpose 
 * ${} - is used for retrieving value of variable
 * 
 */

const tempStr= ` 
 Name: ${name} 
 Age: ${age}
 Email: ${email}
`;

console.log(details);
console.log("\nTemplate String \n*******************************");
console.log(tempStr);

