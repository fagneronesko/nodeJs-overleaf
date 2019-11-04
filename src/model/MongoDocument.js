let client = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId;
let config = require('./config');
let conn = client.connect(config.uri, config.options).then((conn) => {
    return {
        db: conn.db(config.db),
        close: function () {
            conn.close();
        }
    };
});
conn.catch((err) => {
    throw err;
});

module.exports = class MongoDocument {
    save () {
        if (this._id) {
            return conn.then((conn) => {
                return conn.db.collection(this.collection).updateOne({_id: this._id}, {$set: this});
            });
        }
        return conn.then((conn) => {
            return conn.db.collection(this.collection).insertOne(this);
        });
    }


    static close() {
        conn.then((conn) => {
            conn.close();
        });
    }
};