var DocDBUtils = {
    getOrCreateDatabase: function (client, databaseId, callback) {
        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.id=@id',
            parameters: [{
                    name: '@id',
                    value: databaseId
                }]
        };
        
        client.queryDatabases(querySpec).toArray(function (err, results) {
            if (err) {
                callback(err);

            } else {
                if (results.length === 0) {
                    var databaseSpec = {
                        id: databaseId
                    };
                    
                    client.createDatabase(databaseSpec, function (err, created) {
                        callback(null, created);
                    });

                } else {
                    callback(null, results[0]);
                }
            }
        });
    },
    
    getOrCreateCollection: function (client, databaseLink, collectionId, callback) {
        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.id=@id',
            parameters: [{
                    name: '@id',
                    value: collectionId
                }]
        };
        
        client.queryCollections(databaseLink, querySpec).toArray(function (err, results) {
            if (err) {
                callback(err);

            } else {
                if (results.length === 0) {
                    var collectionSpec = {
                        id: collectionId
                    };
                    
                    var requestOptions = {
                        offerType: 'S1'
                    };
                    
                    client.createCollection(databaseLink, collectionSpec, requestOptions, function (err, created) {
                        callback(null, created);
                    });

                } else {
                    callback(null, results[0]);
                }
            }
        });
    },

    initCollection: function (client, databaseId, collectionId, callback) {
        var self = this;
        
        DocDBUtils.getOrCreateDatabase(client, databaseId, function (err, db) {
            if (err) {
                callback(err);
            } else {
                DocDBUtils.getOrCreateCollection(client, db._self, collectionId, callback);
            }
        });
    }
};

module.exports = DocDBUtils;