// ============================================================
//  THE GILDED PERCH — Parrot Data (35 Birds, 13 Species)
// ============================================================

const PARROTS = [
  // ── AFRICAN GREY (4) ──────────────────────────────────────
  {
    id: 1, name: "Atlas", species: "African Grey", speciesSlug: "african-grey",
    age: "3 Years", ageMonths: 36, gender: "Male", price: 2800,
    healthStatus: "Vet-Certified Healthy", featured: true,
    img: "https://placehold.co/600x600/0F3D2E/D4AF37?text=Atlas",
    description: "Atlas is an exceptionally intelligent African Grey with a growing vocabulary of over 80 words and phrases. Hand-raised from hatch under expert avicultural care, he has been socialized extensively with adults and children. His curious, contemplative nature makes daily interactions endlessly rewarding. Comes with full CITES documentation, a 30-day health guarantee, and a personal breeder consultation."
  },
  {
    id: 2, name: "Nova", species: "African Grey", speciesSlug: "african-grey",
    age: "18 Months", ageMonths: 18, gender: "Female", price: 2600,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/0F3D2E/D4AF37?text=Nova",
    description: "Nova is a gentle, inquisitive young African Grey who is at an ideal age to form deep bonds with her new family. She has begun mimicking household sounds with remarkable accuracy and shows extraordinary problem-solving skills. Her sweet, observant temperament makes her ideal for dedicated bird owners."
  },
  {
    id: 3, name: "Echo", species: "African Grey", speciesSlug: "african-grey",
    age: "2 Years", ageMonths: 24, gender: "Male", price: 2900,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/0F3D2E/D4AF37?text=Echo",
    description: "Echo lives up to his name with a stunning repertoire of sounds, whistles, and words. Raised with enrichment toys and consistent environmental stimulation, he exhibits exceptional cognitive development. His expressive red tail and sharp intelligence make him a constant source of wonder and delight."
  },
  {
    id: 4, name: "Zuri", species: "African Grey", speciesSlug: "african-grey",
    age: "4 Years", ageMonths: 48, gender: "Female", price: 3100,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/0F3D2E/D4AF37?text=Zuri",
    description: "Zuri is a mature, confident African Grey with a well-established vocabulary and a deeply trusting nature. She is known among our team for her warmth and her remarkable ability to sense and respond to human emotion. Perfect for an experienced bird owner seeking a profound lifelong companion."
  },

  // ── BLUE AND GOLD MACAW (3) ───────────────────────────────
  {
    id: 5, name: "Rio", species: "Blue and Gold Macaw", speciesSlug: "macaws",
    age: "2 Years", ageMonths: 24, gender: "Male", price: 3500,
    healthStatus: "Vet-Certified Healthy", featured: true,
    img: "https://placehold.co/600x600/1B2A6B/D4AF37?text=Rio",
    description: "Rio is a breathtakingly beautiful Blue and Gold Macaw whose vivid sapphire and aureate plumage commands attention in any setting. Fully weaned, hand-tame, and positively reinforcement trained, he is bold and affectionate in equal measure. His magnificent 3-foot wingspan and warm personality make him a true living masterpiece."
  },
  {
    id: 6, name: "Solara", species: "Blue and Gold Macaw", speciesSlug: "macaws",
    age: "3 Years", ageMonths: 36, gender: "Female", price: 3800,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/1B2A6B/D4AF37?text=Solara",
    description: "Solara is a magnificent female Blue and Gold Macaw who loves to be the center of attention. She has mastered an impressive array of tricks through positive reinforcement training and delights in showing off her abilities. A showstopper by every measure, Solara will enrich any home she graces."
  },
  {
    id: 7, name: "Kai", species: "Blue and Gold Macaw", speciesSlug: "macaws",
    age: "18 Months", ageMonths: 18, gender: "Male", price: 3200,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/1B2A6B/D4AF37?text=Kai",
    description: "Kai is a young, playful Blue and Gold Macaw at the thrilling cusp of full personality development. Already showing signs of high intelligence and bold curiosity, he is an ideal companion for someone who wishes to grow alongside their bird and forge a lifelong bond from an early age."
  },

  // ── SCARLET MACAW (2) ─────────────────────────────────────
  {
    id: 8, name: "Ember", species: "Scarlet Macaw", speciesSlug: "macaws",
    age: "2 Years", ageMonths: 24, gender: "Female", price: 4200,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/7A1A1A/D4AF37?text=Ember",
    description: "Ember is a stunning Scarlet Macaw whose fiery crimson, gold, and cobalt plumage makes her one of the most visually spectacular birds in our aviary. Hand-raised with expert care, she has a bold yet loving personality and is an accomplished talker. Her vivid colors are in their prime, breathtaking in any light."
  },
  {
    id: 9, name: "Phoenix", species: "Scarlet Macaw", speciesSlug: "macaws",
    age: "3 Years", ageMonths: 36, gender: "Male", price: 4500,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/7A1A1A/D4AF37?text=Phoenix",
    description: "Phoenix is a majestic Scarlet Macaw with a flame-bright personality to match his legendary plumage. Sociable, affectionate, and extensively trained using positive reinforcement, he is a bird of exceptional character. Phoenix represents the pinnacle of what this extraordinary species can offer as a companion."
  },

  // ── COCKATOOS (4) ─────────────────────────────────────────
  {
    id: 10, name: "Luna", species: "Umbrella Cockatoo", speciesSlug: "cockatoos",
    age: "2 Years", ageMonths: 24, gender: "Female", price: 3000,
    healthStatus: "Vet-Certified Healthy", featured: true,
    img: "https://placehold.co/600x600/282828/EAEAEA?text=Luna",
    description: "Luna is a snow-white Umbrella Cockatoo of extraordinary gentleness and beauty. She fans her magnificent white crest in greeting and has an endearing habit of dancing to any music with a strong rhythm. Known for forming deep emotional bonds, Luna is the perfect companion for a dedicated bird lover who has time to give."
  },
  {
    id: 11, name: "Milo", species: "Umbrella Cockatoo", speciesSlug: "cockatoos",
    age: "3 Years", ageMonths: 36, gender: "Male", price: 3200,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/282828/EAEAEA?text=Milo",
    description: "Milo is an expressive Umbrella Cockatoo who communicates volumes through his spectacular crest and dramatic vocalizations. Raised in a rich, stimulating environment, he shows exceptional aptitude for socialization and learning. His theatrical personality makes every day in his company a genuine pleasure."
  },
  {
    id: 12, name: "Snow", species: "Moluccan Cockatoo", speciesSlug: "cockatoos",
    age: "4 Years", ageMonths: 48, gender: "Female", price: 3800,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/282828/D4AF37?text=Snow",
    description: "Snow is a rare Moluccan Cockatoo — one of the largest of all cockatoo species — with a delicate salmon-pink crest that blushes deep rose when she is excited. Her gentle disposition and melodious voice are matched only by the extraordinary warmth of her personality. A truly once-in-a-lifetime bird."
  },
  {
    id: 13, name: "Pearl", species: "Sulphur-crested Cockatoo", speciesSlug: "cockatoos",
    age: "5 Years", ageMonths: 60, gender: "Female", price: 2800,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/282828/D4AF37?text=Pearl",
    description: "Pearl is an elegant Sulphur-crested Cockatoo whose brilliant golden crest fans like a diadem. She is highly intelligent, impressively acrobatic, and has an extensive repertoire of tricks and vocalizations built through years of dedicated positive training. Pearl carries herself with the dignity befitting her name."
  },

  // ── AMAZON PARROTS (4) ────────────────────────────────────
  {
    id: 14, name: "Jade", species: "Double Yellow Head Amazon", speciesSlug: "amazon",
    age: "3 Years", ageMonths: 36, gender: "Female", price: 2400,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/1A4A1A/D4AF37?text=Jade",
    description: "Jade is a vibrant Double Yellow Head Amazon considered among the finest talking parrots in the world. Her rich emerald plumage and developing golden crown are as spectacular as her vocal talent. She has mastered numerous phrases with crystal clarity and shows a natural aptitude for music and song."
  },
  {
    id: 15, name: "Samba", species: "Blue-fronted Amazon", speciesSlug: "amazon",
    age: "2 Years", ageMonths: 24, gender: "Male", price: 2200,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/1A4A1A/D4AF37?text=Samba",
    description: "Samba brings the energy and color of the tropics to any home he enters. This Blue-fronted Amazon is a natural performer with an infectious love for music, a talent for mimicry, and an outgoing, playful personality that endears him to everyone he meets."
  },
  {
    id: 16, name: "Diego", species: "Yellow-naped Amazon", speciesSlug: "amazon",
    age: "4 Years", ageMonths: 48, gender: "Male", price: 2600,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/1A4A1A/D4AF37?text=Diego",
    description: "Diego is a masterful Yellow-naped Amazon — a species celebrated as perhaps the most gifted talker among all parrots. His articulate speech, rich vocalizations, and warm personality create daily interactions of genuine depth and humor. Diego is a bird that elevates the definition of companionship."
  },
  {
    id: 17, name: "Verde", species: "Lilac-crowned Amazon", speciesSlug: "amazon",
    age: "18 Months", ageMonths: 18, gender: "Female", price: 2000,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/1A4A1A/D4AF37?text=Verde",
    description: "Verde is a charming young Lilac-crowned Amazon with a subtle, distinguished crown of soft violet and deep green. At an ideal age to form her primary bond, she shows remarkable potential as a companion bird and is already developing her vocal talents with impressive speed."
  },

  // ── ECLECTUS (3) ──────────────────────────────────────────
  {
    id: 18, name: "Ruby", species: "Eclectus", speciesSlug: "eclectus",
    age: "2 Years", ageMonths: 24, gender: "Female", price: 3200,
    healthStatus: "Vet-Certified Healthy", featured: true,
    img: "https://placehold.co/600x600/5A1A1A/D4AF37?text=Ruby",
    description: "Ruby is a breathtaking female Eclectus whose rich crimson and royal blue plumage is unlike any other parrot species on earth. Female Eclectus are celebrated for their calm, dignified, and deeply intuitive nature. Ruby embodies all of these qualities, making her a bird of truly extraordinary distinction."
  },
  {
    id: 19, name: "Emerald", species: "Eclectus", speciesSlug: "eclectus",
    age: "3 Years", ageMonths: 36, gender: "Male", price: 3000,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/0F3D2E/D4AF37?text=Emerald",
    description: "Emerald is a brilliant male Eclectus whose vivid emerald plumage and candy-corn beak seem almost too beautiful to be real. Male Eclectus are gentle, calm, and highly food-motivated, making them exceptional training partners. Emerald's serene presence brings a sense of quiet luxury to any environment."
  },
  {
    id: 20, name: "Scarlet", species: "Eclectus", speciesSlug: "eclectus",
    age: "4 Years", ageMonths: 48, gender: "Female", price: 3400,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/5A1A1A/D4AF37?text=Scarlet",
    description: "Scarlet is a mature, regal female Eclectus with a commanding presence and an aura of quiet intelligence. Her striking crimson plumage reaches its full, spectacular depth at her age, and her beautiful whistling call is the soundtrack of a contented, well-loved bird."
  },

  // ── SUN CONURES (3) ───────────────────────────────────────
  {
    id: 21, name: "Blaze", species: "Sun Conure", speciesSlug: "conures",
    age: "1 Year", ageMonths: 12, gender: "Male", price: 800,
    healthStatus: "Vet-Certified Healthy", featured: true,
    img: "https://placehold.co/600x600/7A4500/D4AF37?text=Blaze",
    description: "Blaze is an incandescent Sun Conure whose plumage transitions from deep saffron at his head to brilliant amber-orange along his wings — a living sunset. Playful, cuddly, and brimming with personality, he lights up any room he occupies. His joyful energy and affectionate nature are completely irresistible."
  },
  {
    id: 22, name: "Sunny", species: "Sun Conure", speciesSlug: "conures",
    age: "8 Months", ageMonths: 8, gender: "Female", price: 750,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/7A4500/D4AF37?text=Sunny",
    description: "Sunny is a spirited young Sun Conure still developing her full adult coloration — a transformation that is a joy to witness. Her warm golden plumage and spirited antics make her utterly irresistible. She is ideal for someone who wants to experience every stage of a Sun Conure's remarkable development."
  },
  {
    id: 23, name: "Flare", species: "Sun Conure", speciesSlug: "conures",
    age: "2 Years", ageMonths: 24, gender: "Male", price: 900,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/7A4500/D4AF37?text=Flare",
    description: "Flare is a fully mature Sun Conure with brilliant, fully-developed adult plumage at its absolute zenith. A confident, demonstrably affectionate bird who loves shoulder time and head scratches, his vivid colors and exuberant personality make him a constant source of warmth and entertainment."
  },

  // ── GREEN CHEEK CONURES (3) ───────────────────────────────
  {
    id: 24, name: "Olive", species: "Green Cheek Conure", speciesSlug: "conures",
    age: "1 Year", ageMonths: 12, gender: "Female", price: 450,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/2A4A1A/D4AF37?text=Olive",
    description: "Olive is a delightful Green Cheek Conure with a charm that belies her compact size. Curious, playful, and irresistibly snuggly, she is a perfect companion for apartment living or for families welcoming their first parrot. Her quiet, calm temperament makes her adaptable to a wide variety of home environments."
  },
  {
    id: 25, name: "Mango", species: "Green Cheek Conure", speciesSlug: "conures",
    age: "6 Months", ageMonths: 6, gender: "Male", price: 420,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/2A4A1A/D4AF37?text=Mango",
    description: "Mango is a vibrant, fearless young Green Cheek Conure in the exciting early stages of personality development. He is bold, playful, and has the most endearing habit of sleeping flat on his back — a sure sign of complete contentment. Young and full of potential, he is ready to bond deeply."
  },
  {
    id: 26, name: "Pico", species: "Green Cheek Conure", speciesSlug: "conures",
    age: "18 Months", ageMonths: 18, gender: "Male", price: 480,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/2A4A1A/D4AF37?text=Pico",
    description: "Pico is a spirited Green Cheek Conure with a personality far larger than his small frame suggests. A talented learner of tricks with an acrobatic nature, he loves to show off his skills for an audience. Entertaining, affectionate, and endlessly surprising — Pico is a constant source of joy."
  },

  // ── LOVEBIRDS (2) ─────────────────────────────────────────
  {
    id: 27, name: "Cupid", species: "Peach-faced Lovebird", speciesSlug: "lovebirds",
    age: "1 Year", ageMonths: 12, gender: "Male", price: 250,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/4A2A1A/D4AF37?text=Cupid",
    description: "Cupid is an enchanting Peach-faced Lovebird with his signature blush-coral face and vivid emerald body. True to his species and his name, he forms incredibly strong bonds and thrives on interaction and affection. Small in stature but immense in personality, Cupid is a gem of the avian world."
  },
  {
    id: 28, name: "Peachy", species: "Peach-faced Lovebird", speciesSlug: "lovebirds",
    age: "8 Months", ageMonths: 8, gender: "Female", price: 240,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/4A2A1A/D4AF37?text=Peachy",
    description: "Peachy is a young, exquisitely coloured Peach-faced Lovebird who fits comfortably in a cupped palm yet fills a room with her presence. Bright, energetic, and wonderfully hand-tame, she is an ideal companion for anyone seeking a deeply affectionate bird in a beautifully compact package."
  },

  // ── BUDGERIGARS (2) ───────────────────────────────────────
  {
    id: 29, name: "Sky", species: "Budgerigar", speciesSlug: "budgerigars",
    age: "8 Months", ageMonths: 8, gender: "Male", price: 120,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/1A3A5A/D4AF37?text=Sky",
    description: "Sky is a stunning sky-blue Budgerigar with impeccable feathering and a gentle, tame disposition. He enjoys soft music, responds with melodious chattering, and has already begun developing his vocabulary. Sky is an ideal first companion bird for all ages and lifestyles — accessible luxury at its finest."
  },
  {
    id: 30, name: "Cloud", species: "Budgerigar", speciesSlug: "budgerigars",
    age: "6 Months", ageMonths: 6, gender: "Female", price: 110,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/1A3A5A/D4AF37?text=Cloud",
    description: "Cloud is a dainty white and silver Budgerigar with delicate grey wing markings and the most serene, soothing disposition. Her melodic song is the perfect soundtrack to a calm home. A graceful, gentle companion who brings daily tranquility and unexpected depth of personality to her owners."
  },

  // ── CAIQUES (2) ───────────────────────────────────────────
  {
    id: 31, name: "Jester", species: "Black-headed Caique", speciesSlug: "caiques",
    age: "1 Year", ageMonths: 12, gender: "Male", price: 1200,
    healthStatus: "Vet-Certified Healthy", featured: true,
    img: "https://placehold.co/600x600/181818/D4AF37?text=Jester",
    description: "Jester is the undisputed clown prince of our aviary. This Black-headed Caique is perpetually entertaining, always discovering new ways to play, wrestle with toys, and make his human family laugh. He surfs on backs, dances on shoulders, and brings a level of joy and mischief that is completely infectious."
  },
  {
    id: 32, name: "Tango", species: "White-bellied Caique", speciesSlug: "caiques",
    age: "2 Years", ageMonths: 24, gender: "Female", price: 1400,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/181818/D4AF37?text=Tango",
    description: "Tango is a vivacious White-bellied Caique with brilliant orange and green plumage and boundless, infectious energy. She has a unique and endearing habit of hopping rather than walking, and her love of wrestling with toys and foraging challenges makes every day in her company a lively, memorable event."
  },

  // ── SENEGAL PARROT (1) ────────────────────────────────────
  {
    id: 33, name: "Kiko", species: "Senegal Parrot", speciesSlug: "senegal",
    age: "2 Years", ageMonths: 24, gender: "Male", price: 900,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/2A3A1A/D4AF37?text=Kiko",
    description: "Kiko is a distinguished Senegal Parrot with a handsome V-shaped yellow-green vest against his rich grey body — a natural tuxedo. Senegal Parrots are celebrated for their deep loyalty and pleasantly quiet nature. Kiko exemplifies these traits, making him an exceptional companion for those who value a calmer, deeply bonded bird."
  },

  // ── QUAKER PARROTS (2) ────────────────────────────────────
  {
    id: 34, name: "Pepper", species: "Quaker Parrot", speciesSlug: "quakers",
    age: "1 Year", ageMonths: 12, gender: "Male", price: 650,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/2A2A3A/D4AF37?text=Pepper",
    description: "Pepper is a charming Quaker Parrot with a spicy personality that keeps everyone thoroughly entertained. Known for their remarkable talking ability and unique nest-building instincts, Quakers like Pepper are truly one-of-a-kind companions. He is already demonstrating impressive vocal development and loves to interact."
  },
  {
    id: 35, name: "Mint", species: "Quaker Parrot", speciesSlug: "quakers",
    age: "8 Months", ageMonths: 8, gender: "Female", price: 620,
    healthStatus: "Vet-Certified Healthy", featured: false,
    img: "https://placehold.co/600x600/2A2A3A/D4AF37?text=Mint",
    description: "Mint is a refreshing young Quaker Parrot with a bright, wonderfully inquisitive nature. She is already showing impressive vocal development and loves to investigate every corner of her environment. Her lively personality and quick learning make her a genuinely exciting bird to bring home."
  }
];

