const mongoose =  require('mongoose');

const schema = mongoose.Schema;

const slideSchema = new schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    }
});

const Slide = mongoose.model("Slide", slideSchema);

module.exports = Slide;