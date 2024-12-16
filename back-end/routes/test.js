app.get('/api/teste', (req, res) => {
    res.send({ mensagem: 'Servidor funcionando!' });
});