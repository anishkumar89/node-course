const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, function (error, client) {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

})