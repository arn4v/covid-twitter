const { Schema } = require("mongoose")

const citySchema = new Schema({
  location: {
    type: Map,
    of: String,
  },
})
