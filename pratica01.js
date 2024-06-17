let usuarios = [{nome: "João", idade: 17, email: "joaozinho@gmail.com"}, 
                {nome: "Maria", idade: 25, email: "pequenamaria@gmail.com"}, 
                {nome: "Leila", idade: 94, email: "oldleila@yahoo.com"}];

console.log("Digite o email:");
process.stdin.on("data", function(data){
    let entrada = data.toString().trim();
    for(let c=0; c<usuarios.length; c++){
        if(usuarios[c].email == entrada){
            console.log(usuarios[c]);
            process.exit();
        }
    }
    console.log("O usuario correspondente ao email digitado não foi encontrado.\n");
    process.exit();
});
