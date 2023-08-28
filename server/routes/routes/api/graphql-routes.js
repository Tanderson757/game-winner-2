const router = require("express").Router();
const { graphqlHTTP } = require("express-graphql");
const { typeDefs, resolvers } = require("../../../../../DailyCalm/server/schemas/index");

const { authMiddleware } = require("../../../../../DailyCalm/server/utils/auth");

router.use(
  // endpoint /graphql
  "/graphql",
  // auth middleware to verify the token before processing graphQL requests
  //   *executed before processing graphQL requests*
  authMiddleware,
  //   middleware
  graphqlHTTP({
    //   define schema for requests, uses typeDefs
    schema: typeDefs,
    // define root resolver object, use functions in resolvers
    rootValue: resolvers,
    // Set this to false in production to disable the GraphiQL interface
    graphiql: false,
  })
);

module.exports = router;
