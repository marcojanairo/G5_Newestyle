  const clothes = [
      {
        id: '1',
        name: 'Pants',
        gender: 'male',
        desc: 'Linen Pants',
        image: require('./clothes_image/pants.jpg'),
        tops: [],
        bottoms: ['Pants'],
        price: '$25'
      },
      {
        id: '2',
        name: 'Tshirt',
        gender: 'female',
        desc: 'Lots of t-shirts',
        image: require('./clothes_image/tshirt.jpg'),
        tops: ['Tshirts'],
        bottoms: [],
        price: '$14'
      },
    {
      id: '3',
      name: 'Shirt with Cat',
      gender: 'male',
      desc: 'Graphic Shirt',
      image: require('./clothes_image/cat-shirt.jpg'),
      tops: ['Tshirts'],
      bottoms: [],
      price: '$200'
    },
    {
      id: '4',
      name: 'Shirt',
      gender: 'male',
      desc: 'White Shirt',
      image: require('./clothes_image/white-graphic.jpg'),
      tops: ['Tshirts'],
      bottoms: [],
      price: '10-15'

    },
    {
      id: '5',
      name: 'Blazer',
      gender: 'female',
      desc: 'Women Blazer',
      image: require('./clothes_image/blazer.jpg'),
      tops: ['Blazers'],
      bottoms: [],
      price: '$12'
    },
    {
      id: '6',
      name: 'Hoodie',
      gender: 'male',
      desc: 'White Hoodie',
      image: require('./clothes_image/white-hoodie.jpg'),
      tops: ['Hoodies'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '7',
      name: 'Romper',
      gender: 'female',
      desc: 'Green Romper',
      image: require('./clothes_image/romper.jpg'),
      tops: ['Dresses'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '8',
      name: 'Flowery Dress',
      gender: 'female',
      desc: 'Floral Dress',
      image: require('./clothes_image/longsleeve-dress.jpg'),
      tops: ['Dresses'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '9',
      name: 'Sweat Pants',
      gender: 'male',
      desc: 'Sweatpants',
      image: require('./clothes_image/sweatpants.jpg'),
      tops: [],
      bottoms: ['Pants'],
      price: '0-10'
    },
    {
      id: '10',
      name: 'Apollo',
      gender: 'female',
      desc: 'Yellow Skirt',
      image: require('./clothes_image/yellow-skirt.jpg'),
      tops: [],
      bottoms: ['Skirts'],
      price: '15-20'
    },
    {
      id: '11',
      name: 'Hades',
      gender: 'kids',
      desc: 'Kids Onesie',
      image: require('./clothes_image/bear.jpg'),
      tops: ['Onesies'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '12',
      name: 'Hermes',
      gender: 'neutral',
      desc: 'Kids Overall',
      image: require('./clothes_image/overall.jpg'),
      tops: ['Overalls'],
      bottoms: [],
      price: '10-15'

    },
    {
      id: '13',
      name: 'Poseidon',
      gender: 'female',
      desc: 'Linen Top',
      image: require('./clothes_image/linen-top.jpg'),
      tops: ['Crop Tops'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '14',
      name: 'Hephaestus',
      gender: 'male',
      desc: 'Men Suit',
      image: require('./clothes_image/suit.jpg'),
      tops: ['Suit'],
      bottoms: ['Pants'],
      price: '10-15'
    },
    {
      id: '15',
      name: 'Athena',
      gender: 'female',
      desc: 'Jeans',
      image: require('./clothes_image/women-jean.jpg'),
      tops: [],
      bottoms: ['Pants'],
      price: '10-15'
    },
    {
      id: '16',
      name: 'Dionysus',
      gender: 'female',
      desc: 'Jean Jacket',
      image: require('./clothes_image/jean-jacket.jpg'),
      tops: ['Jackets'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '17',
      name: 'Zeus',
      gender: 'male',
      desc: 'Graphic Long Sleeve',
      image: require('./clothes_image/graphic-longsleeve.jpg'),
      tops: ['Long Sleeves'],
      bottoms: [],
      price: '0-10'
    },
    {
      id: '18',
      name: 'Apollo',
      gender: 'female',
      desc: 'Athletic Leggings',
      image: require('./clothes_image/leggings.jpg'),
      tops: [],
      bottoms: ['Leggings'],
      price: '15-20'
    },
    {
      id: '19',
      name: 'Hades',
      gender: 'kids',
      desc: 'Polka Dot Shorts',
      image: require('./clothes_image/polka-shorts.jpg'),
      tops: [],
      bottoms: ['Shorts'],
      price: '10-15'
    },
    {
      id: '20',
      name: 'Hermes',
      gender: 'kids',
      desc: 'Kids Tshirt',
      image: require('./clothes_image/tshirt-kids.jpg'),
      tops: ['Tshirts'],
      bottoms: [],
      price: '10-15'

    },
    {
      id: '21',
      name: 'Poseidon',
      gender: 'male',
      desc: 'Cargo Pants',
      image: require('./clothes_image/cargo-pants.jpg'),
      tops: [],
      bottoms: ['Pants'],
      price: '10-15'
    },
    {
      id: '22',
      name: 'Hephaestus',
      gender: 'male',
      desc: 'Gray Shorts',
      image: require('./clothes_image/gray-shorts.jpg'),
      tops: [],
      bottoms: ['Shorts'],
      price: '10-15'
    },
    {
      id: '23',
      name: 'Athena',
      gender: 'female',
      desc: 'Athletic Wear',
      image: require('./clothes_image/athletic-wear.jpg'),
      tops: ['Sports Bra'],
      bottoms: ["Leggings"],
      price: '10-15'
    },
    {
      id: '24',
      name: 'Dionysus',
      gender: 'female',
      desc: 'Christmas Sweater',
      image: require('./clothes_image/christmas-sweater.jpg'),
      tops: ['Sweaters'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '25',
      name: 'Apollo',
      gender: 'kids',
      desc: 'Fleece Jacket',
      image: require('./clothes_image/kids-fleece.jpg'),
      tops: ['Jackets'],
      bottoms: [],
      price: '15-20'
    },
    {
      id: '26',
      name: 'Hades',
      gender: 'kids',
      desc: 'Yellow Snowsuit',
      image: require('./clothes_image/kids-snowsuit.jpg'),
      tops: ['Snowsuits'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '27',
      name: 'Hermes',
      gender: 'male',
      desc: 'Jean Shorts',
      image: require('./clothes_image/jean-shorts.jpg'),
      tops: [],
      bottoms: ['Shorts'],
      price: '10-15'

    },
    {
      id: '28',
      name: 'Poseidon',
      gender: 'female',
      desc: 'Red Sweater',
      image: require('./clothes_image/red-sweater.jpg'),
      tops: ['Sweaters'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '29',
      name: 'Hephaestus',
      gender: 'male',
      desc: 'Black Tshirt',
      image: require('./clothes_image/tshirt-black.jpg'),
      tops: ['Tshirts'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '30',
      name: 'Athena',
      gender: 'female',
      desc: 'Red Cardigan',
      image: require('./clothes_image/cardigan.jpg'),
      tops: ['Cardigans'],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '31',
      name: 'Dionysus',
      gender: 'male',
      desc: 'Plaid Jacket',
      image: require('./clothes_image/plaid.jpg'),
      tops: ['Long Sleeves'],
      bottoms: [],
      price: '10-15'
    },
    
];
  
export default clothes;