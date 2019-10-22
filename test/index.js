const chai = require("chai");
const chaiHTTP = require("chai-http");
const server = require("../server");
const { expect } = require("chai");

chai.use(chaiHTTP);

it("fetches data", done => {
  chai
    .request(server)
    .get("/")
    .end((err, res) => {
      expect(res.body.fname).to.equal("sachin");
      expect(res.body.lname).to.equal("prabhu");
      done();
    });
});
