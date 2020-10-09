
var assetService = require('../services/assetService');

module.exports = function (app) {
    app.get('/service/get', (req, res) => {
        var assets = assetService.getAssets();
        res.send(assets)
    })

    app.get('/service/get/:id', (req, res) => {
        var id = req.params['id'];
        var assets = assetService.findById(id);
        res.send(assets)
    })
}