module.exports = class mainController {
    static init(req, res) {
        try {
            res.status(200).json({ message: 'Inicialização bem-sucedida!' });
        } catch(e) {
            console.log('Erro ao inicializar: ', e);
        }
    }
}