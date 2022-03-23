const mongoose = require('mongoose');

const generationSchema = new mongoose.Schema(
    {
        number: { type: Number, required: false, trim: true },
        name: { type: String, required: true, trim: true },
        region: { type: String, required: true, trim: true },
        talents: [{ type: mongoose.Schema.Types.ObjectId, ref: "talents", required: true }]
    },
    {
        timestamps: true
    }
)

const Generation = mongoose.model('generations', generationSchema);

// Exportar ES5
module.exports = Generation;