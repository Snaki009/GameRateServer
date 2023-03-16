const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ratingSchema = mongoose.Schema(
    {
        gameId: {
            type: String,
            required: true,
            trim: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        userId: {
            type: String,
            required: true,
        },
    },
).index({ gameId: 1, userId: 1 }, { unique: true });
// add plugin that converts mongoose to json
ratingSchema.plugin(toJSON);
ratingSchema.plugin(paginate);

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;