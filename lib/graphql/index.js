import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import mutations from './mutations';
import queries from './queries';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutations',
        fields: mutations
    })
});