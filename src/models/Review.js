import mongoose from "mongoose";

const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {
    _id: { type: String, unique: true },
    msg: { type: String, required: true },
    type: { type: String, required: true },
    sources: { type: String, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
);

ReviewSchema.set("toObject", { getters: true });

export default mongoose.model("Review", ReviewSchema);
