import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());

//GET: buscar ou listar uma informacao
//POST: Criar alguma informacao
//PUT: Atualizar uma informacao existente
//DELETE: deletar uma informacao existente

// Corpo (request body) para criar um dado normalmente eles vem no corpo da requisicao
//Route Params: identificar qual recurso eu quero atualizar ou deletar
//Query Params: responsavel por listar por paginacao, filtros ou ordenacao
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);