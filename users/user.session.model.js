const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema1 = new Schema({
    userId:{type: String, unique: true, required: true},
    firstName:{type: String},
    lastName:{type: String},
    username:{type: String},
    accessDate: { type: Date, default: Date.now },
    avatar:{type: String}
});

schema1.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('UserSessions', schema1);