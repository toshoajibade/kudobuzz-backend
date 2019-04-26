import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/App";
import data from "../testData/reviewData";
import { Reviews } from "../../src/models";

chai.use(chaiHttp);
chai.should();

describe("/POST /api/v1/review", () => {
  afterEach(async () => {
    await Reviews.findOneAndDelete({
      business_id: data.business_id
    });
  });
  it("should create a review", done => {
    chai
      .request(app)
      .post("/api/v1/review")
      .send(data)
      .end((err, res) => {
        try {
          if (err) throw err;
          res.status.should.equal(201);
          res.body.should.be.a("object");
          res.body.should.include.all.keys(
            "business_id",
            "msg",
            "type",
            "sources",
            "rating"
          );
          done();
        } catch (err) {
          done(err);
        }
      });
  });
});

describe("/POST /api/v1/review", () => {
  afterEach(async () => {
    await Reviews.findOneAndDelete({
      business_id: data.business_id
    });
  });
  it("should not create a review", done => {
    chai
      .request(app)
      .post("/api/v1/review")
      .send({
        msg: "I really like your product",
        sources: "amazon",
        type: "product review",
        rating: 4
      })
      .end((err, res) => {
        try {
          if (err) throw err;
          res.status.should.equal(400);
          res.body.msg.should.be.equal("Bad request");
          done();
        } catch (err) {
          done(err);
        }
      });
  });
});

describe("/GET /api/v1/review", () => {
  beforeEach(async () => {
    await Reviews.create(data);
  });
  afterEach(async () => {
    await Reviews.findOneAndDelete({
      business_id: data.business_id
    });
  });
  it("should get all reviews", done => {
    chai
      .request(app)
      .get("/api/v1/review/A12345678")
      .end((err, res) => {
        try {
          if (err) throw err;
          res.status.should.equal(200);
          res.body.should.be.a("array").that.is.not.empty;
          done();
        } catch (err) {
          done(err);
        }
      });
  });
});

describe("/GET /api/v1/review", () => {
  beforeEach(async () => {
    await Reviews.create(data);
  });
  afterEach(async () => {
    await Reviews.findOneAndDelete({
      business_id: data.business_id
    });
  });
  it("should not get any review", done => {
    chai
      .request(app)
      .get("/api/v1/review")
      .end((err, res) => {
        try {
          if (err) throw err;
          res.status.should.equal(404);
          done();
        } catch (err) {
          done(err);
        }
      });
  });
});
