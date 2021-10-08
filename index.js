
/*Email & password authentication with accounts-js and Apollo Server


AUTH
BACKEND
COMMUNITY

LAST UPDATED OCT 08, 2021
accounts-js is a fullstack authentication and accounts-management for Javascript. We provide you with a set of tools to authenticate and manage your users in your application. These tools work with REST, GraphQL and are database agnostic.

We will implement the Authentication GraphQL API in NodeJS using accounts-js and Apollo. At the end of this article, our server will be able to sign up new users, allow the users to login and authenticate them to protect some restricted information.

At the end of this post, you can find a link to a repository containing the sources.

Requirements
For this project, you will need to have nodejs and mongodb installed on your system.

Setup the node project
Let’s start by creating our NodeJS project. Create a new folder named accounts-js-server, all the project files should be inside this folder. Let’s initialize our new project using npm (you can use yarn if you prefer):

npm init
Now, let’s add the dependencies we need to setup our Apollo GraphQL server.

npm install apollo-server graphql
Create a new index.js file (to make things 'simpler', all our code will be in a single file) and add this code to setup the Apollo server.*/

// index.js

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    # This query will be protected so only authenticated users can access it
    sensitiveInformation: String
  }
`;

const resolvers = {
  Query: {
    sensitiveInformation: () => 'Sensitive info',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
