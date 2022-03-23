const Talent = require('./talents.model');

const getAll = async (req, res, next) => {
    try {
        const talents = await Talent.find();

        res.status(200).json(talents);
    } catch (error) {
        return next(error)
    }
}

const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const talent = await Talent.findById(id);
        res.status(200).json(talent);
    } catch (error) {
        return next(error)
    }
}

const postOne = async (req, res, next) => {
    try {
        const talent = new Talent();

        talent.name = req.body.name;
        talent.url = req.body.url;
        talent.img = req.body.img;
        talent.debutDate = req.body.debutDate;
        talent.twitter = req.body.twitter;

        const talentDB = await talent.save();
        return res.status(201).json(talentDB) 
    } catch (error) {
        return next(error)
    }
}

const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const talent = new Talent(req.body)

        talent._id = id;

        const updateTalent = await Talent.findByIdAndUpdate(id, talent);
        return res.status(200).json(updateTalent);

    } catch (error) {
        return next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const talent = await Talent.findByIdAndDelete(id);
        return res.status(200).json(talent)
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