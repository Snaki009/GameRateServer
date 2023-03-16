const Joi = require('joi');

const getGame = {
    params: Joi.object().keys({
        gameId: Joi.string(),
    })
}

const getGames = {}

const postGame = {
    body: Joi.object()
        .keys({
            id: Joi.string(),
            name: Joi.string(),
            coverImg: Joi.string(),
            developer: Joi.array(),
            publisher: Joi.array(),
            platform: Joi.array(),
            description: Joi.string(),
        })
};

const getRating = {
    params: Joi.object().keys({
        gameId: Joi.string(),
        userId: Joi.string(),
    }),
}

const getOwnRating = {
    params: Joi.object().keys({
        gameId: Joi.string(),
    }),
}

const rateGame = {
    params: Joi.object().keys({
        gameId: Joi.string(),
    }),
    body: Joi.object()
        .keys({
            rating: Joi.number(),
            description: Joi.string(),
        })
};



module.exports = {
    getGame,
    getGames,
    postGame,
    getRating,
    getOwnRating,
    rateGame,
};
