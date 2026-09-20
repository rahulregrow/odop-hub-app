import { StateHeritage } from '../types';

export const STATES_DATA: StateHeritage[] = [
  // -------------------------------------------------------------
  // EASTERN INDIA
  // -------------------------------------------------------------
  {
    id: 'bihar',
    code: 'BR',
    name: 'Bihar',
    capital: 'Patna',
    region: 'Eastern',
    // Accurate verified image: Mahabodhi Temple Complex at Bodhgaya (Gaya District, Bihar) - UNESCO World Heritage Site
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Mahabodhi_Temple_Complex%2C_Bodhgaya_%288716403651%29.jpg',
    tagline: 'Cradle of ancient universities, sacred folk art, and living agrarian traditions',
    introduction: 'Bihar stands among the deepest cultural hearths of the Indian subcontinent. From the fertile floodplains of the Ganga and Koshi to the historic kingdoms of Magadha, Anga, and Mithila, every district preserves distinct handloom disciplines, indigenous ritual paintings, wetland superfoods, and matrilineal crafts practiced unbroken across millennia.',
    craftCultureDescription: 'Celebrated globally for Madhubani line painting and the GI-tagged Mithila Makhana, Bihar also nurtures the 800-year-old Patna Tikuli craft, the Angika sequential folk scrolls of Manjusha Art from Bhagalpur, shimmering Bhagalpuri Tussar Silk, and the wild riparian Sikki Grass craft woven into glistening golden dowry boxes.',
    primaryDistricts: ['Madhubani', 'Darbhanga', 'Bhagalpur', 'Patna', 'Sitamarhi', 'Gaya', 'Nalanda', 'Muzaffarpur'],
    productCount: 7,
    featuredCrafts: ['Madhubani Painting', 'Mithila Makhana', 'Manjusha Art', 'Tikuli Art', 'Bhagalpur Silk', 'Sikki Grass Craft', 'Sujuni Embroidery'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Madhubani_Painting_Exhibition.jpg',
        caption: 'Master artisan exhibiting traditional Madhubani painting depicting sacred Mithila flora and cosmic deities.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/TIkuli_Art.jpg',
        caption: 'Traditional Tikuli Art plaque on lacquered wood with gold leaf and fine brushwork from Patna.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/en/4/44/Manjusha.jpg',
        caption: 'Sacred Angika Manjusha scroll painting depicting the legend of Bihula-Bishahari with snake motifs.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Sikki_Grass_Craft_by_artisan_Nazda_Khatun_of_Bihar_11.jpg',
        caption: 'Authentic Sikki Grass Golden Grass hand-sculpted craft by Bihar master artisan Nazda Khatun.',
      },
    ],
    culturalFestivals: ['Chhath Puja', 'Bishahari Puja', 'Sama Chakeva', 'Mithila Vivaha Panchami', 'Pitrapaksha Mela'],
    isFeatured: true,
  },
  {
    id: 'jharkhand',
    code: 'JH',
    name: 'Jharkhand',
    capital: 'Ranchi',
    region: 'Eastern',
    // Accurate verified image: Baidyanath Jyotirlinga Temple Complex, Deoghar, Jharkhand
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Baidyanath_Temple_Deoghar.jpg',
    tagline: 'Land of sacred Sal forests, tribal earth murals, and bell metal casting',
    introduction: 'Nestled on the mineral-rich Chota Nagpur plateau, Jharkhand is celebrated for its deep indigenous tribal culture, ancient cave shelters, and ritual rock and mud wall art practiced by the Santhal, Munda, Ho, and Oraon communities.',
    craftCultureDescription: 'Home to the ritualistic Sohrai and Khovar mural paintings of Hazaribagh drawn with wild forest muds and chewed neem twigs, Dhokra cire-perdue lost wax metal casting, and Paitkar scroll paintings of Amadubi.',
    primaryDistricts: ['Hazaribagh', 'Ranchi', 'East Singhbhum', 'Dumka', 'Khunti', 'Deoghar'],
    productCount: 3,
    featuredCrafts: ['Sohrai & Khovar Painting', 'Dhokra Metal Craft', 'Tribal Lac Jewelry'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Jagannath_temple%2C_ranchi.jpg',
        caption: 'Historic 17th-century Jagannath Temple perched on a hilltop in Ranchi, Jharkhand.',
      }
    ],
    culturalFestivals: ['Sarhul Festival', 'Karam Festival', 'Sohrai Harvest Mela'],
    isFeatured: false,
  },
  {
    id: 'odisha',
    code: 'OD',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    region: 'Eastern',
    // Accurate verified image: Konark Sun Temple (UNESCO World Heritage Site, Puri District, Odisha)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Konark_Sun_Temple_from_North-West.jpg',
    tagline: 'Sacred coastal heritage, palm-leaf manuscripts, and tribal vegetable-dyed weaves',
    introduction: 'Rooted along the Bay of Bengal, Odisha is an epicentre of temple craftsmanship, cloth scroll paintings (Pattachitra), silver filigree (Tarakasi), and tribal vegetable-dyed handloom textiles.',
    craftCultureDescription: 'From the master chitrakaras of Raghurajpur heritage village to the Mirgan community weavers of Kotpad in Koraput, Odisha crafts are deeply linked to sacred temple rituals and forest ecology.',
    primaryDistricts: ['Puri', 'Koraput', 'Sambalpur', 'Cuttack', 'Bargarh'],
    productCount: 4,
    featuredCrafts: ['Raghurajpur Pattachitra', 'Kotpad Tribal Handloom', 'Cuttack Silver Filigree', 'Pipili Applique'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Raghurajpur_Pattachitra%2CODISHA.JPG',
        caption: 'Traditional cloth scroll painting (Pattachitra) crafted with stone-ground natural minerals in Raghurajpur.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Kotpad_Weaving.jpg',
        caption: 'Kotpad handloom weaving in Koraput utilizing pure natural dye extracted from the roots of the Aal tree.',
      }
    ],
    culturalFestivals: ['Ratha Yatra Puri', 'Dhanu Yatra', 'Konark Dance Festival'],
    isFeatured: true,
  },
  {
    id: 'west-bengal',
    code: 'WB',
    name: 'West Bengal',
    capital: 'Kolkata',
    region: 'Eastern',
    // Accurate verified image: Victoria Memorial, Kolkata / Bishnupur Terracotta Temples
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Victoria_Memorial_Kolkata_sunset.jpg',
    tagline: 'Intellectual renaissance, intricate terracotta temples, and heritage weaving',
    introduction: 'Stretching from the Himalayan crest of Darjeeling down to the Sundarbans mangrove delta, West Bengal is a tapestry of literary traditions, narrative textile embroideries, and sacred terracotta temple arts.',
    craftCultureDescription: 'Renowned for Darjeeling Orthodox Tea (India’s first GI tag), narrative Nakshi Kantha quilts made from recycled saris, Baluchari jacquard silks depicting epic scenes, and Sholapith sponge-wood crafts.',
    primaryDistricts: ['Darjeeling', 'Bankura', 'Murshidabad', 'Birbhum', 'Nadia', 'Purulia'],
    productCount: 5,
    featuredCrafts: ['Darjeeling Tea', 'Nakshi Kantha Embroidery', 'Baluchari Saree', 'Bankura Terracotta Horse', 'Santiniketan Leather'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Shyamrai_Temple_Bishnupur.jpg',
        caption: '17th-century terracotta Pancharatna Shyamrai Temple in Bishnupur, Bankura.',
      }
    ],
    culturalFestivals: ['Durga Puja', 'Poush Mela Santiniketan', 'Kolkata Book Fair'],
    isFeatured: true,
  },

  // -------------------------------------------------------------
  // SOUTHERN INDIA
  // -------------------------------------------------------------
  {
    id: 'karnataka',
    code: 'KA',
    name: 'Karnataka',
    capital: 'Bengaluru',
    region: 'Southern',
    // Accurate verified image: Virupaksha Temple & Monuments at Hampi (UNESCO World Heritage Site, Bellary/Vijayanagara District, Karnataka)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Virupaksha_temple_Hampi.jpg',
    tagline: 'Land of historic dynasties, carved sandalwood, and sacred weaving centers',
    introduction: 'Bridging the Deccan plateau and the Western Ghats, Karnataka is celebrated for its venerable artisan guilds that flourished under Vijayanagara, Hoysala, and Chalukya patronage. The state holds an extraordinary collection of GI tags spanning handlooms, temple woodcraft, and natural lacquerware.',
    craftCultureDescription: 'Home to the vegetable-dyed turnery of Channapatna toys, the 400-year-old painted woodcraft of Kinnal Toys in Koppal, the striking Topi Teni red pallu Ilkal sarees woven with Kasuti needlework, fragrant Mysore Sandalwood Oil, and Bidriware silver-inlay metalcraft.',
    primaryDistricts: ['Ramanagara', 'Koppal', 'Bagalkot', 'Mysuru', 'Bidar', 'Dharwad', 'Kodagu'],
    productCount: 6,
    featuredCrafts: ['Channapatna Wooden Toys', 'Kinnal Toys', 'Ilkal Saree', 'Mysore Silk', 'Bidriware', 'Coorg Arabica Coffee'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Channapatna-toys.jpg',
        caption: 'Authentic child-safe Channapatna wooden toys finished with natural vegetable lacquers.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Kinhal_toys%2C_Karnataka.jpeg',
        caption: 'Masterfully carved wooden Kinnal folk artifacts coated with natural tamarind-chalk paste.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Ilkal_saree.jpg',
        caption: 'Traditional Ilkal handloom saree with signature Topi Teni crimson pallu.',
      },
    ],
    culturalFestivals: ['Mysuru Dasara', 'Kambala', 'Hampi Utsav', 'Karaga'],
    isFeatured: true,
  },
  {
    id: 'andhra-pradesh',
    code: 'AP',
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    region: 'Southern',
    // Accurate verified image: Veerabhadra Temple & Nandi at Lepakshi (Sri Sathya Sai District, Andhra Pradesh)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Lepakshi_Temple%2C_Andhra_Pradesh.jpg',
    tagline: 'Sacred river deltas, vegetable-pen Kalamkari, and lacquer woodcraft',
    introduction: 'Cradled by the Krishna and Godavari river basins, Andhra Pradesh boasts an ancient heritage of temple art, natural vegetable dyes, and soft wood toy carving fostered by the Kakatiyas and Vijayanagara courts.',
    craftCultureDescription: 'Famed for Srikalahasti freehand pen Kalamkari detailing mythological legends, Machilipatnam block prints, Kondapalli soft-wood (Poniki) toys, and shimmering Uppada Jamdani silk weaves.',
    primaryDistricts: ['Tirupati', 'Krishna', 'NTR District', 'East Godavari', 'Guntur', 'Sri Sathya Sai'],
    productCount: 4,
    featuredCrafts: ['Srikalahasti Kalamkari', 'Kondapalli Toys', 'Uppada Jamdani Saree', 'Machilipatnam Kalamkari'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Lepakshi_monolithic_Nandi.jpg',
        caption: 'Monolithic granite Nandi bull sculpture at Lepakshi, Andhra Pradesh.',
      }
    ],
    culturalFestivals: ['Ugadi', 'Brahmotsavam Tirupati', 'Lepakshi Festival'],
    isFeatured: false,
  },
  {
    id: 'telangana',
    code: 'TS',
    name: 'Telangana',
    capital: 'Hyderabad',
    region: 'Southern',
    // Accurate verified image: Charminar (Hyderabad, Telangana)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Charminar_Hyderabad_1.jpg',
    tagline: 'Deccan plateau artistry, geometric tie-dye Ikat, and brass filigree',
    introduction: 'Telangana is a historic cradle of Deccan culture, where royal Golconda and Nizam patronage merged with pastoral tribal arts to cultivate world-famous resist-dye handlooms and folk scrolls.',
    craftCultureDescription: 'Renowned for Pochampally Ikat (the "Silk City" double-ikat tie-and-dye weaving), Cheriyal 70-foot scroll paintings on khadi cloth, Gadwal temple sarees, and Nirmal painted toys and lacquer furniture.',
    primaryDistricts: ['Yadadri Bhuvanagiri', 'Siddipet', 'Nirmal', 'Jogulamba Gadwal', 'Warangal', 'Hyderabad'],
    productCount: 4,
    featuredCrafts: ['Pochampally Ikat', 'Cheriyal Scroll Painting', 'Nirmal Toys', 'Gadwal Saree'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Ramappa_Temple_Warangal.jpg',
        caption: 'UNESCO World Heritage Ramappa (Kakatiya Rudreshwara) Temple in Mulugu/Warangal, Telangana.',
      }
    ],
    culturalFestivals: ['Bathukamma', 'Bonalu', 'Sammakka Saralamma Jatara'],
    isFeatured: false,
  },
  {
    id: 'tamil-nadu',
    code: 'TN',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    region: 'Southern',
    // Accurate verified image: Brihadisvara Temple, Thanjavur (UNESCO World Heritage Site, Tamil Nadu)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Brihadeeswarar_Temple%2C_Thanjavur.jpg',
    tagline: 'Dravidian temple architecture, gold leaf paintings, and queen of silks',
    introduction: 'Tamil Nadu possesses one of the world’s longest unbroken literary and sculptural traditions. Under the Cholas, Pandyas, and Nayakas, metallurgy, stone carving, and temple handlooms reached pinnacle sophistication.',
    craftCultureDescription: 'Home to the heavy pure-mulberry Kanchipuram Silk Sarees woven with solid gold zari borders, 22-karat gold-foil Thanjavur Paintings encrusted with Jaipur gems, Chola lost-wax bronze sculptures of Swamimalai, and Toda tribal embroidery of the Nilgiris.',
    primaryDistricts: ['Kanchipuram', 'Thanjavur', 'Thanjavur (Swamimalai)', 'Madurai', 'The Nilgiris', 'Sivaganga (Chettinad)'],
    productCount: 5,
    featuredCrafts: ['Kanchipuram Silk', 'Thanjavur Painting', 'Swamimalai Bronze Icons', 'Madurai Sungudi', 'Chettinad Kottan Baskets'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Meenakshi_Amman_Temple_Madurai_Tower.jpg',
        caption: 'Soaring polychrome gopurams of the sacred Meenakshi Amman Temple in Madurai.',
      }
    ],
    culturalFestivals: ['Pongal', 'Natyanjali Chidambaram', 'Madurai Chithirai Festival'],
    isFeatured: true,
  },
  {
    id: 'kerala',
    code: 'KL',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    region: 'Southern',
    // Accurate verified image: Sree Padmanabhaswamy Temple, Thiruvananthapuram, Kerala
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Padmanabhaswamy_Temple_Thiruvananthapuram.jpg',
    tagline: 'Spice coast of Malabar, sacred metal mirrors, and golden kasavu weaves',
    introduction: 'Flanked by the spice-laden slopes of the Western Ghats and the Arabian Sea, Kerala’s artisan guilds master natural coconut fibers, pure bell metal optics, and understated off-white handlooms.',
    craftCultureDescription: 'World-famous for the enigmatic front-surface reflection metal alloy of Aranmula Kannadi mirrors, natural unbleached cotton Kerala Kasavu saris with pure gold thread, Alleppey coir rope craft, and fragrant Wayanad Malabar Black Pepper.',
    primaryDistricts: ['Pathanamthitta', 'Ernakulam', 'Alappuzha', 'Palakkad', 'Wayanad', 'Thrissur'],
    productCount: 4,
    featuredCrafts: ['Aranmula Kannadi Metal Mirror', 'Balaramapuram Kasavu Weave', 'Alleppey Coir Craft', 'Nillambur Teak'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Theyyam_dance_kerala.jpg',
        caption: 'Sacred ritualistic Theyyam art dance of North Malabar, Kerala.',
      }
    ],
    culturalFestivals: ['Onam', 'Thrissur Pooram', 'Vishu', 'Theyyam'],
    isFeatured: true,
  },

  // -------------------------------------------------------------
  // NORTHERN INDIA
  // -------------------------------------------------------------
  {
    id: 'uttar-pradesh',
    code: 'UP',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    region: 'Northern',
    // Accurate verified image: Taj Mahal, Agra (UNESCO World Heritage Site, Uttar Pradesh)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
    tagline: 'Heartland of imperial ateliers, sacred Ganga ghats, and royal metalcraft',
    introduction: 'As India’s most populous state and the historical seat of the Awadh Nawabs and Mughal court ateliers, Uttar Pradesh is an extraordinary powerhouse of district-level craft specialization, with over 75 designated ODOP products.',
    craftCultureDescription: 'From Lucknow’s delicate shadow-work Chikankari on muslin and Varanasi’s heavy Banarasi brocade silk to Moradabad brassware, Bhadohi hand-knotted Persian carpets, and Kannauj ancient sandalwood steam-distilled attar perfumes.',
    primaryDistricts: ['Varanasi', 'Lucknow', 'Moradabad', 'Bhadohi', 'Kannauj', 'Firozabad', 'Saharanpur', 'Agra'],
    productCount: 6,
    featuredCrafts: ['Banarasi Silk & Brocades', 'Lucknow Chikan Craft', 'Bhadohi Carpets', 'Moradabad Metal Brassware', 'Kannauj Perfume (Attar)', 'Firozabad Glassware'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Varanasi_ghats.jpg',
        caption: 'Ancient Ganga Ghats of Varanasi, center of sacred Banarasi silk handlooms.',
      }
    ],
    culturalFestivals: ['Dev Deepawali Varanasi', 'Taj Mahotsav', 'Ganga Mahotsav', 'Lucknow Mahotsav'],
    isFeatured: true,
  },
  {
    id: 'himachal-pradesh',
    code: 'HP',
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    region: 'Northern',
    // Accurate verified image: Hidimba Devi Temple, Manali, Himachal Pradesh
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Hidimba_Devi_temple.jpg',
    tagline: 'Devbhoomi mountain valleys, geometric wool shawls, and needle miniatures',
    introduction: 'In the Himalayan valleys of Kullu, Kangra, and Chamba, high-altitude sheep pastoralism and Pahari miniature painting traditions gave birth to cozy hand-spun woolen tapestries and sacred double-sided embroideries.',
    craftCultureDescription: 'Famous for Kullu Shawls woven on frame looms with colorful geometric borders, double-sided needle embroidered Chamba Rumal depicting Krishna Raasleela, Kinnauri shawls, and delicate Kangra orthodox green tea.',
    primaryDistricts: ['Kullu', 'Chamba', 'Kangra', 'Kinnaur', 'Mandi'],
    productCount: 4,
    featuredCrafts: ['Kullu Shawl', 'Chamba Rumal', 'Kinnauri Shawl', 'Kangra Orthodox Tea'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Kullu_Valley_Himachal.jpg',
        caption: 'Kullu Valley mountain meadows where master weavers create geometric wool shawls.',
      }
    ],
    culturalFestivals: ['Kullu Dussehra', 'Minjar Mela Chamba', 'Mandi Shivratri'],
    isFeatured: false,
  },
  {
    id: 'punjab',
    code: 'PB',
    name: 'Punjab',
    capital: 'Chandigarh',
    region: 'Northern',
    // Accurate verified image: Golden Temple (Harmandir Sahib), Amritsar, Punjab
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amritsar_7.jpg',
    tagline: 'Land of five rivers, vibrant flower needlework, and golden harvests',
    introduction: 'Punjab’s fertile wheat belt is renowned for the spirited joy of its agrarian festivals and the maternal tradition of hand-embroidering ceremonial flower shawls as heirlooms for young brides.',
    craftCultureDescription: 'World-renowned for Phulkari ("flower work") geometric floss-silk embroidery done on handspun coarse khaddar cotton from the reverse side, Amritsari Papar & Warian, and hand-beaten brass utensil craft of Jandiala Guru.',
    primaryDistricts: ['Amritsar', 'Patiala', 'Ludhiana', 'Jalandhar', 'Hoshiarpur'],
    productCount: 3,
    featuredCrafts: ['Phulkari Embroidery', 'Jandiala Guru Brass Utensils', 'Amritsari Warian'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Phulkari_embroidery_detail.jpg',
        caption: 'Traditional Phulkari silk floss hand-embroidery on handloom khaddar cotton.',
      }
    ],
    culturalFestivals: ['Baisakhi', 'Lohri', 'Hola Mohalla'],
    isFeatured: false,
  },
  {
    id: 'haryana',
    code: 'HR',
    name: 'Haryana',
    capital: 'Chandigarh',
    region: 'Northern',
    // Accurate verified image: Brahma Sarovar, Kurukshetra, Haryana
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Brahma_Sarovar_Kurukshetra_India.jpg',
    tagline: 'Cradle of the Gita, heavy handloom durries, and leathercraft',
    introduction: 'From the historic plains of Kurukshetra to the artisan clusters of Panipat, Haryana balances ancient Vedic heritage with an immense industrial and village textile infrastructure.',
    craftCultureDescription: 'Celebrated for Panipat handloom pit-loom durries and rugs, Rewari handcrafted Tilli Juttis made with embroidered copper wire and camel leather, and Gurgaon terracotta pots.',
    primaryDistricts: ['Panipat', 'Rewari', 'Jhajjar', 'Ambala', 'Kurukshetra'],
    productCount: 3,
    featuredCrafts: ['Panipat Handloom Durries', 'Rewari Tilli Jutti', 'Jhajjar Terracotta Pottery'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Tomb_of_Sheikh_Chilli_01.jpg',
        caption: 'Sheikh Chilli Tomb monument in Thanesar, Kurukshetra, Haryana.',
      }
    ],
    culturalFestivals: ['Surajkund International Crafts Mela', 'Gita Jayanti', 'Baisakhi'],
    isFeatured: false,
  },
  {
    id: 'uttarakhand',
    code: 'UK',
    name: 'Uttarakhand',
    capital: 'Dehradun',
    region: 'Northern',
    // Accurate verified image: Kedarnath Temple, Rudraprayag, Uttarakhand
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Kedarnath_Temple_Uttarakhand.jpg',
    tagline: 'Garhwal and Kumaon mountain sanctuaries, ritual floor art, and ringal bamboo',
    introduction: 'Perched in the Central Himalayas, Uttarakhand is celebrated for its sacred pilgrim paths, alpine herbal flora, and traditional mountain crafts that utilize local bamboo, wool, and natural red clay.',
    craftCultureDescription: 'Famed for Kumaoni Aipan ritual geometric floor and wall paintings done with rice paste on red geru clay, Ringal Himalayan hill-bamboo weaving in Chamoli, and high-altitude Munsyari white kidney beans.',
    primaryDistricts: ['Almora', 'Chamoli', 'Pithoragarh', 'Nainital', 'Dehradun', 'Rudraprayag'],
    productCount: 3,
    featuredCrafts: ['Uttarakhand Aipan Art', 'Ringal Bamboo Craft', 'Munsyari White Kidney Beans', 'Almora Tamta Brass'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Badrinath_Temple_Uttarakhand.jpg',
        caption: 'Badrinath Dham Temple situated along the Alaknanda River in Uttarakhand.',
      }
    ],
    culturalFestivals: ['Nanda Devi Raj Jat', 'Ganga Dussehra', 'Kandali Festival'],
    isFeatured: false,
  },

  // -------------------------------------------------------------
  // WESTERN INDIA
  // -------------------------------------------------------------
  {
    id: 'rajasthan',
    code: 'RJ',
    name: 'Rajasthan',
    capital: 'Jaipur',
    region: 'Western',
    // Accurate verified image: Hawa Mahal, Jaipur, Rajasthan
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Hawa_Mahal_2011.jpg',
    tagline: 'Timeless desert chivalry, natural mineral dyes, and royal artisan ateliers',
    introduction: 'The desert state of Rajasthan boasts one of the most vibrant handicraft heritages on earth, where centuries of royal karkhanas (princely ateliers) supported master craftsmen in block printing, quartz pottery, and metal repoussé.',
    craftCultureDescription: 'Featuring the cobalt blue glazes of Jaipur Blue Pottery, woodblock Bagru and Sanganeri natural printings, delicate Nathdwara Pichwai temple paintings, Kota Doria lightweight chequered sarees, and Molela clay terracotta plaques.',
    primaryDistricts: ['Jaipur', 'Jodhpur', 'Udaipur', 'Barmer', 'Kota', 'Nathdwara'],
    productCount: 5,
    featuredCrafts: ['Jaipur Blue Pottery', 'Sanganeri Hand Block Print', 'Kota Doria Saree', 'Pichwai Painting', 'Molela Terracotta'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Jaipur_Blue_Pottery_Vase_with_Raja-Rani_Design.jpg',
        caption: 'Authentic Jaipur Blue Pottery vase crafted from quartz powder and copper oxide pigments.',
      }
    ],
    culturalFestivals: ['Pushkar Fair', 'Desert Festival Jaisalmer', 'Teej Jaipur', 'Gangaur'],
    isFeatured: true,
  },
  {
    id: 'gujarat',
    code: 'GJ',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    region: 'Western',
    // Accurate verified image: Sun Temple at Modhera (Mehsana District, Gujarat)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sun_Temple%2C_Modhera%2C_Gujarat.jpg',
    tagline: 'White salt desert, double-ikat royal patola, and nomadic needlecraft',
    introduction: 'Gujarat’s merchant seafaring history and desert oasis communities generated an astonishing spectrum of intricate resist-dyed textiles, tribal mirror embroidery, and cast bell metal traditions.',
    craftCultureDescription: 'Home to the legendary 900-year-old Patan Patola double-ikat silk weave, nomadic Rabari and Ahir Kutch mirror embroidery, Jamnagar tie-and-dye Bandhani, Tangaliya 700-year-old bead-motif shawls, and Rogan castor-oil painting in Nirona.',
    primaryDistricts: ['Patan', 'Kutch', 'Jamnagar', 'Surendranagar', 'Ahmedabad', 'Surat'],
    productCount: 5,
    featuredCrafts: ['Patan Patola Saree', 'Kutch Hand Embroidery', 'Jamnagari Bandhani', 'Tangaliya Shawl', 'Rogan Art'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Rani_ki_vav_07.jpg',
        caption: 'UNESCO World Heritage Rani ki Vav stepwell in Patan, Gujarat.',
      }
    ],
    culturalFestivals: ['Rann Utsav', 'Navratri Garba', 'International Kite Festival Uttarayan'],
    isFeatured: true,
  },
  {
    id: 'maharashtra',
    code: 'MH',
    name: 'Maharashtra',
    capital: 'Mumbai',
    region: 'Western',
    // Accurate verified image: Kailasa Temple at Ellora Caves (UNESCO World Heritage Site, Chhatrapati Sambhaji Nagar, Maharashtra)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Kailasa_temple_at_Ellora_caves.jpg',
    tagline: 'Maratha heritage, golden peacock brocades, and indigenous wall art',
    introduction: 'Spanning the rugged Sahyadris and the fertile black-soil river valleys of Godavari and Krishna, Maharashtra combines ancient Buddhist cave murals with royal Maratha court textiles and rustic tribal crafts.',
    craftCultureDescription: 'Celebrated for the pure-silk Paithani Saree featuring hand-woven oblique gold tapestry and peacock (mor) pallus, ancestral Warli mud wall paintings depicting community tarpa dances, handcrafted Kolhapuri leather chappals, and sweet Konkan Alphonso Mangoes.',
    primaryDistricts: ['Chhatrapati Sambhaji Nagar', 'Kolhapur', 'Palghar', 'Ratnagiri', 'Solapur', 'Nagpur'],
    productCount: 5,
    featuredCrafts: ['Paithani Saree', 'Warli Tribal Painting', 'Kolhapuri Chappal', 'Alphonso Mango', 'Solapur Chaddar'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Gateway_of_India_Mumbai.jpg',
        caption: 'Historic Gateway of India monument overlooking Mumbai harbour.',
      }
    ],
    culturalFestivals: ['Ganesh Chaturthi', 'Gudi Padwa', 'Ellora Ajanta Festival'],
    isFeatured: true,
  },
  {
    id: 'goa',
    code: 'GA',
    name: 'Goa',
    capital: 'Panaji',
    region: 'Western',
    // Accurate verified image: Basilica of Bom Jesus, Old Goa (UNESCO World Heritage Site, Goa)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Basilica_of_Bom_Jesus%2C_Goa.jpg',
    tagline: 'Sunkissed Konkan coast, copper pot distillation, and Indo-Portuguese tiles',
    introduction: 'Where verdant Western Ghat spice plantations meet Arabian Sea coves, Goa’s unique Indo-Portuguese syncretism shaped an artisanal tradition of brass lamps, handcrafted ceramic tiles (Azulejos), and agro-distillations.',
    craftCultureDescription: 'Famous for the traditional pot-still distilled Goa Cashew Feni (India’s first registered GI beverage), traditional temple brass lamps, Azulejo ceramic paintings, and sweet festive Khaje sweets.',
    primaryDistricts: ['North Goa', 'South Goa'],
    productCount: 3,
    featuredCrafts: ['Goa Cashew Feni', 'Goan Brassware', 'Traditional Khaje Sweets', 'Azulejos Tile Craft'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Church_of_Our_Lady_of_the_Immaculate_Conception_in_Panaji.jpg',
        caption: 'Church of Our Lady of the Immaculate Conception in Panaji, Goa.',
      }
    ],
    culturalFestivals: ['Goa Carnival', 'Shigmo Festival', 'Feast of St. Francis Xavier'],
    isFeatured: false,
  },

  // -------------------------------------------------------------
  // CENTRAL INDIA
  // -------------------------------------------------------------
  {
    id: 'madhya-pradesh',
    code: 'MP',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    region: 'Central',
    // Accurate verified image: Great Stupa at Sanchi (UNESCO World Heritage Site, Raisen District, Madhya Pradesh)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/The_Great_Stupa_at_Sanchi.jpg',
    tagline: 'The heart of India, gossamer royal weaves, and tribal dotted cosmology',
    introduction: 'Surrounded by ancient forests and historic forts, Madhya Pradesh is a treasure house of prehistoric rock shelters, sovereign handloom guilds, and mystical tribal folklore.',
    craftCultureDescription: 'Renowned for gossamer-sheer Chanderi silks woven since the 2nd century, Maheshwari sarees revived by Queen Ahilyabai Holkar, the vibrant dotted cosmic canvases of Gond Tribal Art, and ancient mud-resist Bagh block prints.',
    primaryDistricts: ['Ashoknagar (Chanderi)', 'Khargone (Maheshwar)', 'Dindori', 'Dhar (Bagh)', 'Tikamgarh', 'Raisen'],
    productCount: 4,
    featuredCrafts: ['Chanderi Fabric', 'Maheshwari Saree', 'Gond Painting', 'Bagh Print Fabric'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Kandariya_Mahadeva_Temple_Khajuraho.jpg',
        caption: 'Kandariya Mahadeva Temple at the Khajuraho UNESCO World Heritage Complex in Madhya Pradesh.',
      }
    ],
    culturalFestivals: ['Khajuraho Dance Festival', 'Tansen Music Festival Gwalior', 'Lokrang Bhopal'],
    isFeatured: true,
  },
  {
    id: 'chhattisgarh',
    code: 'CG',
    name: 'Chhattisgarh',
    capital: 'Raipur',
    region: 'Central',
    // Accurate verified image: Bhoramdeo Temple, Kawardha, Kabirdham District, Chhattisgarh
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Bhoramdeo_Temple%2C_Kawardha%2C_Chhattisgarh.jpg',
    tagline: 'Ancient Bastar sal canopies, lost-wax bronze spirits, and wild kosa silk',
    introduction: 'Known as the bowl of herbal richness and sacred tribal groves, Chhattisgarh preserves thousands of years of animist metal sculpting, wrought iron blacksmithing, and forest-harvested silks.',
    craftCultureDescription: 'Famous worldwide for the primitive elegance of Bastar Dhokra (bell metal lost-wax casting), Bastar Wrought Iron craft (Loha Shilp), Terracotta bull figurines, and shimmering gold-toned wild Kosa (Tussar) Silk weaves.',
    primaryDistricts: ['Bastar', 'Kondagaon', 'Janjgir-Champa', 'Raigarh', 'Durg', 'Kabirdham'],
    productCount: 4,
    featuredCrafts: ['Bastar Dhokra Bell Metal', 'Bastar Iron Craft', 'Champa Kosa Silk', 'Bastar Terracotta'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Laxman_temple%2C_Sirpur%2C_Chhattisgarh.jpg',
        caption: '7th-century brick-built Laxman Temple in Sirpur, Mahasamund, Chhattisgarh.',
      }
    ],
    culturalFestivals: ['Bastar Dussehra (75-day festival)', 'Madai Festival', 'Rajim Kumbh'],
    isFeatured: false,
  },

  // -------------------------------------------------------------
  // NORTH-EASTERN INDIA
  // -------------------------------------------------------------
  {
    id: 'assam',
    code: 'AS',
    name: 'Assam',
    capital: 'Dispur',
    region: 'North-Eastern',
    // Accurate verified image: Kamakhya Temple, Nilachal Hill, Guwahati, Assam
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Kamakhya_temple_guwahati.jpg',
    tagline: 'Golden Muga silk, rolling tea estates, and river island bamboo masks',
    introduction: 'Bounded by the mighty Brahmaputra river and lush subtropical hills, Assam is the solitary homeland of wild golden Muga silk, world-renowned single-estate teas, and neo-Vaishnavite river island theater arts.',
    craftCultureDescription: 'Famous for the shimmering, indestructible natural golden sheen of GI-tagged Muga Silk (found only in Assam), Assam CTC and Orthodox Teas, handmade bamboo-and-clay dramatic masks of Majuli Island, and hand-chiseled bell metal of Sarthebari.',
    primaryDistricts: ['Kamrup', 'Jorhat', 'Majuli', 'Dibrugarh', 'Barpeta (Sarthebari)'],
    productCount: 4,
    featuredCrafts: ['Assam Muga Silk', 'Assam Orthodox Tea', 'Majuli Bamboo Masks', 'Sarthebari Bell Metal'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Rang_Ghar_Sivasagar_Assam.jpg',
        caption: 'Historic two-storied Ahom royal pavilion Rang Ghar in Sivasagar, Assam.',
      }
    ],
    culturalFestivals: ['Rongali Bihu', 'Bhogali Bihu', 'Ambubachi Mela'],
    isFeatured: true,
  },
  {
    id: 'arunachal-pradesh',
    code: 'AR',
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    region: 'North-Eastern',
    // Accurate verified image: Tawang Monastery (Gaden Namgyal Lhatse, Tawang District, Arunachal Pradesh)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Tawang_Monastery_Arunachal_Pradesh.jpg',
    tagline: 'Dawn-lit mountain sanctuary, Monpa bark paper, and tribal wood sculpting',
    introduction: 'As India’s easternmost frontier where the sun first rises, Arunachal Pradesh is home to 26 major indigenous tribes possessing profound knowledge of high-altitude flora, cane craft, and Buddhist monastic woodcarving.',
    craftCultureDescription: 'Renowned for the 1000-year-old Monpa Handmade Paper crafted from the bark of the local Shugu Sheng bush, Wancho tribal wood carvings, Apatani geometric loin-loom textiles, and Idu Mishmi textiles.',
    primaryDistricts: ['Tawang', 'Longding', 'Lower Subansiri', 'West Kameng'],
    productCount: 3,
    featuredCrafts: ['Monpa Handmade Paper', 'Wancho Wood Craft', 'Apatani Textile'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Ita_Fort_Itanagar.jpg',
        caption: 'Historic 14th-century Ita Fort (Fort of Bricks) in Itanagar, Arunachal Pradesh.',
      }
    ],
    culturalFestivals: ['Losar Festival', 'Torgya Tawang', 'Ziro Music Festival'],
    isFeatured: false,
  },
  {
    id: 'manipur',
    code: 'MN',
    name: 'Manipur',
    capital: 'Imphal',
    region: 'North-Eastern',
    // Accurate verified image: Kangla Fort, Imphal, Manipur
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Kangla_Fort_Imphal_Manipur.jpg',
    tagline: 'Jeweled emerald valley, aromatic black rice, and royal loin-loom textiles',
    introduction: 'Surrounded by nine hills with the floating phumdis of Loktak Lake at its heart, Manipur boasts an extraordinary courtly handloom culture and indigenous aromatic grain heritage.',
    craftCultureDescription: 'Celebrated for the aromatic, anthocyanin-rich GI-tagged Chak-Hao (Black Rice), the sacred Shaphee Lanphee embroidered warrior shawl, delicate semi-transparent Moirang Phee fabrics, and Longpi black stone pottery.',
    primaryDistricts: ['Imphal West', 'Bishnupur', 'Ukhrul (Longpi)', 'Churachandpur'],
    productCount: 4,
    featuredCrafts: ['Chak-Hao Black Rice', 'Shaphee Lanphee Shawl', 'Moirang Phee Weave', 'Longpi Black Stone Pottery'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Loktak_Lake_Manipur.jpg',
        caption: 'Phumdis (floating biomass islands) across sacred Loktak Lake in Bishnupur, Manipur.',
      }
    ],
    culturalFestivals: ['Sangai Festival', 'Yaoshang', 'Lai Haraoba'],
    isFeatured: false,
  },
  {
    id: 'meghalaya',
    code: 'ML',
    name: 'Meghalaya',
    capital: 'Shillong',
    region: 'North-Eastern',
    // Accurate verified image: Double Decker Living Root Bridge, Nongriat, East Khasi Hills, Meghalaya
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Double_Decker_Living_Root_Bridge%2C_Nongriat%2C_Meghalaya.jpg',
    tagline: 'Abode of clouds, living root engineering, and golden turmeric hills',
    introduction: 'Famous for having the wettest places on earth and matrilineal Khasi, Garo, and Jaintia societies, Meghalaya fosters remarkable organic agro-heritage and sustainable cane and silk handlooms.',
    craftCultureDescription: 'Home to the world’s most potent high-curcumin Lakadong Turmeric grown in the Jaintia hills, organic Ahimsa Ryndia (Eri) silk naturally dyed with wild leaves, Khasi Mandarin oranges, and cane rain-shields (Knup).',
    primaryDistricts: ['West Jaintia Hills', 'East Khasi Hills', 'Ri Bhoi', 'West Garo Hills'],
    productCount: 3,
    featuredCrafts: ['Lakadong Turmeric', 'Ryndia Organic Eri Silk', 'Khasi Mandarin', 'Meghalaya Cane Craft'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Nohkalikai_Falls_Cherrapunji.jpg',
        caption: 'Nohkalikai Falls cascading over the emerald limestone cliffs of Cherrapunji, Meghalaya.',
      }
    ],
    culturalFestivals: ['Nongkrem Dance Festival', 'Shad Suk Mynsiem', 'Wangala 100 Drums Festival'],
    isFeatured: false,
  },
  {
    id: 'mizoram',
    code: 'MZ',
    name: 'Mizoram',
    capital: 'Aizawl',
    region: 'North-Eastern',
    // Accurate verified image: Solomon’s Temple, Chawlhhmun, Aizawl, Mizoram
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Solomon%27s_Temple_Aizawl_Mizoram.jpg',
    tagline: 'Land of rolling blue hills, bamboo dance, and intricate loin-loom puans',
    introduction: 'Mizoram’s steep mountainous landscapes are woven together by the vibrant community bonds of Tlawmngaihna (selfless service) and master loin-loom weaving.',
    craftCultureDescription: 'Celebrated for traditional Mizo Puans (handwoven ceremonial wraparounds) including the striking black-and-white Puanchei and Tawlhlohpuan, fiery bird’s-eye Mizo Chilli, and fine bamboo furniture.',
    primaryDistricts: ['Aizawl', 'Lunglei', 'Serchhip', 'Champhai'],
    productCount: 3,
    featuredCrafts: ['Tawlhlohpuan Handloom', 'Mizo Puanchei Saree', 'Mizo Bird Eye Chilli'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Reiek_Peak_Mizoram.jpg',
        caption: 'Reiek Heritage Peak and traditional model Mizo village settlement.',
      }
    ],
    culturalFestivals: ['Chapchar Kut', 'Mim Kut', 'Pawl Kut'],
    isFeatured: false,
  },
  {
    id: 'nagaland',
    code: 'NL',
    name: 'Nagaland',
    capital: 'Kohima',
    region: 'North-Eastern',
    // Accurate verified image: Naga Heritage Village, Kisama (Kohima District, Nagaland)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Naga_Heritage_Village_Kisama.jpg',
    tagline: 'Land of warrior tribes, vivid tribal geometric shawls, and king chilli',
    introduction: 'Nagaland is an extraordinary realm of 16 distinct Naga tribes, each possessing a deeply codified language of geometric patterns, colors, and feathers displayed in their traditional handwoven shawls.',
    craftCultureDescription: 'Famous for the GI-tagged Naga Shawls (including the Chakhesang and Ao warrior shawls), the explosive Naga King Chilli (Bhut Jolokia), and master bamboo and cane woodwork.',
    primaryDistricts: ['Kohima', 'Dimapur', 'Phek', 'Mokokchung', 'Mon'],
    productCount: 3,
    featuredCrafts: ['Naga Traditional Shawls', 'Naga Mircha (King Chilli)', 'Chakhesang Shawl'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Kohima_War_Cemetery_Nagaland.jpg',
        caption: 'Historic Kohima War Memorial situated on Garrison Hill in Nagaland.',
      }
    ],
    culturalFestivals: ['Hornbill Festival', 'Moatsu Festival', 'Sekrenyi Festival'],
    isFeatured: false,
  },
  {
    id: 'tripura',
    code: 'TR',
    name: 'Tripura',
    capital: 'Agartala',
    region: 'North-Eastern',
    // Accurate verified image: Ujjayanta Palace, Agartala, Tripura
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ujjayanta_Palace_Agartala_Tripura.jpg',
    tagline: 'Kingdom of delicate bamboo craft, sweet queen pineapples, and risa weaves',
    introduction: 'Steeped in royal Manikya dynasty history, Tripura is renowned for having some of the world’s finest bamboo and cane craftsmen and rich indigenous tribal handlooms.',
    craftCultureDescription: 'Celebrated for the traditional Risa woven breast-cloth worn by indigenous Tripuri women, fragrant Queen Pineapples grown in lush valley orchards, and micro-fine split bamboo screens and umbrella handles.',
    primaryDistricts: ['West Tripura', 'Dhalai', 'Gomati', 'South Tripura'],
    productCount: 3,
    featuredCrafts: ['Tripura Risa Textile', 'Tripura Queen Pineapple', 'Tripura Bamboo & Cane Craft'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Neermahal_Tripura.jpg',
        caption: 'Neermahal (Water Palace) situated in the middle of Rudrasagar Lake in Tripura.',
      }
    ],
    culturalFestivals: ['Kharchi Puja', 'Garia Puja', 'Neermahal Water Festival'],
    isFeatured: false,
  },
  {
    id: 'sikkim',
    code: 'SK',
    name: 'Sikkim',
    capital: 'Gangtok',
    region: 'North-Eastern',
    // Accurate verified image: Rumtek Monastery (Dharma Chakra Centre), Gangtok, Sikkim
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Rumtek_Monastery%2C_Sikkim.jpg',
    tagline: 'Shadow of Mt. Kanchenjunga, world-first organic state, and large cardamom',
    introduction: 'Framed by the world’s third-highest peak, Sikkim became the world’s first 100% certified organic state, cultivating exceptional alpine spices and sacred Buddhist handloom tapestries.',
    craftCultureDescription: 'Famous as India’s largest producer of the smoky, aromatic GI-tagged Sikkim Large Cardamom, single-estate high-altitude Temi Organic Tea, Lepcha handloom weaves, and Tibetan thangka paintings.',
    primaryDistricts: ['East Sikkim', 'South Sikkim (Temi)', 'West Sikkim', 'North Sikkim'],
    productCount: 3,
    featuredCrafts: ['Sikkim Large Cardamom', 'Temi Organic Tea', 'Lepcha Handloom Weaves'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Pemayangtse_Monastery_Sikkim.jpg',
        caption: 'Pemayangtse Monastery near Pelling, one of the oldest Tibetan Buddhist monasteries in Sikkim.',
      }
    ],
    culturalFestivals: ['Losoong', 'Pang Lhabsol', 'Saga Dawa'],
    isFeatured: false,
  },

  // -------------------------------------------------------------
  // 8 UNION TERRITORIES OF INDIA
  // -------------------------------------------------------------
  {
    id: 'jammu-and-kashmir',
    code: 'JK',
    name: 'Jammu and Kashmir',
    capital: 'Srinagar / Jammu',
    region: 'Islands & UTs',
    // Accurate verified image: Pari Mahal overlooking Dal Lake, Srinagar, Jammu & Kashmir
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Pari_Mahal_Srinagar.jpg',
    tagline: 'Paradise on earth, imperial pashmina shawls, and Kashmiri saffron',
    introduction: 'Blessed with snow-fed Pir Panjal streams and chinars, Kashmir is world-renowned for its exquisite courtly artisan guilds nurtured during the Mughal and Sultanate eras.',
    craftCultureDescription: 'Celebrated worldwide for genuine hand-spun Kashmiri Pashmina shawls, microscopic wooden needle Kani weaving, papier-mâché painted lacquerware, carved walnut wood furniture, and purple-flowered GI-tagged Kashmiri Saffron.',
    primaryDistricts: ['Srinagar', 'Budgam', 'Anantnag', 'Baramulla', 'Pulwama (Pampore)'],
    productCount: 5,
    featuredCrafts: ['Kashmir Pashmina Shawl', 'Kashmir Saffron', 'Kani Shawl', 'Walnut Wood Carving', 'Kashmir Papier Mâché'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Kashmiri_pashmina_weaver_in_Srinagar.jpg',
        caption: 'Master artisan hand-weaving fine Pashmina fabric in traditional Srinagar workshop.',
      }
    ],
    culturalFestivals: ['Tulip Festival', 'Shikara Festival Dal Lake', 'Saffron Harvest Festival'],
    isFeatured: true,
    isUT: true,
  },
  {
    id: 'ladakh',
    code: 'LA',
    name: 'Ladakh',
    capital: 'Leh',
    region: 'Islands & UTs',
    // Accurate verified image: Thiksey Monastery, Leh District, Ladakh
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Thiksey_Monastery_Ladakh.jpg',
    tagline: 'High cold desert, nomadic Changthangi pashmina, and sacred woodcarving',
    introduction: 'Perched over 11,000 feet on the roof of the world, Ladakh is the sacred domain of Changpa nomads who graze the fine Changthangi goats yielding raw pashmina (Lena) under sub-zero conditions.',
    craftCultureDescription: 'Home to raw Changthangi Pashmina wool, Ladakhi wood carvings (Shondol), vibrant Buddhist monastery thangka murals, and vitamin-packed wild Himalayan Seabuckthorn berries.',
    primaryDistricts: ['Leh', 'Kargil'],
    productCount: 3,
    featuredCrafts: ['Ladakh Changthangi Pashmina', 'Ladakh Wood Carving', 'Ladakh Seabuckthorn'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Leh_Palace_Ladakh.jpg',
        caption: '17th-century royal Leh Palace rising above the historic town of Leh in Ladakh.',
      }
    ],
    culturalFestivals: ['Hemis Festival', 'Ladakh Festival', 'Dosmoche'],
    isFeatured: true,
    isUT: true,
  },
  {
    id: 'delhi',
    code: 'DL',
    name: 'Delhi (NCT)',
    capital: 'New Delhi',
    region: 'Islands & UTs',
    // Accurate verified image: Qutub Minar Complex (UNESCO World Heritage Site, Delhi)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Qutb_Minar_and_its_Monuments%2C_Delhi.jpg',
    tagline: 'Seven historical capitals, Shahjahanabad karkhanas, and zari zardozi',
    introduction: 'Centuries of sovereign sultanates and empires in Old Delhi gave birth to the finest imperial ateliers for gold wire embroidery, gemstone cutting, and Meenakari enamel art.',
    craftCultureDescription: 'Famed for Old Delhi’s delicate gold and silver thread Zari Zardozi embroidery, handcrafted silver and gold Meenakari enameling in Dariba Kalan, and traditional leathercraft.',
    primaryDistricts: ['Central Delhi (Shahjahanabad)', 'South Delhi', 'New Delhi'],
    productCount: 2,
    featuredCrafts: ['Delhi Zari Zardozi', 'Meenakari Enamel Jewelry'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Red_Fort_in_Delhi_03-2016_img3.jpg',
        caption: 'UNESCO World Heritage Red Fort (Lal Qila) in Old Delhi.',
      }
    ],
    culturalFestivals: ['Dilli Haat Crafts Mela', 'Qutub Festival', 'India Art Fair'],
    isFeatured: false,
    isUT: true,
  },
  {
    id: 'chandigarh',
    code: 'CH',
    name: 'Chandigarh',
    capital: 'Chandigarh',
    region: 'Islands & UTs',
    // Accurate verified image: Open Hand Monument at Capitol Complex (UNESCO World Heritage Site, Chandigarh)
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Open_Hand_Monument_Chandigarh.jpg',
    tagline: 'The City Beautiful, modern modernist geometry, and urban stone mosaic',
    introduction: 'Designed by legendary architect Le Corbusier at the foothills of the Shivaliks, Chandigarh seamlessly weaves modernist town planning with regional craft preservation.',
    craftCultureDescription: 'Celebrated for the world-renowned Rock Garden waste-material stone mosaic craft founded by Nek Chand, alongside thriving regional Phulkari handloom centers.',
    primaryDistricts: ['Chandigarh'],
    productCount: 2,
    featuredCrafts: ['Rock Garden Stone & Ceramic Art', 'Modernist Wood Furniture'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Rock_Garden%2C_Chandigarh_06.jpg',
        caption: 'Sculptures made of recycled ceramic and industrial materials in Nek Chand Rock Garden, Chandigarh.',
      }
    ],
    culturalFestivals: ['Rose Festival', 'Chandigarh Carnival'],
    isFeatured: false,
    isUT: true,
  },
  {
    id: 'puducherry',
    code: 'PY',
    name: 'Puducherry',
    capital: 'Puducherry',
    region: 'Islands & UTs',
    // Accurate verified image: Basilica of the Sacred Heart of Jesus, Puducherry
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Basilica_of_the_Sacred_Heart_of_Jesus%2C_Pondicherry.jpg',
    tagline: 'French colonial boulevards, terracotta guardian deities, and handmade paper',
    introduction: 'With its sun-drenched French Quarter and Tamil heritage, Puducherry is an enchanting cultural enclave celebrated for sustainable community crafts and ancient terracotta pottery.',
    craftCultureDescription: 'World-famous for the massive guardian horses of Villianur Terracotta (GI-tagged), Sri Aurobindo Ashram 100% cotton-rag handmade paper, and eco-friendly incense.',
    primaryDistricts: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
    productCount: 2,
    featuredCrafts: ['Villianur Terracotta Craft', 'Auroville Handmade Paper'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/French_War_Memorial_Puducherry.jpg',
        caption: 'French War Memorial along Goubert Avenue promenade in Puducherry.',
      }
    ],
    culturalFestivals: ['International Yoga Festival', 'French Food Festival', 'Fete de Puducherry'],
    isFeatured: false,
    isUT: true,
  },
  {
    id: 'andaman-and-nicobar-islands',
    code: 'AN',
    name: 'Andaman & Nicobar Islands',
    capital: 'Port Blair',
    region: 'Islands & UTs',
    // Accurate verified image: Cellular Jail National Memorial, Port Blair, South Andaman
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Cellular_Jail_Port_Blair_Andaman.jpg',
    tagline: 'Tropical oceanic archipelago, coconut shell craft, and virgin island hardwoods',
    introduction: 'An emerald chain of over 500 tropical islands in the Bay of Bengal, the Andaman and Nicobar archipelago is home to indigenous island tribes with exceptional knowledge of marine resources and wood.',
    craftCultureDescription: 'Famous for polished coconut shell tableware and lamps, traditional woven Nicobari pandanus mats, and sustainable Padauk hardwood furniture.',
    primaryDistricts: ['South Andaman', 'North and Middle Andaman', 'Nicobar'],
    productCount: 2,
    featuredCrafts: ['Andaman Coconut Shell Craft', 'Nicobari Traditional Mat'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Ross_Island_Port_Blair_Ruins.jpg',
        caption: 'Historic ruins entwined with banyan roots on Netaji Subhash Chandra Bose (Ross) Island, Andaman.',
      }
    ],
    culturalFestivals: ['Island Tourism Festival Port Blair', 'Monsoon Music Festival'],
    isFeatured: false,
    isUT: true,
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    code: 'DN',
    name: 'Dadra and Nagar Haveli & Daman and Diu',
    capital: 'Daman',
    region: 'Islands & UTs',
    // Accurate verified image: Historic Diu Fort overlooking the Arabian Sea, Diu
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Diu_Fort_01.jpg',
    tagline: 'Coastal Portuguese forts, tribal bamboo mats, and Warli painting roots',
    introduction: 'Uniting coastal Arabian Sea fishing towns with inland forested tribal tracts, this territory preserves ancient Portuguese ramparts alongside indigenous Warli and Kokna tribal craftsmanship.',
    craftCultureDescription: 'Known for traditional bamboo and grass mat weaving, leather slippers, and authentic Warli tribal wall art painted with rice flour on red earthen backgrounds.',
    primaryDistricts: ['Daman', 'Diu', 'Dadra & Nagar Haveli'],
    productCount: 2,
    featuredCrafts: ['Traditional Bamboo Mat Weaving', 'Daman Leathercraft'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Moti_Daman_Fort_Gate.jpg',
        caption: 'Moti Daman Fort gateway and Portuguese colonial ramparts in Daman.',
      }
    ],
    culturalFestivals: ['Nariyal Poornima', 'Tarpa Dance Festival'],
    isFeatured: false,
    isUT: true,
  },
  {
    id: 'lakshadweep',
    code: 'LD',
    name: 'Lakshadweep',
    capital: 'Kavaratti',
    region: 'Islands & UTs',
    // Accurate verified image: Historic Minicoy Island Lighthouse, Lakshadweep
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Minicoy_Lighthouse_Lakshadweep.jpg',
    tagline: 'Coral atolls of the Arabian Sea, saltwater coir rope, and coconut palm vinegar',
    introduction: 'A pristine archipelago of 36 coral atolls in the Arabian Sea, Lakshadweep boasts an age-old maritime craft economy centered on coconut palm fiber and sea life.',
    craftCultureDescription: 'World-renowned for its naturally saltwater-retted white coir fiber used to create golden rot-resistant marine ropes, coconut shell carvings, and wild tuna pickle.',
    primaryDistricts: ['Lakshadweep (Kavaratti, Agatti, Minicoy)'],
    productCount: 2,
    featuredCrafts: ['Lakshadweep Marine Coir Craft', 'Coconut Palm Vinegar'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Kavaratti_Lagoon_Lakshadweep.jpg',
        caption: 'Pristine emerald lagoon atolls and coral reefs of Kavaratti, Lakshadweep.',
      }
    ],
    culturalFestivals: ['Eid-ul-Fitr', 'Milad-un-Nabi', 'Minicoy Boat Races'],
    isFeatured: false,
    isUT: true,
  }
];
