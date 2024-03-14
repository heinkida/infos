'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"version.json": "224ff6cdffbae54bdfa984fa92137253",
"index.html": "eef8419341c53aed4b9ffbc759838561",
"/": "eef8419341c53aed4b9ffbc759838561",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"assets/AssetManifest.json": "c9fdc8938568be39ab73a298f196fa00",
"assets/AssetManifest.bin": "e6e21b5a3da0a5f281124ca1aa22c446",
"assets/AssetManifest.bin.json": "538a96c2898f8b1299e7ed9b913b7f1d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "71f89c20da14fe48f2b881120d0e7890",
"assets/assets/images/01d.png": "9a956d6298af578c0cbbcb1d785ccf56",
"assets/assets/images/02d.png": "5ea2d730d3be24c937ce7461f0f530ca",
"assets/assets/images/01n.png": "58f2dd6b0149f4bb4c5b9c98daec5467",
"assets/assets/images/02n.png": "e874e4560a701e646de8c77647f40641",
"assets/assets/images/03d.png": "beeb7bbde37cd163aa8077b8adfebdc6",
"assets/assets/images/03n.png": "beeb7bbde37cd163aa8077b8adfebdc6",
"assets/assets/images/04d.png": "346f20bb618e7f86dcb32eac361ae541",
"assets/assets/images/04n.png": "346f20bb618e7f86dcb32eac361ae541",
"assets/assets/images/09d.png": "baf9ffd6ef305583ee35bdb88519084b",
"assets/assets/images/09n.png": "baf9ffd6ef305583ee35bdb88519084b",
"assets/assets/images/10d.png": "64f9f6298ccc595f0917fee814bd530d",
"assets/assets/images/10n.png": "ac3408559668c03c32736efb237eb011",
"assets/assets/images/11d.png": "2d877d85cbcf21f31c38fe7dbcff7ae2",
"assets/assets/images/11n.png": "2d877d85cbcf21f31c38fe7dbcff7ae2",
"assets/assets/images/13d.png": "cde524aacbdf18a79e79fcbcda0597fc",
"assets/assets/images/13n.png": "cde524aacbdf18a79e79fcbcda0597fc",
"assets/assets/images/50d.png": "513b4b3ff96d5bf5054ef61c4a9f8ed2",
"assets/assets/images/50n.png": "513b4b3ff96d5bf5054ef61c4a9f8ed2",
"assets/assets/images/full1.png": "4a707097c45e1f172b6260871c74ad71",
"assets/assets/images/grow1.png": "0015abefc26d6d0629ef390f34f936bf",
"assets/assets/images/grow2.png": "4e88f2a37777a417c0286e0df6c3a943",
"assets/assets/images/half1.png": "2e1bcdbc4e21086f583058437d5e3e0a",
"assets/assets/images/half2.png": "0174dfaa00b9f7e62a28d232c165c0ea",
"assets/assets/images/new1.png": "abd4b2dbc3817f7a87d87d6f5f9f83de",
"assets/assets/images/shrink1.png": "a5c66e355f6c5f16a355f44f1f8ae4ab",
"assets/assets/images/shrink2.png": "db02fb75b2a77cdb249976cc0da6f91c",
"assets/assets/images/regenschirm2V2.png": "1c6664705db0035936223ba5a8d2ff78",
"assets/assets/images/sky.jpg": "4fdf9683afdb5d006e27044ea0f88cd4",
"assets/assets/images/regenschirmv2.jpg": "fd8f6d4ffbb85bf2535703611c7a4bf0",
"assets/assets/images/flag_za.png": "f636c4cdcd30bf9e04768deb06fd738d",
"assets/assets/images/flag_zm.png": "d04925e638e235a8a958a433c22c170a",
"assets/assets/images/flag_zw.png": "aa8aa9017e63d1bbd08479dd96d605ba",
"assets/assets/images/system-2660914_640.jpg": "276e340e5e79c3363342d3717c3e51cf",
"assets/assets/images/flag_ad.png": "656c5b7473e257c5f681bfcfa04e825c",
"assets/assets/images/flag_ae.png": "21fc2c04a8f670b62658a9726913bbc5",
"assets/assets/images/flag_af.png": "e89638307efb2088ee047b073d64d9f0",
"assets/assets/images/flag_ag.png": "f601041ecc597dc251c3e82409ac91c8",
"assets/assets/images/flag_al.png": "b264ab36e282ff9b16165a1e98dbb7e5",
"assets/assets/images/flag_am.png": "6fc8c2ec4abb9057b8fe6e788a3006c3",
"assets/assets/images/flag_ao.png": "e57c6e576870c25ce1f21b2acf26fe0b",
"assets/assets/images/flag_ar.png": "3ae373fa31cc2820113f2669cfc99195",
"assets/assets/images/flag_at.png": "dd8fe250547c5222b48c2b710cb8417e",
"assets/assets/images/flag_au.png": "99524679f4cab30970ef73ddb06bc5ca",
"assets/assets/images/flag_az.png": "f1cef75ed66f89b4625981bdd270f8dc",
"assets/assets/images/flag_ba.png": "860c9f4cb536a4544b3ae6142660be8f",
"assets/assets/images/flag_bb.png": "ed440a5581eef2ae755447f365e70b89",
"assets/assets/images/flag_bd.png": "d0f6d8a4bf9484e16352cc442d60e6b4",
"assets/assets/images/flag_be.png": "bdf10e77474c1686990fd61cd24a9f68",
"assets/assets/images/flag_bf.png": "8ab6a4ea826741b465dc61cf9a607e45",
"assets/assets/images/flag_bg.png": "f8978f38857226aebe9272b0fae675ad",
"assets/assets/images/flag_bh.png": "e669af77038c06d1026a75ddb410b77b",
"assets/assets/images/flag_bi.png": "0fe266bfbdd45680f6017969cb7b0692",
"assets/assets/images/flag_bj.png": "78bcee18ea28b9b4ba26fb3dd9ca161f",
"assets/assets/images/flag_bn.png": "6174f291286db9ff22966d917bb2a6b0",
"assets/assets/images/flag_bo.png": "dc39da53f05ee6a78e70820e6fe57731",
"assets/assets/images/flag_br.png": "6827f261416397cc9982ae6ca30ab770",
"assets/assets/images/flag_bs.png": "8b06661e8682a9a8f5630f15c0aa5319",
"assets/assets/images/flag_bt.png": "bde3270a01cb960201ecb628bd3a5623",
"assets/assets/images/flag_bw.png": "bf7cd133ff45958c2991377ba140cdd7",
"assets/assets/images/flag_by.png": "cd84880cd7b49d68a35e8d75ffe22eb8",
"assets/assets/images/flag_bz.png": "26d8c85559d347f4009461dde23a69e5",
"assets/assets/images/flag_ca.png": "77e3e1f249feac2f62fd6dab69b0f9dc",
"assets/assets/images/flag_cd.png": "2ac94b0f6afd455b71e4d700ba040e2f",
"assets/assets/images/flag_cf.png": "c97ee5c0e1f14a26d7a8b637d9e20dfc",
"assets/assets/images/flag_cg.png": "a9d3fe60409e2045f51bb1dc75ef145d",
"assets/assets/images/flag_ch.png": "152979eaec8c78c59aea0bd2708c62a1",
"assets/assets/images/flag_ci.png": "efabb6631e81deb6d84e23e30036fa65",
"assets/assets/images/flag_cl.png": "d1c56584e4c28820cd4bc48814ffcc2f",
"assets/assets/images/flag_cm.png": "985edb4ece584a93fa430e61be6dcc6a",
"assets/assets/images/flag_cn.png": "04ee30a7c806bf2e435c890dedb89372",
"assets/assets/images/flag_co.png": "41e4150e6a963160206a65dd389599f5",
"assets/assets/images/flag_cr.png": "fb41aa1136672c50a5d761660be595eb",
"assets/assets/images/flag_cu.png": "245f4efcc05029630c7e5f8af6a1ae5f",
"assets/assets/images/flag_cv.png": "b8dfff2b5e251df889de64a2c168843a",
"assets/assets/images/flag_cy.png": "293e93339ac3b97ad7c25b26c38be271",
"assets/assets/images/flag_cz.png": "63041111fe7cbe59f08d6afbc8248ba6",
"assets/assets/images/flag_de.png": "abbd4565f7bcef8dc782a07aeaae4d2d",
"assets/assets/images/flag_dj.png": "25ca580e34afea803daa94866ab07c7d",
"assets/assets/images/flag_dk.png": "b8a494a4f6a2836ee6eab604d58861be",
"assets/assets/images/flag_dm.png": "d41090a03be155adeae3d698e05e7132",
"assets/assets/images/flag_do.png": "d052e0b27c5b6d0dc6e0d117e4cdeaa5",
"assets/assets/images/flag_dz.png": "30c25de44a748159bfc5fbd373292fac",
"assets/assets/images/flag_ec.png": "e6cc1f96ed55f4c5ece03ce3e38aa88b",
"assets/assets/images/flag_ee.png": "ce238cf370b78134ea7f695aa4b4c780",
"assets/assets/images/flag_eg.png": "e362f359a3f68b188ab67dfef60b8b12",
"assets/assets/images/flag_eh.png": "0f41bf1abaf399c4c0965a9c61ed39a3",
"assets/assets/images/flag_er.png": "c828c44606e29d01873343461fdb4550",
"assets/assets/images/flag_es.png": "8c819b2f3d8c6dc7e0637c2441dc6fa2",
"assets/assets/images/flag_et.png": "4995ccb291433f4d5da52e3d1bbda832",
"assets/assets/images/flag_eu.png": "ebcb463985b112af1366a8f6ae04dab6",
"assets/assets/images/flag_fi.png": "861bff67e9bd2b8f5b98bbea97526cde",
"assets/assets/images/flag_fj.png": "3055dc2befb1e3758da8340bbc0ff217",
"assets/assets/images/flag_fm.png": "fb08426e210cdd18af9376a552fdaeae",
"assets/assets/images/flag_fr.png": "09a791be0aa03e3b35933c12cbf618f8",
"assets/assets/images/flag_ga.png": "2b978005eda9d90af267b4df0f90ac0c",
"assets/assets/images/flag_gb.png": "f2f57cc63057db97b7c449a09a6ba444",
"assets/assets/images/flag_gd.png": "5df5e43fd221cf6968c30ef53ab38785",
"assets/assets/images/flag_ge.png": "93a054b741caaae1245235894e038d43",
"assets/assets/images/flag_gh.png": "d37fd3e2e31b86b923152bc4ef4d7133",
"assets/assets/images/flag_gm.png": "89ad16c947ab14bf99ed8dad6ed13b41",
"assets/assets/images/flag_gn.png": "5de64672d77fb58f53f33b0b39497d42",
"assets/assets/images/flag_gq.png": "e3b327fdb7a6f26a24212e5e70f9593c",
"assets/assets/images/flag_gr.png": "9c13e3a15b1ffe61c7f0b3ddd4390f06",
"assets/assets/images/flag_gt.png": "c15face77db6dfc87a680fd96ee31cc7",
"assets/assets/images/flag_gw.png": "74a99ffd785563a18bf83f994696b1da",
"assets/assets/images/flag_gy.png": "a32e34bca6e2146f923ff3c7f4b08dfa",
"assets/assets/images/flag_hk.png": "44342b21734f30cd2afd488236a2e537",
"assets/assets/images/flag_hn.png": "52eb6cee832a55271682334e74a0e4a0",
"assets/assets/images/flag_hr.png": "7bd313de9856c7d31351eb2e371ed9cf",
"assets/assets/images/flag_ht.png": "97ab227bd06e71b718c177f9977a4440",
"assets/assets/images/flag_hu.png": "d90a9c4f4d323b44dd4c62b69f1e2c9d",
"assets/assets/images/flag_id.png": "f8edb3942e38e627c5a7286c5bd01a1c",
"assets/assets/images/flag_ie.png": "f99dd6e4742bbb8cac0f14f1f05369c7",
"assets/assets/images/flag_il.png": "d90b5103897ce3de2bad678e9e815549",
"assets/assets/images/flag_in.png": "23aa28b15a963006c370a3951017aaf2",
"assets/assets/images/flag_iq.png": "059bad53d2ed4d25ae92bc16c46df39f",
"assets/assets/images/flag_ir.png": "a2e82dba84d48e59bdafba0f3b0e0ba8",
"assets/assets/images/flag_is.png": "e6d60c230e58fd44a6b9c64459e82afc",
"assets/assets/images/flag_it.png": "b90e559a19e8a2d3f1b9b978568e4a41",
"assets/assets/images/flag_jm.png": "b2800abdab4203ee29f96c3ba14c1a96",
"assets/assets/images/flag_jo.png": "8a3bd4981c9ad5ecb7f81f7f2c7e11ab",
"assets/assets/images/flag_jp.png": "8543c7aec077337fa492de9020a2e8e9",
"assets/assets/images/flag_ke.png": "332964d18933b7e32f0db5a3684b9433",
"assets/assets/images/flag_kg.png": "1c92e07ac53b53430ce53d64f26ec4d2",
"assets/assets/images/flag_kh.png": "a379858069cfb4b76e7ef0f4a09a2709",
"assets/assets/images/flag_ki.png": "425f5fd052f712b976dce9d80544f00b",
"assets/assets/images/flag_km.png": "05c7f5280f11d2bc35d5687de56a83b6",
"assets/assets/images/flag_kn.png": "16bcad632490d7560eae7d74f4162c1e",
"assets/assets/images/flag_kp.png": "af42f710e4a10ba47c433efcc89f3889",
"assets/assets/images/flag_kr.png": "e0c2b4f59ee723b1979928e682caf85b",
"assets/assets/images/flag_ks.png": "ae38db7a40627a4a26ecf55b9e253ef5",
"assets/assets/images/flag_kw.png": "79c3c3623bdfa681537a4e2c6d65491c",
"assets/assets/images/flag_kz.png": "f0a24c9db9dbae94f19e0501e9171954",
"assets/assets/images/flag_la.png": "b55ba28d1e0e8a911aa860afaa310320",
"assets/assets/images/flag_lb.png": "f68fa25942b86d982d05b030407781b6",
"assets/assets/images/flag_lc.png": "2e9ebc8c8731a0961259cd7324f5c474",
"assets/assets/images/flag_li.png": "883b0b831d200cce7750d54593f3e60e",
"assets/assets/images/flag_lk.png": "b33dbf1534fdbc4951e0a266a3cdc36b",
"assets/assets/images/flag_lr.png": "62d28a5b80baed5d3b88becee469539e",
"assets/assets/images/flag_ls.png": "bcd2c7b257dad9f6c65587bbcbc86064",
"assets/assets/images/flag_lt.png": "614a881a65c203755de7dc35ab6e2ed6",
"assets/assets/images/flag_lu.png": "6688c459e497c72ef4601aa02b85cac3",
"assets/assets/images/flag_lv.png": "4cba04e93ea9d5ba83812b1e4ad284b7",
"assets/assets/images/flag_ly.png": "7dd318a3bde58a95980c1d0dc73dd1e2",
"assets/assets/images/flag_ma.png": "b119e23c320733e4c992dbc0ffc23966",
"assets/assets/images/flag_mc.png": "7cc2706ac0658a498d96fdb523093cba",
"assets/assets/images/flag_md.png": "90ce5a48bca4032c4a43f0d4394b2f43",
"assets/assets/images/flag_me.png": "9f44f9c13192ffcd438d66bed57f17b7",
"assets/assets/images/flag_mg.png": "75bfe5f1314af84921bfd16f9e7c244f",
"assets/assets/images/flag_mh.png": "c8caa175bf630a665c7eb311aef4ecc5",
"assets/assets/images/flag_mk.png": "bbfeaa4510b0601e6ce2aa461bf2838f",
"assets/assets/images/flag_ml.png": "8bdd06f5373c834adf9e1650071c42e3",
"assets/assets/images/flag_mm.png": "12ba82ed5b74446c3a2cdfb74b5d85a7",
"assets/assets/images/flag_mn.png": "5a9dafd8736c0362f034fdbe4b0de653",
"assets/assets/images/flag_mr.png": "1306dffb89d8921e2b478737c7b9471c",
"assets/assets/images/flag_mt.png": "1f800e791c126fa41d3e4b9b790b9bf4",
"assets/assets/images/flag_mu.png": "5ae234d4265da61bf9e5c8cf59bab154",
"assets/assets/images/flag_mv.png": "8d384a0089876f070c4df2b0f6aa2e28",
"assets/assets/images/flag_mw.png": "8cf054ae9bb2790c6ebd77a60584a765",
"assets/assets/images/flag_mx.png": "45ad2f667e09002e6ecaf5f5e212f2da",
"assets/assets/images/flag_my.png": "5adca3251cb05fb0de17830b5c594d56",
"assets/assets/images/flag_mz.png": "57ea1e5cf18f2f23f5a09a43124ce8dd",
"assets/assets/images/flag_na.png": "272478b8d531c1ec944da8be48d56b65",
"assets/assets/images/flag_ne.png": "9b8ea71a725684d96dbffe0199c33ca6",
"assets/assets/images/flag_ng.png": "1cb2f4223eb470435ed99d4566c2ddbf",
"assets/assets/images/flag_ni.png": "26df812a9d250efa0723b8d4d35a1bd1",
"assets/assets/images/flag_nl.png": "3c28f6636e2baa5a29ee66beef98e7d7",
"assets/assets/images/flag_no.png": "9f077e747533059d00c35952bc10c16e",
"assets/assets/images/flag_np.png": "d01e1cf888e3dfd53c1c9549ce784b44",
"assets/assets/images/flag_nr.png": "fa4a2d52297929d9488eec5a980d5e76",
"assets/assets/images/flag_nz.png": "9060388cb5b0e4865484a8c24583b24e",
"assets/assets/images/flag_om.png": "ba5a7dbfa723ab7f3e02300879e761c8",
"assets/assets/images/flag_pa.png": "2a0d89683fe6deb67d684934f1648035",
"assets/assets/images/flag_pe.png": "d1a7c041614c087034e412acda5fb340",
"assets/assets/images/flag_pg.png": "7f02140df8430d0de9b9faddb06e9762",
"assets/assets/images/flag_ph.png": "e75d5f2f5744bebde4e8caa45d9923d6",
"assets/assets/images/flag_pk.png": "d4d1e9701d7f33fda13898dfaf437c94",
"assets/assets/images/flag_pl.png": "4114588a26828a4839a136dd5cef745d",
"assets/assets/images/flag_pt.png": "67bf8f9e91bd1462d48bedbce86d2cfa",
"assets/assets/images/flag_pw.png": "07069ee6f592b7d31693f303f5db073c",
"assets/assets/images/flag_py.png": "2c12d78296e387a4a3a1ec58746e3c6f",
"assets/assets/images/flag_qa.png": "af41a2007953bfbd0732551aba7cbb49",
"assets/assets/images/flag_ro.png": "8263b2b2ef5b6ab2b44d3dc289c52522",
"assets/assets/images/flag_rs.png": "d583be7ec8813f27d82ee0f77232aa6b",
"assets/assets/images/flag_ru.png": "28d7d912e888fdd70369f4cb6c0a430f",
"assets/assets/images/flag_rw.png": "a712fac20d79de8c15f69c383455396d",
"assets/assets/images/flag_sa.png": "01c13e57ce441176c6faa88ef6a1d30e",
"assets/assets/images/flag_sb.png": "67dafd60fda959a1ab5697e6cd4a2791",
"assets/assets/images/flag_sc.png": "eee2148b070931f4ef08b18d00591ee3",
"assets/assets/images/flag_sd.png": "f4c717e23ed2b96e1d9f75a8d630057f",
"assets/assets/images/flag_se.png": "2bb064ef6a4ff2189a2f95e26fd7dc5f",
"assets/assets/images/flag_sg.png": "532b6d0f28ef025780f863c9fe8e8af7",
"assets/assets/images/flag_si.png": "14651cb55bd671c5f7d06a04370522dc",
"assets/assets/images/flag_sk.png": "9142d792e33c1d2964ac2db435c589c6",
"assets/assets/images/flag_sl.png": "f79ef42b8b163c2388af9afdf3fc0323",
"assets/assets/images/flag_sm.png": "1896d72b45c24f7a1a6972c5778564e7",
"assets/assets/images/flag_sn.png": "c6b9a4306dd4dcb5e16d2d3b24092fbe",
"assets/assets/images/flag_so.png": "751c75e178df0c1d65563fa5244a6e18",
"assets/assets/images/flag_sr.png": "0465a4dc9488af2189f38632c30916d9",
"assets/assets/images/flag_st.png": "7597a4d1074ae463efdda6d00e3c126e",
"assets/assets/images/flag_sv.png": "8f52682c02d9c20e292d016f5d64fb1b",
"assets/assets/images/flag_sy.png": "b8b3bd4b10bc2f2db2f3b80d7395e66d",
"assets/assets/images/flag_sz.png": "a637d912892ba84e145f04e5e7647f15",
"assets/assets/images/flag_td.png": "eaaf3d8adb48aae3bbda062e411fa1ab",
"assets/assets/images/flag_tg.png": "9a420beec0afc41c955998d3ebf9eeba",
"assets/assets/images/flag_th.png": "4e3a12e2d53fbce4bd9de5c7bc10217f",
"assets/assets/images/flag_tj.png": "71177cefe9de7cccf1c134349245a14a",
"assets/assets/images/flag_tl.png": "540973dbc55ac4501667cc2eab071f46",
"assets/assets/images/flag_tm.png": "a86ccb7d0e7a7f8719668db9c3e3e0b9",
"assets/assets/images/flag_tn.png": "9a6a802b83424fd7f14776e33314c9ba",
"assets/assets/images/flag_to.png": "5ff0b3e684faa102fad43a26d247f1bd",
"assets/assets/images/flag_tr.png": "da828b5eae7f04bf52dd9fb8912a2126",
"assets/assets/images/flag_tt.png": "078d46b4daf3735833398c6f8814276a",
"assets/assets/images/flag_tv.png": "d3827ccb1b68cebce2500a061a67cc62",
"assets/assets/images/flag_tw.png": "9bc3ddaee5a12c8eb8467beccd2ed6a5",
"assets/assets/images/flag_tz.png": "950ff9649d293d1b2f423c68134bde75",
"assets/assets/images/flag_ua.png": "5393073f061156373de9c127b93ca41e",
"assets/assets/images/flag_ug.png": "f37753b15d534b32e92205ba4fb356ad",
"assets/assets/images/flag_us.png": "e4a75107b2413eda9113052a8eb1daaa",
"assets/assets/images/flag_uy.png": "fb46025c8904fcd52666cadef23483f9",
"assets/assets/images/flag_uz.png": "dfe060d4881a16c50c9937826a1b2a7c",
"assets/assets/images/flag_va.png": "e3cb65103a8be6a903770b620c513e62",
"assets/assets/images/flag_vc.png": "a98ace1d1953a94497e63ec4bf396dbf",
"assets/assets/images/flag_ve.png": "d9c1ebf197431fc7c164ea7fa7aab429",
"assets/assets/images/flag_vn.png": "3c2780a5891c010c2a018672db469191",
"assets/assets/images/flag_vu.png": "aacc435844ead5125b3e78de0cc54981",
"assets/assets/images/flag_ws.png": "c15ea127d3f546bb13dac2dba8884bc0",
"assets/assets/images/flag_ye.png": "82a714ec1cdd86dbe42274e28b63c865",
"assets/assets/images/flag_99.png": "64e2f47f0b63e692685c2f5e220a6c90",
"assets/assets/images/dl22.png": "dfadfaee154d786ade720b4bf70dd367",
"assets/assets/images/dl221.png": "11a7f202714edf2ce07cf30b635078ec",
"assets/assets/images/dl223.png": "6154fbdb9d1c25fe1a205e12b17c46ab",
"assets/assets/images/dl222.png": "c1eae73d11401469b6aa7f4c46b39ce1",
"assets/assets/images/flag_aw.png": "d05bddc6c542fe1561ce415c02a4f73b",
"assets/assets/images/flag_gi.png": "ab3b14a1c731c393ccc309e7962acc3d",
"assets/assets/images/flag_mo.png": "d212249d78a3dc2b561bb4ca71f9ea0d",
"assets/assets/images/flag_ss.png": "978170636ac39aaa84df013012133a2c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/fonts/MaterialIcons-Regular.otf": "1bfae3be6f2cf74aebd02cbbef4945a0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"splash/img/light-1x.png": "89d29c5f11bf87c779d054155d3681bf",
"splash/img/light-2x.png": "b583d3f8e064c5fabdfb850bdac3d250",
"splash/img/light-3x.png": "30ef37830b2a4af83e6d9670ca1801fd",
"splash/img/light-4x.png": "182f019fbdd10a8fd33a91f47f3d8291",
"splash/img/dark-1x.png": "89d29c5f11bf87c779d054155d3681bf",
"splash/img/dark-2x.png": "b583d3f8e064c5fabdfb850bdac3d250",
"splash/img/dark-3x.png": "30ef37830b2a4af83e6d9670ca1801fd",
"splash/img/dark-4x.png": "182f019fbdd10a8fd33a91f47f3d8291",
"splash/img/light-background.png": "bd5f0e47300cf10cc3d58782f651dcdd",
"main.dart.js": "91e47b37f878714ac68d37b820238dcd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "d3a81bfcb3d11d7cbf65cb163bf408b1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
