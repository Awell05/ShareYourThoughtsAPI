const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
            // should I add anything in here to reference the usernane createdin user.js?
        },
        reactions: [reactionSchema], //need to change the reaction inside
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

    thoughtSchema.virtual('reactionCount').get(function () {
        return this.reactions.length;
    });

    
    const Thought = model('Thought', thoughtSchema);

    module.exports = Thought;