// ── GOOGLE REVIEWS DATA ────────────────────────────────────
const REVIEWS = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    date: "March 2025",
    bird: "Atlas — African Grey",
    avatar: "SM",
    text: "The experience of purchasing Atlas from The Gilded Perch was unlike anything I had expected. From the initial consultation to his arrival, every detail was handled with extraordinary professionalism. Atlas settled in beautifully — the breeder preparation advice was invaluable. Truly a five-star experience."
  },
  {
    name: "James Okonkwo",
    location: "Lagos, Nigeria",
    rating: 5,
    date: "February 2025",
    bird: "Rio — Blue & Gold Macaw",
    avatar: "JO",
    text: "Rio is everything I was promised and more. The Gilded Perch was transparent throughout the entire process. The health certificate, the vet documentation, and the breeder communication were all first-class. I am utterly in love with this bird. Worth every penny."
  },
  {
    name: "Charlotte Beaumont",
    location: "Paris, France",
    rating: 5,
    date: "January 2025",
    bird: "Luna — Umbrella Cockatoo",
    avatar: "CB",
    text: "I was nervous about purchasing such a significant bird online, but The Gilded Perch made me feel completely at ease. Luna arrived healthy, calm, and exactly as described. The follow-up support from the breeder in the weeks after was exceptional. An entirely trustworthy operation."
  },
  {
    name: "Michael Tan",
    location: "Singapore",
    rating: 5,
    date: "December 2024",
    bird: "Jester — Black-headed Caique",
    avatar: "MT",
    text: "Jester is absolutely hilarious and I adore him completely. The Gilded Perch team was knowledgeable and patient throughout the whole process, and they matched me with exactly the right bird for my lifestyle. The ongoing breeder support has been invaluable as I navigate parrot ownership for the first time."
  },
  {
    name: "Amira Hassan",
    location: "Dubai, UAE",
    rating: 5,
    date: "November 2024",
    bird: "Ruby — Eclectus",
    avatar: "AH",
    text: "Ruby is a jewel. Her colours are even more spectacular in person than in the photographs. What impressed me most was the meticulous care The Gilded Perch took in preparing me for Ruby's specific dietary needs before she even arrived. Responsible, ethical, and genuinely passionate about their birds."
  },
  {
    name: "David Ferreira",
    location: "Lisbon, Portugal",
    rating: 5,
    date: "October 2024",
    bird: "Blaze — Sun Conure",
    avatar: "DF",
    text: "Blaze has transformed our home. He is exactly the joyful, warm companion they described. The purchase process was smooth and the communication was prompt and personal. What stands out is that The Gilded Perch truly care about where their birds go — they asked thorough questions to ensure a good fit. That says everything."
  },
  {
    name: "Priya Nair",
    location: "Mumbai, India",
    rating: 5,
    date: "September 2024",
    bird: "Diego — Yellow-naped Amazon",
    avatar: "PN",
    text: "Diego's talking ability is simply astonishing — he had me laughing within the first week. The Gilded Perch provided excellent guidance on his training and dietary requirements. The entire acquisition experience was seamless, transparent, and genuinely enjoyable. I would recommend them unreservedly to anyone."
  },
  {
    name: "Thomas Brennan",
    location: "Dublin, Ireland",
    rating: 5,
    date: "August 2024",
    bird: "Kiko — Senegal Parrot",
    avatar: "TB",
    text: "Kiko is quietly magnificent — the best description I can give. The Gilded Perch team guided me expertly in choosing the right species for my lifestyle, and their recommendation of a Senegal was perfect. The whole process felt personal and considered rather than transactional. A genuinely wonderful company."
  }
];

