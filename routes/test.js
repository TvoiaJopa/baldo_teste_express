const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    response.send('respond with a resource');
});

router.get("/:id", function (request, response) {
    const doubledId = request.params.id * 2;
    response.send(doubledId.toString()); // Convert the number to a string
});

module.exports = router;