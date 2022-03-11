const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../middlewares/verifyToken");
const { creerPanier,majPanier,seulPanier} = require("../controllers/panier");

const router = require("express").Router();


router.post("/", verifyToken, creerPanier);
router.put("/:id", verifyTokenAndAdmin, majPanier);
router.get("/find/:userId", verifyTokenAndAuthorization, seulPanier);


module.exports = router;
