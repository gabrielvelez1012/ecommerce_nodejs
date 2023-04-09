const { Router } = require('express');

const router = Router();

router.post('/cars', () => {
    console.log('post');
});

router
    .route("/cars/:id")
    .get(() => {
        console.log('get');
})
    .put(() => {
        console.log('put');
})
    .delete(() => {
        console.log('delete');
    });

module.exports = router;