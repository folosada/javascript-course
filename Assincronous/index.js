function test1() {
    alert("First message");
    $.get("https://viacep.com.br/ws/89050130/json/", (cep) => {
        alert("Second message");        
        alert("CEP: " + cep.cep + "\n" +
              "Logradouro: " + cep.logradouro + "\n" +
              "Bairro: " + cep.bairro + "\n" +
              "Localidade: " + cep.localidade + "\n" +
              "UF: " + cep.uf);
    });
    alert("Third message");
}

function test2() {
    alert("First message");
    $.get("https://viacep.com.br/ws/89050130/json/").then(cep => {
        alert("Second message");        
        alert(`CEP: ${cep.cep}
Logradouro: ${cep.logradouro}
Bairro: ${cep.bairro}
Localidade: ${cep.localidade}
UF: ${cep.uf}`);
        alert("Third message");
    });    
}

async function test3() {
    alert("First message");
    let cep = await $.get("https://viacep.com.br/ws/89050130/json/");
    alert("Second message");
    alert(`CEP: ${cep.cep}
Logradouro: ${cep.logradouro}
Bairro: ${cep.bairro}
Localidade: ${cep.localidade}
UF: ${cep.uf}`);
    alert("Third message");
}

function test4() {
    alert("First message");
    getCep("89050130").then(cep => {
        alert(`CEP: ${cep.cep}
Logradouro: ${cep.logradouro}
Bairro: ${cep.bairro}
Localidade: ${cep.localidade}
UF: ${cep.uf}`);
    });
    alert("Third message");
}

function getCep(cep) {
    return $.get(`https://viacep.com.br/ws/${cep}/json/`).then(data => {
        alert("Second message");
        return data;
    });
}