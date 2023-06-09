const {v4:uuidv4} = require('uuid');

db.posts.insertMany([
    {
        
        artist: "intranetgirl",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6262ce157721427.637e2046c2c71.jpg",
        portfolio: "https://www.instagram.com/intranetgirl/?hl=en",
        title: "Inflated Anxiety",
        description: "In this graphic memoir, Alison Bechdel charts her fraught relationship with her late father.\nDistant and exacting, Bruce Bechdel was an English teacher and director of the town funeral home, which Alison and her family referred to as the Fun Home. It was not until college that Alison, who had recently come out as a lesbian, discovered that her father was also gay. A few weeks after this revelation, he was dead, leaving a legacy of mystery for his daughter to resolve.",
      },
    
      {
        
        artist: "nenghuo",
        image: "https://i.ytimg.com/vi/-PNFnJnGlAA/maxresdefault.jpg",
        portfolio: "https://www.instagram.com/nenghuo/",
        title: "Fashion Mask",
        description: "In this graphic memoir, Alison Bechdel charts her fraught relationship with her late father.\nDistant and exacting, Bruce Bechdel was an English teacher and director of the town funeral home, which Alison and her family referred to as the Fun Home. It was not until college that Alison, who had recently come out as a lesbian, discovered that her father was also gay. A few weeks after this revelation, he was dead, leaving a legacy of mystery for his daughter to resolve.",
      },
    
      {
        
        artist: "nenghuo",
        image: "https://i.ytimg.com/vi/0ZbmHRnaJyU/maxresdefault.jpg",
        portfolio: "https://www.instagram.com/nenghuo/",
        title: "Abstract Chrome",
        description: "In this graphic memoir, Alison Bechdel charts her fraught relationship with her late father.\nDistant and exacting, Bruce Bechdel was an English teacher and director of the town funeral home, which Alison and her family referred to as the Fun Home. It was not until college that Alison, who had recently come out as a lesbian, discovered that her father was also gay. A few weeks after this revelation, he was dead, leaving a legacy of mystery for his daughter to resolve.",
      }
])

mongoexport --collection=posts --db=renderedRealms --out=posts.json

mongoimport --db=renderedRealms --collection=posts  --file=posts.json