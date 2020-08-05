import express from 'express';

const app = express();

app.use(express.json());

//GET: buscar ou listar uma informacao
//POST: Criar alguma informacao
//PUT: Atualizar uma informacao existente
//DELETE: deletar uma informacao existente

// Corpo (request body) para criar um dado normalmente eles vem no corpo da requisicao
//Route Params: identificar qual recurso eu quero atualizar ou deletar
//Query Params: responsavel por listar por paginacao, filtros ou ordenacao



app.get('/', (request, response) => {
    return response.json();
});


app.listen(3333);