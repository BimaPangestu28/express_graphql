import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    createdAt: Date,
    updatedAt: Date,
});

playerSchema.pre('save', function(next) {
    const current = new Date();

    this.updatedAt = current;

    if (!this.createdAt) this.createdAt = current;

    next();
})

export default mongoose.model('playes', playerSchema);