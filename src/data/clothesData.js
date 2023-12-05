  const clothes = [
      {
        id: '1',
        name: 'Pants',
        gender: 'male',
        desc: 'Linen Pants',
        image: require('./clothes_image/pants.jpg'),
        tops: [],
        bottoms: ['Pants'],
        price: '25',
        price_range: '20-25',
      },
      {
        id: '2',
        name: 'Tshirt',
        gender: 'female',
        desc: 'Lots of t-shirts',
        image: require('./clothes_image/tshirt.jpg'),
        tops: ['Tshirts'],
        bottoms: [],
        price: '14',
        price_range: '10-15',
      },
    {
      id: '3',
      name: 'Shirt with Cat',
      gender: 'male',
      desc: 'Graphic Shirt',
      image: require('./clothes_image/cat-shirt.jpg'),
      tops: ['Tshirts'],
      bottoms: [],
      price: '200',
      price_range: '25+',
    },
    {
      id: '4',
      name: 'Shirt',
      gender: 'male',
      desc: 'White Shirt',
      image: require('./clothes_image/white-graphic.jpg'),
      tops: ['Tshirts'],
      bottoms: [],
      price: '12',
      price_range: '10-15',
    },
    {
      id: '5',
      name: 'Blazer',
      gender: 'female',
      desc: 'Women Blazer',
      image: require('./clothes_image/blazer.jpg'),
      tops: ['Blazers'],
      bottoms: [],
      price: '12',
      price_range: '10-15',
    },
    {
      id: '6',
      name: 'Hoodie',
      gender: 'male',
      desc: 'White Hoodie',
      image: require('./clothes_image/white-hoodie.jpg'),
      tops: ['Blazers'],
      bottoms: [],
      price: '99',
      price_range: '25+',
    },
    {
      id: '7',
      name: 'Romper',
      gender: 'female',
      desc: 'Green Romper',
      image: require('./clothes_image/romper.jpg'),
      tops: ['Dresses'],
      bottoms: [],
      price: '51',
      price_range: '25+',
    },
    {
      id: '8',
      name: 'Flowery Dress',
      gender: 'female',
      desc: 'Floral Dress',
      image: require('./clothes_image/longsleeve-dress.jpg'),
      tops: ['Dresses'],
      bottoms: [],
      price: '13',
      price_range: '10-15',
    },
    {
      id: '9',
      name: 'Sweat Pants',
      gender: 'male',
      desc: 'Sweatpants',
      image: require('./clothes_image/sweatpants.jpg'),
      tops: [],
      bottoms: ['Pants'],
      price: '8',
      price_range: '0-10',
    },
    {
      id: '10',
      name: 'Bright yellow skirt',
      gender: 'female',
      desc: 'Yellow Skirt',
      image: require('./clothes_image/yellow-skirt.jpg'),
      tops: [],
      bottoms: ['Shorts'],
      price: '17',
      price_range: '15-20',
    },
    {
      id: '11',
      name: 'Cute Onesie',
      gender: 'kids',
      desc: 'Kids Onesie',
      image: require('./clothes_image/bear.jpg'),
      tops: ['Others'],
      bottoms: [],
      price: '35',
      price_range: '25+',
    },
    {
      id: '12',
      name: 'Overall for the Kids',
      gender: 'neutral',
      desc: 'Kids Overall',
      image: require('./clothes_image/overall.jpg'),
      tops: ['Others'],
      bottoms: [],
      price: '25',
      price_range: '20-25',

    },
    {
      id: '13',
      name: 'Comfortable linen top',
      gender: 'female',
      desc: 'Linen Top',
      image: require('./clothes_image/linen-top.jpg'),
      tops: ['Others'],
      bottoms: [],
      price: '11',
      price_range: '10-15',
    },
    {
      id: '14',
      name: 'Suit for Men',
      gender: 'male',
      desc: 'Men Suit',
      image: require('./clothes_image/suit.jpg'),
      tops: ['Suit'],
      bottoms: ['Pants'],
      price: '35',
      price_range: '25+',
    },
    {
      id: '15',
      name: 'Awesome Jeans',
      gender: 'female',
      desc: 'Jeans',
      image: require('./clothes_image/women-jean.jpg'),
      tops: [],
      bottoms: ['Pants'],
      price: '42',
      price_range: '25+',
    },
    {
      id: '16',
      name: 'Ms. Jeans Jacket',
      gender: 'female',
      desc: 'Jean Jacket',
      image: require('./clothes_image/jean-jacket.jpg'),
      tops: ['Jackets'],
      bottoms: [],
      price: '82',
      price_range: '25+',
    },
    {
      id: '17',
      name: 'Great day to day outfit',
      gender: 'male',
      desc: 'Graphic Long Sleeve',
      image: require('./clothes_image/graphic-longsleeve.jpg'),
      tops: ['Others'],
      bottoms: [],
      price: '31',
      price_range: '25+',
    },
    {
      id: '18',
      name: 'Comfortable Outerwear',
      gender: 'female',
      desc: 'Athletic Leggings',
      image: require('./clothes_image/leggings.jpg'),
      tops: [],
      bottoms: ['Leggings'],
      price: '42',
      price_range: '25+',
    },
    {
      id: '19',
      name: 'Shorts with Garter',
      gender: 'kids',
      desc: 'Polka Dot Shorts',
      image: require('./clothes_image/polka-shorts.jpg'),
      tops: [],
      bottoms: ['Shorts'],
      price: '12',
      price_range: '10-15',
    },
    {
      id: '20',
      name: 'Blue and White Shirts',
      gender: 'kids',
      desc: 'Kids Tshirt',
      image: require('./clothes_image/tshirt-kids.jpg'),
      tops: ['Tshirts'],
      bottoms: [],
      price: '11',
      price_range: '10-15',

    },
    {
      id: '21',
      name: 'Cargo Pants 5',
      gender: 'male',
      desc: 'Cargo Pants',
      image: require('./clothes_image/cargo-pants.jpg'),
      tops: [],
      bottoms: ['Pants'],
      price: '29',
      price_range: '25+',
    },
    {
      id: '22',
      name: 'Shorts Colored Gray',
      gender: 'male',
      desc: 'Gray Shorts',
      image: require('./clothes_image/gray-shorts.jpg'),
      tops: [],
      bottoms: ['Shorts'],
      price: '24',
      price_range: '25+',
    },
    {
      id: '23',
      name: 'Maroon athletic wear',
      gender: 'female',
      desc: 'Athletic Wear',
      image: require('./clothes_image/athletic-wear.jpg'),
      tops: ['Others'],
      bottoms: ["Leggings"],
      price: '75',
      price_range: '25+',
    },
    {
      id: '24',
      name: 'Deer Christmas Sweater',
      gender: 'female',
      desc: 'Christmas Sweater',
      image: require('./clothes_image/christmas-sweater.jpg'),
      tops: ['Others'],
      bottoms: [],
      price: '31',
      price_range: '25+',
    },
    {
      id: '25',
      name: 'Apollo',
      gender: 'kids',
      desc: 'Fleece Jacket',
      image: require('./clothes_image/kids-fleece.jpg'),
      tops: ['Jackets'],
      bottoms: [],
      price: '24',
      price_range: '20-25',
    },
    {
      id: '26',
      name: 'Hades',
      gender: 'kids',
      desc: 'Yellow Snowsuit',
      image: require('./clothes_image/kids-snowsuit.jpg'),
      tops: ['Others'],
      bottoms: [],
      price: '29',
      price_range: '25+',
    },
    {
      id: '27',
      name: 'Hermes',
      gender: 'male',
      desc: 'Jean Shorts',
      image: require('./clothes_image/jean-shorts.jpg'),
      tops: [],
      bottoms: ['Shorts'],
      price: '27',
      price_range: '25+',

    },
    {
      id: '28',
      name: 'Poseidon',
      gender: 'female',
      desc: 'Red Sweater',
      image: require('./clothes_image/red-sweater.jpg'),
      tops: ['Jackets'],
      bottoms: [],
      price: '14',
      price_range: '10-15',
    },
    {
      id: '29',
      name: 'Hephaestus',
      gender: 'male',
      desc: 'Black Tshirt',
      image: require('./clothes_image/tshirt-black.jpg'),
      tops: ['Tshirts'],
      bottoms: [],
      price: '19',
      price_range: '15-20',
    },
    {
      id: '30',
      name: 'Athena',
      gender: 'female',
      desc: 'Red Cardigan',
      image: require('./clothes_image/cardigan.jpg'),
      tops: ['Blazers'],
      bottoms: [],
      price: '52',
      price_range: '25+',
    },
    {
      id: '31',
      name: 'Dionysus',
      gender: 'male',
      desc: 'Plaid Jacket',
      image: require('./clothes_image/plaid.jpg'),
      tops: ['Jackets'],
      bottoms: [],
      price: '265',
      price_range: '25+',
    },
    
];
  
export default clothes;