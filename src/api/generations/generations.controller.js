const Generation = require('./generations.model')

const getAll = async (req, res, next) => {
    try {
        const generations = await Generation.find().populate('talents');
        res.status(200).json(generations)
    } catch (error) {
        return next(error)
    }
}

const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const generation = await Generation.findById(id).populate('talents');
        res.status(200).json(generation);
    } catch (error) {
        return next(error)
    }
}

const postOne = async (req, res, next) => {
    try {
        const generation = new Generation();
        generation.name = req.body.name;
        generation.number = req.body.number;
        generation.region = req.body.region;
        generation.talents = req.body.talents;
        const generationDB = await generation.save();
        return res.status(201).json(generationDB)
    } catch (error) {
        return next(error)
    }
}

const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const generation = new Generation(req.body);
        generation._id = id;
        const updateGeneration = await Generation.findByIdAndUpdate(id, generation);
        return res.status(200).json(updateGeneration);
    } catch (error) {
        return next(error)
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const generation = await Generation.findByIdAndDelete(id);
        return res.status(200).json(generation);
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}