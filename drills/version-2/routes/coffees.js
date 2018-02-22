const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list().then(coffees => {
        response.json({coffees});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(coffee => {
        coffee
            ? response.json({coffee})
            : response.sendStatus(404)
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(coffee => {
        response.status(201).json({coffee});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(coffee => {
        response.json({coffee});
    }).catch(next);
});

module.exports = router;
