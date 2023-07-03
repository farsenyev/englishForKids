const cards = [
//[
// [],
// [{},{},{},{},{},{},{},{}],
// [...],[...],[...],[...],[...]
// ]
  ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'],
  //Action set A
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: '../../data/img/cry.jpg',
      audioSrc: '../data/audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: '../data/img/dance.jpg',
      audioSrc: '../data/audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: '../data/img/dive.jpg',
      audioSrc: '../data/audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: '../data/img/draw.jpg',
      audioSrc: '../data/audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: '../data/img/fish.jpg',
      audioSrc: '../data/audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: '../data/img/fly.jpg',
      audioSrc: '../data/audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: '../data/img/hug.jpg',
      audioSrc: '../data/audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: '../data/img/jump.jpg',
      audioSrc: '../data/audio/jump.mp3'
    }
  ],
  //Action set B
  [
    {
      word: 'open',
      translation: 'открывать',
      image: '../data/img/open.jpg',
      audioSrc: '../data/audio/open.mp3'
    },
    {
      word: 'play',
      translation: 'играть',
      image: '../data/img/play.jpg',
      audioSrc: '../data/audio/play.mp3'
    },
    {
      word: 'point',
      translation: 'указывать',
      image: '../data/img/point.jpg',
      audioSrc: '../data/audio/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: '../data/img/ride.jpg',
      audioSrc: '../data/audio/ride.mp3'
    },
    {
      word: 'run',
      translation: 'бегать',
      image: '../data/img/run.jpg',
      audioSrc: '../data/audio/run.mp3'
    },
    {
      word: 'sing',
      translation: 'петь',
      image: '../data/img/sing.jpg',
      audioSrc: '../data/audio/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: '../data/img/skip.jpg',
      audioSrc: '../data/audio/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: '../data/img/swim.jpg',
      audioSrc: '../data/audio/swim.mp3'
    }
  ],
  //Animal set A
  [
    {
      word: 'cat',
      translation: 'кот',
      image: '../data/img/cat.jpg',
      audioSrc: '../data/audio/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: '../data/img/chick.jpg',
      audioSrc: '../data/audio/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: '../data/img/chicken.jpg',
      audioSrc: '../data/audio/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'собака',
      image: '../data/img/dog.jpg',
      audioSrc: '../data/audio/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: '../data/img/horse.jpg',
      audioSrc: '../data/audio/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: '../data/img/pig.jpg',
      audioSrc: '../data/audio/pig.mp3'
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: '../data/img/rabbit.jpg',
      audioSrc: '../data/audio/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: '../data/img/sheep.jpg',
      audioSrc: '../data/audio/sheep.mp3'
    }
  ],
  //Animal set B
  [
    {
      word: 'bird',
      translation: 'птица',
      image: '../data/img/bird.jpg',
      audioSrc: '../data/audio/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: '../data/img/fish1.jpg',
      audioSrc: '../data/audio/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: '../data/img/frog.jpg',
      audioSrc: '../data/audio/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: '../data/img/giraffe.jpg',
      audioSrc: '../data/audio/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'лев',
      image: '../data/img/lion.jpg',
      audioSrc: '../data/audio/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: '../data/img/mouse.jpg',
      audioSrc: '../data/audio/mouse.mp3'
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: '../data/img/turtle.jpg',
      audioSrc: '../data/audio/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: '../data/img/dolphin.jpg',
      audioSrc: '../data/audio/dolphin.mp3'
    }
  ],
  //Clothes
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: '../data/img/skirt.jpg',
      audioSrc: '../data/audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: '../data/img/pants.jpg',
      audioSrc: '../data/audio/pants.mp3'
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: '../data/img/blouse.jpg',
      audioSrc: '../data/audio/blouse.mp3'
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'img/dress.jpg',
      audioSrc: 'audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: '../data/img/boot.jpg',
      audioSrc: '../data/audio/boot.mp3'
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: '../data/img/shirt.jpg',
      audioSrc: '../data/audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: '../data/img/coat.jpg',
      audioSrc: '../data/audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: '../data/img/shoe.jpg',
      audioSrc: '../data/audio/shoe.mp3'
    }
  ],
  //Emotions
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: '../data/img/sad.jpg',
      audioSrc: '../data/audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: '../data/img/angry.jpg',
      audioSrc: '../data/audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: '../data/img/happy.jpg',
      audioSrc: '../data/audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: '../data/img/tired.jpg',
      audioSrc: '../data/audio/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: '../data/img/surprised.jpg',
      audioSrc: '../data/audio/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: '../data/img/scared.jpg',
      audioSrc: '../data/audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: '../data/img/smile.jpg',
      audioSrc: '../data/audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: '../data/img/laugh.jpg',
      audioSrc: '../data/audio/laugh.mp3'
    }
  ]
]

export default cards;