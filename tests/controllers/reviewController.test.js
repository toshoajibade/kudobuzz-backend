import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/App";
import data from "../testData/reviewData";
import { Reviews } from "../../src/models";

chai.use(chaiHttp);
chai.should();

// TODO: add more test scenerios
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
      .get("/api/v1/review")
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