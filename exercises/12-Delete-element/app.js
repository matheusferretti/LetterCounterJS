var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let people2 = [ ];

    for(let i = 0; i < people.length; i++){
        
    if(people[i] !== personName){
        people2.push(people[i]);
    }
}
    return people2;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));