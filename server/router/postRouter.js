const Router = require("express");
const router = new Router()
const postController = require("../controllers/postController")

router.post('/create', postController.postOne)
router.post('/delete', postController.deleteOne)
router.get('/', postController.getAll)

module.exports = router