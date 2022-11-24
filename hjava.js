
//**commet**
document.write('Hello woeld')
console.log('Hello world from console')
let name = 'min'
document.write(name)
console.log(name)
name = 'Max';
console.log(name)
//cont vartable
const PI = 3.14;
console.log(PI);
//array
const colors =['red','green',1];
console.warn(colors);
console.log(colors[1])
console.table(colors[0])
console.error(1)
// boolean
const isadmin = true;
const isuser = !isadmin;
const isanonymus = !! isuser;
console.log(isadmin);
console.log(isuser);
console.log(isanonymus);
//objt
const person = {
    name : 'yoyo',
    phoe : '22036156',
    adderess : {
        village : 'phonpapao',
        district : 'sisattanad',
        provives : 'vietiance'
    },
    social: ['facebook', 'youbute']
}
console.log(person.name)
console.warn(person.phoe)
console.log(person.social[0])
//how to create funtion
//test fetch data
async function getApi(){
    try{
        const url = 'https://api.publicapis.org/entries'
        const req = await fetch(irl,{method : 'GET'})
        console.log(req)
        const res = await req.json()
        console.log(res.count)
        for (const item of res.entries){
            document.writeln(item.category)
        }
    }catch(error){
        console.error(error)
    }
}
getApi()