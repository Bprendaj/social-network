// Require Mongoose
const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // use REGEX to validate correct email
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }]
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false
    }
)

// virtual friend count
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const Users = model('Users', UsersSchema);

// Export Users module
module.exports = Users;