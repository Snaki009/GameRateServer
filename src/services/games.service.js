const { gamesService } = require('.');
const { Game, Rating } = require('../models');
const pick = require('../utils/pick');

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @returns {Promise<QueryResult>}
 */
const getGame = async (gameId) => {
    const game = await Game.findById(gameId)
    return game;
};
/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @returns {Promise<QueryResult>}
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getGames = async (filter, options) => {
    const game = await Game.paginate(filter, options);
    return game;
};

/**
 * Create a Game
 * @param {Object} gameBody
 * @returns {Promise<Comment>}
 */
const createGame = async (gameBody, user) => {
    return Game.create({...gameBody});
};

const getRating = async (gameId, userId) => {
    const rating = await Rating.findOne({ gameId, userId }).exec();
    return rating;
}

const createRating = async (gameId, ratingBody, user) => {
    return Rating.create({...ratingBody, gameId, userId: user.id})
}

module.exports = {
    getGame,
    getGames,
    createGame,
    getRating,
    createRating,
};
