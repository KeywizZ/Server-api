const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema (
    {
        name: {type: String, required: true, trim: true},
        img: {type: String, required: false, trim: true},
        debutDate: {type: String, required: true},
        url: {type: String, required: false, trim: true},
        twitter: {type: String, required: false, trim: true}
    }
)

const Talent = mongoose.model('talents', talentSchema);
// Export ES5
module.exports = Talent;