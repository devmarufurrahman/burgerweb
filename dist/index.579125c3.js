const burgers = [
    {
        id: 1,
        title: "Blue Cheese Burger",
        price: 235,
        img: "https://www.allrecipes.com/thmb/0WwIQ-X4WstyE4GhBiTXi6DOdDU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2467375-blue-cheese-burgers-Allrecipes-Magazine-1x1-1-bc480833be104db8b1e70ff0aada1d2a.jpg"
    },
    {
        id: 2,
        title: "Best Turkey Burger",
        price: 375,
        img: "https://www.allrecipes.com/thmb/Ub5hA0Ub0Uki7oySIsMVGagmu9U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/39748-Actually-Delicious-Turkey-Burgers-mfs-162-1-b0b36214b3bf44ff95c643feae1d4252.jpg"
    },
    {
        id: 3,
        title: "Lamb Burger",
        price: 270,
        img: "https://www.allrecipes.com/thmb/c91RrlgxzUftp08DivpIf9x0ELk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/236679-lamb-burgers-3x4-487-copy-8911325e3c6f4441932f2938b9d8c77e.jpg"
    },
    {
        id: 4,
        title: "Juiciest Hamburger",
        price: 320,
        img: "https://www.allrecipes.com/thmb/DAQiJqR1FOVMQ9dnFTgVGoOAQ-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/49409-Juiciest-Hamburgers-Ever-crop-mfs-053-2c05e8292c6544139f319147690a8cba.jpg"
    },
    {
        id: 5,
        title: "Venison Burger",
        price: 215,
        img: "https://www.allrecipes.com/thmb/zf0J1u6PRxXIHeLt4QQmm4IWGpI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3627464-0087f549a0c1422995ad143eec7b300a.jpg"
    },
    {
        id: 6,
        title: "Mustard Burger",
        price: 330,
        img: "https://www.allrecipes.com/thmb/Id60zPmB1MSo4yLrgus025xrr0Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/895080-fda0b007962949ad94a898728808a1ab.jpg"
    },
    {
        id: 7,
        title: "Grilling Burger",
        price: 185,
        img: "https://www.allrecipes.com/thmb/zxD40sNn3ztlxAcuq9A1zi7xxn4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9319004-23ee15f466224205ac8489f218637fb7.jpg"
    },
    {
        id: 8,
        title: "Smash Cheese",
        price: 250,
        img: "https://www.seriouseats.com/thmb/6Um1XrGJcYekfU1UmvnjI3MJ6Qw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__04__20170423-ultra-smashed-burger-video-primary2-564cff4ad31e4d5dab5ab68e63deb601.jpg"
    },
    {
        id: 9,
        title: "Broiled Burger",
        price: 310,
        img: "https://www.seriouseats.com/thmb/FMQ6f39arIo5GM5HKZ9J1hXSKe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210607-JUICYBROILEDBURGERS-JANJIGIAN-seriouseats-4-7883fb226a0c49e98aa0df4c31ca7ee1.jpg"
    },
    {
        id: 10,
        title: "Sous Vide Burger",
        price: 330,
        img: "https://www.seriouseats.com/thmb/EAcPG2oxKQ-jLlp8UIa6clPRZWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150702-sous-vide-hamburger-anova-primary-bf5eefff4505446f9cbf33f5f2d9b2e6.jpg"
    },
    {
        id: 11,
        title: "Teriyaki Burger",
        price: 380,
        img: "https://www.seriouseats.com/thmb/UcRt0ylokJ-5z3vtwbPCFoS6aCQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150727-teriyaki-burger-recipe-15-248e854d2dfe445f956747b641e689d7.jpg"
    },
    {
        id: 12,
        title: "Best Patty Melt",
        price: 400,
        img: "https://www.seriouseats.com/thmb/9bkPnBQ5ykXteYKL1RXyBgjiOWM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220919-PattyMelt-AmandaSuarez-hero-b4ae084ea0cb44a9abf3dd89754d93c2.JPG"
    },
    {
        id: 13,
        title: "Bacon Cheese",
        price: 575,
        img: "https://www.seriouseats.com/thmb/135L4OwyC9eIYTFQeeMNWBROLQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__07__20130723-bacon-weave-food-lab-burger-step-by-step-27-4f43a832acb242789dbc4133810a281f.jpg"
    },
    {
        id: 14,
        title: "Portobello Burger",
        price: 325,
        img: "https://www.seriouseats.com/thmb/ZyUkBX0ofQzUQ7NhMEs3QT_mqc4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__09__20120911-222256-portobello-burger-af76188234434fcb8cb1f25fa49014f4.jpg"
    },
    {
        id: 15,
        title: "Insanity Burger",
        price: 725,
        img: "https://www.seriouseats.com/thmb/Po6tpVxaADjvMgyUo7c7OaxlATs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg"
    },
    {
        id: 16,
        title: "Thick and Juicy",
        price: 445,
        img: "https://www.seriouseats.com/thmb/W5wy-Av8Yb33qE1m1MZ0udwfxrc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__04__20160428-memorial-day-burger-recipes-roundup-01-3a2e65d344b94861b8ab1977bbc0bfc1.jpg"
    },
    {
        id: 17,
        title: "Vegan Burger",
        price: 260,
        img: "https://www.seriouseats.com/thmb/NnlVsqJFobpCwr_Mt9NNEtCUUQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__03__20120325-veggie-burgers-2-001-4d11bc4d43dc4fb1ad08b75f7ea84d59.jpg"
    },
    {
        id: 18,
        title: "Buffalo Chicken",
        price: 320,
        img: "https://www.seriouseats.com/thmb/nXYTU-xngCwJz5SzSMvxSgg5p-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__06__20130627-257426-buffalo-chicken-burgers-0d61bc12c816420eb048f95775e71f0a.jpg"
    },
    {
        id: 19,
        title: "Surf N' Turf Burger",
        price: 550,
        img: "https://www.seriouseats.com/thmb/A73YYV6OxD6Jo9Afmm4LtGeulDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__06__20130619-lobster-burger-hot-brown-2-30ffca4bc1d041df92caee500b249496.jpg"
    },
    {
        id: 20,
        title: "Black Bean Burger",
        price: 475,
        img: "https://www.seriouseats.com/thmb/Z_dp1yffzMUzEwY_WsWpRwnSbTk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__03__20210322-BlackBean-Burgers-Andrew_Janjigian-18-4785208fd31e47118e2669bc7ec2aa71.jpg"
    }
];

//# sourceMappingURL=index.579125c3.js.map
