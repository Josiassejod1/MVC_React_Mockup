const hero = [
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/3/34/MVC2_Blackheart.jpg/revision/latest?cb": "20110914071301",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/b/be/MVC2_Cable.jpg/revision/latest?cb": "20110914072054",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/2/21/MVC2_Captain_America.jpg/revision/latest?cb": "20110914072107",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/3/31/MVC2_Colossus.jpg/revision/latest?cb": "20110914072123",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/c/c3/MVC2_Cyclops.jpg/revision/latest?cb": "20110914072139",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/b/ba/MVC2_Doctor_Doom.jpg/revision/latest?cb": "20110914072159",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/f/f4/MVC2_Gambit.jpg/revision/latest?cb": "20110914072215",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/1/19/MVC2_Hulk.jpg/revision/latest?cb": "20110914072229",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/c/cd/MVC2_Iceman.jpg/revision/latest?cb": "20110914072244",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/6/6b/MVC2_Iron_Man.jpg/revision/latest?cb": "20110914072258",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/1/16/MVC2_Juggernaut.jpg/revision/latest?cb": "20110914072311",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/c/c2/MVC2_Magneto.jpg/revision/latest?cb": "20110914072326",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/6/65/MVC2_Marrow.jpg/revision/latest?cb": "20110914072340",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/d/dc/MVC2_Omega_Red.jpg/revision/latest?cb": "20110914072357",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/4/4b/MVC2_Psylocke.jpg/revision/latest?cb": "20110914063058",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/4/49/MVC2_Rogue.jpg/revision/latest?cb": "20110914063849",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/0/0e/MVC2_Sabretooth.jpg/revision/latest?cb": "20110914064154",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/8/87/MVC2_Sentinel.jpg/revision/latest?cb": "20110914072425",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/1/13/MVC2_Shuma-Gorath.jpg/revision/latest?cb": "20110914072443",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/2/23/MVC2_Silver_Samurai.jpg/revision/latest?cb": "20110914064249",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/9/99/MVC2_Spider-Man.jpg/revision/latest?cb": "20110914072459",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/3/3f/MVC2_Spiral.jpg/revision/latest?cb": "20110914064425",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/9/9a/MVC2_Storm.jpg/revision/latest?cb": "20110914072530",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/9/92/MVC2_Thanos.jpg/revision/latest?cb": "20110914064530",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/a/a7/MVC2_Venom.jpg/revision/latest?cb": "20110914064640",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/e/e1/MVC2_War_Machine.jpg/revision/latest?cb": "20110914064752",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/1/15/MVC2_Wolverine.jpg/revision/latest?cb": "20110914072738",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/2/25/MVC2_Wolverine_Bone.jpg/revision/latest?cb": "20110914072750",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/7/77/MVC2_Gouki.jpg/revision/latest?cb": "20110923045906",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/8/8b/MVC2_Amingo.jpg/revision/latest?cb": "20110923050130",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/4/4d/MVC2_Anakaris.jpg/revision/latest?cb": "20110923050216",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/a/a5/MVC2_B.B.Hood.jpg/revision/latest?cb": "20110923050312",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/3/35/MVC2_Cammy.jpg/revision/latest?cb": "20110923050348",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/4/4f/MVC2_Captain_Commando.jpg/revision/latest?cb": "20110923045946",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/4/4b/MVC2_Nash.jpg/revision/latest?cb": "20110923050615",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/8/87/MVC2_Chun-Li.jpg/revision/latest?cb": "20110923050630",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/8/8c/MVC2_Dan.jpg/revision/latest?cb": "20110923050740",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/c/ca/MVC2_Dhalsim.jpg/revision/latest?cb": "20110923050938",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/b/b2/MVC2_Felicia.jpg/revision/latest?cb": "20110923050839",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/a/a7/MVC2_Guile.jpg/revision/latest?cb": "20110923051156",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/c/c3/MVC2_Hayato.jpg/revision/latest?cb": "20110923051231",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/d/d2/MVC2_Jill.jpg/revision/latest?cb": "20110923051339",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/a/a1/MVC2_Jin.jpg/revision/latest?cb": "20110923051434",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/9/9c/MVC2_Ken.jpg/revision/latest?cb": "20110923051520",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/f/f2/MVC2_Vega.jpg/revision/latest?cb": "20110923051559",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/8/8d/MVC2_Megaman.jpg/revision/latest?cb": "20110923051647",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/2/26/MVC2_Morrigan.jpg/revision/latest?cb": "20110923051714",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/f/f1/MVC2_Roll.jpg/revision/latest?cb": "20110923051734",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/4/4d/MVC2_Ruby_Heart.jpg/revision/latest?cb": "20110923051812",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/5/5b/MVC2_Ryu.jpg/revision/latest?cb": "20110923051830",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/e/ec/MVC2_Sakura.jpg/revision/latest?cb": "20110923052012",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/4/49/MVC2_Servbot.jpg/revision/latest?cb": "20110923052044",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/4/46/MVC2_Sonson.jpg/revision/latest?cb": "20110923052114",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/1/15/MVC2_Strider_Hiryu.jpg/revision/latest?cb": "20110923051909",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/7/7f/MVC2_T.Bonne.jpg/revision/latest?cb": "20110923052135",
  "https://vignette.wikia.nocookie.net/marvelvscapcom/images/2/24/MVC2_Zangief.jpg/revision/latest?cb": "20110923052205"
]

export default hero;