// ── SPECIES PAGE DATA ──────────────────────────────────────
const SPECIES_INFO = {
  "african-grey": {
    title: "African Grey Parrots",
    subtitle: "The Einstein of the Avian World",
    description: "African Grey Parrots are widely regarded as the most intelligent of all parrot species, renowned for their extraordinary cognitive abilities, emotional depth, and remarkable capacity for language. Native to the rainforests of Central and West Africa, these distinguished birds can develop vocabularies exceeding 1,000 words and demonstrate genuine understanding of context and meaning.",
    lifespan: "50–60 years",
    size: "33 cm (13 in)",
    origin: "Central & West Africa",
    personality: "Intelligent, Sensitive, Loyal",
    care: "Requires significant daily interaction, mental stimulation, and a varied, nutritionally complete diet. African Greys thrive on routine and can be sensitive to change."
  },
  "macaws": {
    title: "Macaws",
    subtitle: "Magnificent, Majestic, Unforgettable",
    description: "Macaws are the largest and most visually spectacular of all parrots, native to the tropical and subtropical forests of Central and South America. Their vivid plumage, powerful personalities, and long lifespans make them among the most coveted companion birds in the world. A macaw is not merely a pet — it is a decades-long commitment and one of the most rewarding relationships imaginable.",
    lifespan: "50–80 years",
    size: "Up to 100 cm (39 in)",
    origin: "Central & South America",
    personality: "Bold, Affectionate, Dramatic",
    care: "Macaws require spacious accommodation, extensive socialization, and significant daily interaction. Their powerful beaks require appropriate enrichment and foraging opportunities."
  },
  "cockatoos": {
    title: "Cockatoos",
    subtitle: "Creatures of Extraordinary Affection",
    description: "Cockatoos are the most emotionally expressive and demonstrably affectionate of all parrot species. Their dramatic crests, snow-white plumage, and intense need for companionship make them unlike any other bird. Native to Australasia, cockatoos are renowned for their intelligence, their extraordinary capacity for love, and — in the right home — their deeply rewarding companionship.",
    lifespan: "40–80 years",
    size: "30–70 cm (12–28 in)",
    origin: "Australasia",
    personality: "Affectionate, Expressive, Devoted",
    care: "Cockatoos require extensive daily interaction and are prone to emotional distress if their social needs are not met. They thrive on routine, affection, and mental stimulation."
  },
  "eclectus": {
    title: "Eclectus Parrots",
    subtitle: "Nature's Most Remarkable Dimorphism",
    description: "Eclectus Parrots are unique among parrots in exhibiting extreme sexual dimorphism — males and females are so different in colour that they were long believed to be separate species. Males display brilliant emerald green plumage; females a stunning crimson and royal blue. Beyond their beauty, Eclectus are renowned for their gentle, dignified temperament and impressive talking ability.",
    lifespan: "30–40 years",
    size: "43 cm (17 in)",
    origin: "Solomon Islands, New Guinea, Australia",
    personality: "Gentle, Calm, Observant",
    care: "Eclectus have specific dietary requirements — a high-fruit, high-vegetable diet is essential. They require mental stimulation but are generally less demanding socially than many other large parrots."
  },
  "amazon": {
    title: "Amazon Parrots",
    subtitle: "The Great Orators of the Parrot World",
    description: "Amazon Parrots are celebrated as the finest talkers in the avian world. Native to Mexico, Central America, and the Caribbean, these vibrant green birds combine exceptional vocal talent with bold, entertaining personalities. Their love of music, speech, and performance makes them extraordinary companions for those who appreciate a lively, interactive bird.",
    lifespan: "40–70 years",
    size: "25–45 cm (10–18 in)",
    origin: "Mexico, Central America, Caribbean",
    personality: "Vocal, Entertaining, Bold",
    care: "Amazons require consistent training, daily socialization, and a varied diet. They are active birds that benefit from regular time outside the cage and plenty of mental enrichment."
  }
};
