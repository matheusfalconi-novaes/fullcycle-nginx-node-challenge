const express = require('express');
const router = express.Router();
const app = express();
const service = require('./db-services');

const port = 3000;
const defaultRoute = router.get('/', async (req, res, next) => {
    await service.insertData();
    const serviceData = await service.getData();
    const structuredData = serviceData.map(data => `<li>${data.name}</li>`).toString().replaceAll(',', '');
    const response = `
        <h1>Full Cycle Rocks!</h1>
        <ul>${structuredData}</ul>
    `;
    res.status(200).send(response);
});

app.use('/', defaultRoute);

app.listen(port, function() {
    console.log('Rodando na porta ' + port);
})

