module.exports = {
  port: 5000,
  host: "0.0.0.0",
  dbUrl: `mongodb+srv://test_user:${process.env.DB_PASSWORD}@cluster0.a8822.mongodb.net/example_restaurant?retryWrites=true&w=majority`,
  dbOptions: { useMongoClient: true },
  tables_count: 10
}
