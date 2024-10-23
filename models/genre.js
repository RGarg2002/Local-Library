const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

GenreSchema.virtual("url").get(function() {
    return `/catalog/genre/${this.id}`;
})

module.exports = mongoose.Model("Genre", GenreSchema);