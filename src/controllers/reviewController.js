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
          $match: {
            business_id: req.params.business_id,
            sources: { $ne: "kudobuzz" }
          }
        },
        {
          $facet: {
            all_reviews: [
              {
                $group: {
                  _id: {
                    type: "$type",
                    sources: "$sources"
                  },
                  count: {
                    $sum: 1
                  }
                }
              },
              {
                $project: {
                  _id: { $concat: ["$_id.type", " from ", "$_id.sources"] },
                  count: 1
                }
              },
              { $sort: { count: -1 } }
            ],
            review_types: [{ $sortByCount: "$type" }],
            review_sources: [{ $sortByCount: "$sources" }]
          }
        }
      ]);

      if (!reviews) throw new Error();
      res.status(200).send(reviews);
    } catch (error) {
      res.status(404).send({ msg: "Review not found" });
    }
  }
};
