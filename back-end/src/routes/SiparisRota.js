var express = require('express');
var router = express.Router();
var ctrlSiparisler = require("../controllers/Siparis");

router
.route("/kullanici/:userid/siparisler")
.get(ctrlSiparisler.kullaniciSiparisleriGetir);

router
.route("/kullanici/:userid/siparisler/:urunid")
.post(ctrlSiparisler.kullaniciSiparisEkle);

router
.route("/kullanici/:userid/siparisler/:siparisid")
.get(ctrlSiparisler.kullaniciSiparisGetir)
.delete(ctrlSiparisler.kullaniciSiparisSil);

module.exports = router;