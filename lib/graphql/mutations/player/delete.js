import {
    GraphQLNonNull,
    GraphQLID,
} from 'graphql';

import {
    playerType
} from '../../types/player';
import PlayerModel from '../../../models/player';

export default {
    type: playerType,

    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },

    resolve(root, params) {
        const deletedPlayer = PlayerModel.findByIdAndRemove(params.id).exec();

        if (!deletedPlayer) {
            throw new Error('Cannot Delete Player');
        }

        return deletedPlayer;
    }
};