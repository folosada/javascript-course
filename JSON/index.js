function parserRequisition() {
    const body = {};
    body.nome = document.getElementById('nome').value;
    body.email = document.getElementById('email').value;
    $.post('http://localhost:3000/parser/print', body).then(res => {
        alert(res.status);
    });
}

function nonParserRequisition() {
    const body = {};
    body.nome = $('#nome')[0].value;
    body.email = $('#email')[0].value;
    $.post('http://localhost:4000/nonparser/print', body).then(res => {
        alert(res.status);
    });
}
