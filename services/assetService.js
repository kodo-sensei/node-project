var assetModel = require('../models/asset');
var assetService = {
    getAssets: function () {
        return assetModel;
    },
    findById: function (id) {
        var temp;
        assetModel.forEach((asset) => {
            if (asset['asset_id'] == id) {
                temp = asset;
            }
        });
        
        return temp;
    }
}


module.exports = assetService
