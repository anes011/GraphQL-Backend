const typeDefs = `#graphql
    type User {
        id: Int
        name: String
        email: String
        password: String
        photo: String
        phone_number: String
        status: Boolean
        timestamp: String
        books(name: String): [Book]
    }

    type Book {
        id: Int
        name: String
        author_id: Int
        created_at: String
    }

    type Query {
        users: [User]
        user(id: Int, name: String): User
    }
`;

module.exports = typeDefs;