import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "https://booking-api",
  issuerBaseURL: "https://dev-ja55wjcl2iwpgu13.eu.auth0.com/",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;

// enforce on all endpoints
// app.use(jwtCheck);

// app.get("/authorized", function (req, res) {
//   res.send("Secured Resource");
// });

// app.listen(port);

// console.log("Running on port ", port);
