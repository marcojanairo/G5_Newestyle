const clothes = [
    {
      id: '1',
      name: 'Zeus',
      gender: 'male',
      desc: 'Linen Pants',
      url: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: ['Tshirts'],
      bottoms: ['Shorts'],
      price: '$25'
    },
    {
      id: '2',
      name: 'Apollo',
      gender: 'female',
      desc: 'Lots of t-shirts',
      url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: ['Long Sleeve'],
      bottoms: [],
      price: '$14'
    },
    {
      id: '3',
      name: 'Hades',
      gender: 'neutral',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '$200'
    },
    {
      id: '4',
      name: 'Hermes',
      gender: 'neutral',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'

    },
    {
      id: '5',
      name: 'Poseidon',
      gender: 'female',
      desc: 'The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a "gas giant".',
      url: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '6',
      name: 'Hephaestus',
      gender: 'male',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '7',
      name: 'Athena',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '8',
      name: 'Dionysus',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '9',
      name: 'Zeus',
      gender: 'male',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: ['Tshirts'],
      bottoms: ['Shorts'],
      price: '0-10'
    },
    {
      id: '10',
      name: 'Apollo',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: ['Long Sleeve'],
      bottoms: [],
      price: '15-20'
    },
    {
      id: '11',
      name: 'Hades',
      gender: 'neutral',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '12',
      name: 'Hermes',
      gender: 'neutral',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'

    },
    {
      id: '13',
      name: 'Poseidon',
      gender: 'female',
      desc: 'The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a "gas giant".',
      url: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '14',
      name: 'Hephaestus',
      gender: 'male',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '15',
      name: 'Athena',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '16',
      name: 'Dionysus',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '17',
      name: 'Zeus',
      gender: 'male',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: ['Tshirts'],
      bottoms: ['Shorts'],
      price: '0-10'
    },
    {
      id: '18',
      name: 'Apollo',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: ['Long Sleeve'],
      bottoms: [],
      price: '15-20'
    },
    {
      id: '19',
      name: 'Hades',
      gender: 'neutral',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '20',
      name: 'Hermes',
      gender: 'neutral',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'

    },
    {
      id: '21',
      name: 'Poseidon',
      gender: 'female',
      desc: 'The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a "gas giant".',
      url: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '22',
      name: 'Hephaestus',
      gender: 'male',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '23',
      name: 'Athena',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '24',
      name: 'Dionysus',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '25',
      name: 'Apollo',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: ['Long Sleeve'],
      bottoms: [],
      price: '15-20'
    },
    {
      id: '26',
      name: 'Hades',
      gender: 'neutral',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '27',
      name: 'Hermes',
      gender: 'neutral',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'

    },
    {
      id: '28',
      name: 'Poseidon',
      gender: 'female',
      desc: 'The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a "gas giant".',
      url: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '29',
      name: 'Hephaestus',
      gender: 'male',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '30',
      name: 'Athena',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    {
      id: '31',
      name: 'Dionysus',
      gender: 'female',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae orci eget libero varius porttitor.',
      url: 'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tops: [],
      bottoms: [],
      price: '10-15'
    },
    
];
  
export default clothes;