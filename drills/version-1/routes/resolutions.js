const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list().then(resolutions => {
        response.json({resolutions});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(resolution => {
        resolution
            ? response.json({resolution})
            : response.sendStatus(404)
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(resolution => {
        response.status(201).json({resolution: resolution});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(resolution => {
        response.json({resolution: resolution[0]});
    }).catch(next);
});

module.exports = router;
