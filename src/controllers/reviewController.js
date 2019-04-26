import { Reviews } from "../models";

export default {
  async create(req, res) {
    try {
      const review = await Reviews.create(req.body);
      if (!review) throw new Error();
      res.status(201).send(review);
    } catch (error) {
      res.status(400).send({ msg: "Bad request" });
    }
  },
  async list(req, res) {
    try {
      const reviews = await Reviews.aggregate([
        {
          $match: { sources: { $ne: "kudobuzz" } }
        },
        {
          $group: {
            _id: {
              _id: "$type",
              name: "$sources"
            },
            matches: { $sum: 1 }
          }
        },
        { $sort: { matches: -1 } }
      ]);

      if (!reviews) throw new Error();
      res.status(200).send(reviews);
    } catch (error) {
      res.status(404).send({ msg: "Review not found" });
    }
  }
};
