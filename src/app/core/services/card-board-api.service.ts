import { Injectable } from '@angular/core';
import { Word } from '../interfaces/word';
import { WordCategory } from '../enums/word-category';
import { Observable, of } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CardBoardApiService {
  animals: Word[] = [
    {
      word: 'camel',
      translation: 'верблюд',
      imageSrc: 'assets/images/camel.png',
      audioSrc: 'audio/camel.mp3',
    },
    {
      word: 'crocodile',
      translation: 'крокодил',
      imageSrc: 'assets/images/crocodile.png',
      audioSrc: 'assets/audio/crocodile.mp3',
    },
    {
      word: 'elephant',
      translation: 'слон',
      imageSrc: 'assets/images/elephant.png',
      audioSrc: 'assets/audio/elephant.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жираф',
      imageSrc: 'assets/images/giraffe.png',
      audioSrc: 'assets/audio/giraffe.mp3',
    },
    {
      word: 'gorilla',
      translation: 'горилла',
      imageSrc: 'assets/images/gorilla.png',
      audioSrc: 'assets/audio/gorilla.mp3',
    },
    {
      word: 'hippo',
      translation: 'бегемот',
      imageSrc: 'assets/images/hippo.png',
      audioSrc: 'assets/audio/hippo.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      imageSrc: 'assets/images/lion.png',
      audioSrc: 'assets/audio/lion.mp3',
    },
    {
      word: 'parrot',
      translation: 'попугай',
      imageSrc: 'assets/images/parrot.png',
      audioSrc: 'assets/audio/parrot.mp3',
    },
    {
      word: 'penguin',
      translation: 'пингвин',
      imageSrc: 'assets/images/penguin.png',
      audioSrc: 'assets/audio/penguin.mp3',
    },
    {
      word: 'snake',
      translation: 'змея',
      imageSrc: 'assets/images/snake.png',
      audioSrc: 'assets/audio/snake.mp3',
    },
    {
      word: 'tiger',
      translation: 'обнимать',
      imageSrc: 'assets/images/tiger.png',
      audioSrc: 'assets/audio/tiger.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      imageSrc: 'assets/images/turtle.png',
      audioSrc: 'assets/audio/turtle.mp3',
    },
  ];
  body: Word[] = [
    {
      word: 'back',
      translation: 'спина',
      imageSrc: 'assets/images/back.png',
      audioSrc: 'assets/audio/back.mp3',
    },
    {
      word: 'beard',
      translation: 'борода',
      imageSrc: 'assets/images/beard.png',
      audioSrc: 'assets/audio/beard.mp3',
    },
    {
      word: 'ear',
      translation: 'ухо',
      imageSrc: 'assets/images/ear.png',
      audioSrc: 'assets/audio/ear.mp3',
    },
    {
      word: 'eye',
      translation: 'глаз',
      imageSrc: 'assets/images/eye.png',
      audioSrc: 'assets/audio/eye.mp3',
    },
    {
      word: 'foot',
      translation: 'нога',
      imageSrc: 'assets/images/foot.png',
      audioSrc: 'assets/audio/foot.mp3',
    },
    {
      word: 'hand',
      translation: 'рука',
      imageSrc: 'assets/images/hand.png',
      audioSrc: 'assets/audio/hand.mp3',
    },
    {
      word: 'head',
      translation: 'голова',
      imageSrc: 'assets/images/head.png',
      audioSrc: 'assets/audio/head.mp3',
    },
    {
      word: 'lips',
      translation: 'губы',
      imageSrc: 'assets/images/lips.png',
      audioSrc: 'assets/audio/lips.mp3',
    },
    {
      word: 'neck',
      translation: 'шея',
      imageSrc: 'assets/images/neck.png',
      audioSrc: 'assets/audio/neck.mp3',
    },
    {
      word: 'nose',
      translation: 'нос',
      imageSrc: 'assets/images/nose.png',
      audioSrc: 'assets/audio/nose.mp3',
    },
    {
      word: 'teeth',
      translation: 'зубы',
      imageSrc: 'assets/images/teeth.png',
      audioSrc: 'assets/audio/teeth.mp3',
    },
    {
      word: 'tongue',
      translation: 'язык',
      imageSrc: 'assets/images/tongue.png',
      audioSrc: 'assets/audio/tongue.mp3',
    },
  ];
  clothes: Word[] = [
    {
      word: 'coat',
      translation: 'пальто',
      imageSrc: 'assets/images/coat.png',
      audioSrc: 'assets/audio/coat.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      imageSrc: 'assets/images/dress.png',
      audioSrc: 'assets/audio/dress.mp3',
    },
    {
      word: 'jacket',
      translation: 'жакет',
      imageSrc: 'assets/images/jacket.png',
      audioSrc: 'assets/audio/jacket.mp3',
    },
    {
      word: 'jeans',
      translation: 'джинсы',
      imageSrc: 'assets/images/jeans.png',
      audioSrc: 'assets/audio/jeans.mp3',
    },
    {
      word: 'panties',
      translation: 'трусы',
      imageSrc: 'assets/images/panties.png',
      audioSrc: 'assets/audio/panties.mp3',
    },
    {
      word: 'shirt',
      translation: 'футболка',
      imageSrc: 'assets/images/shirt.png',
      audioSrc: 'assets/audio/shirt.mp3',
    },
    {
      word: 'shoes',
      translation: 'обувь',
      imageSrc: 'assets/images/shoes.png',
      audioSrc: 'assets/audio/shoes.mp3',
    },
    {
      word: 'shorts',
      translation: 'шорты',
      imageSrc: 'assets/images/shorts.png',
      audioSrc: 'assets/audio/shorts.mp3',
    },
    {
      word: 'skirt',
      translation: 'юбка',
      imageSrc: 'assets/images/skirt.png',
      audioSrc: 'assets/audio/skirt.mp3',
    },
    {
      word: 'socks',
      translation: 'носки',
      imageSrc: 'assets/images/socks.png',
      audioSrc: 'assets/audio/socks.mp3',
    },
    {
      word: 'sweater',
      translation: 'свитер',
      imageSrc: 'assets/images/sweater.png',
      audioSrc: 'assets/audio/sweater.mp3',
    },
    {
      word: 'swimsuit',
      translation: 'купальник',
      imageSrc: 'assets/images/swimsuit.png',
      audioSrc: 'assets/audio/swimsuit.mp3',
    },
  ];
  supplies: Word[] = [
    {
      word: 'pen',
      translation: 'ручка',
      imageSrc: 'assets/images/pen.png',
      audioSrc: 'assets/audio/pen.mp3',
    },
    {
      word: 'pencil',
      translation: 'карандаш',
      imageSrc: 'assets/images/pencil.png',
      audioSrc: 'assets/audio/pencil.mp3',
    },
    {
      word: 'scissors',
      translation: 'ножницы',
      imageSrc: 'assets/images/scissors.png',
      audioSrc: 'assets/audio/scissors.mp3',
    },
    {
      word: 'ruler',
      translation: 'линейка',
      imageSrc: 'assets/images/ruler.png',
      audioSrc: 'assets/audio/ruler.mp3',
    },
    {
      word: 'sharpener',
      translation: 'точилка',
      imageSrc: 'assets/images/sharpener.png',
      audioSrc: 'assets/audio/sharpener.mp3',
    },
    {
      word: 'eraser',
      translation: 'ластик',
      imageSrc: 'assets/images/eraser.png',
      audioSrc: 'assets/audio/eraser.mp3',
    },
    {
      word: 'glue',
      translation: 'клей',
      imageSrc: 'assets/images/glue.png',
      audioSrc: 'assets/audio/glue.mp3',
    },
    {
      word: 'book',
      translation: 'книга',
      imageSrc: 'assets/images/book.png',
      audioSrc: 'assets/audio/book.mp3',
    },
    {
      word: 'notebook',
      translation: 'тетрадь',
      imageSrc: 'assets/images/notebook.png',
      audioSrc: 'assets/audio/notebook.mp3',
    },
    {
      word: 'brush',
      translation: 'кисть',
      imageSrc: 'assets/images/brush.png',
      audioSrc: 'assets/audio/brush.mp3',
    },
    {
      word: 'paints',
      translation: 'краски',
      imageSrc: 'assets/images/paints.png',
      audioSrc: 'assets/audio/paints.mp3',
    },
    {
      word: 'album',
      translation: 'альбом',
      imageSrc: 'assets/images/album.png',
      audioSrc: 'assets/audio/album.mp3',
    },
  ];
  fruits: Word[] = [
    {
      word: 'apple',
      translation: 'яблоко',
      imageSrc: 'assets/images/apple.png',
      audioSrc: 'assets/audio/apple.mp3',
    },
    {
      word: 'apricot',
      translation: 'абрикос',
      imageSrc: 'assets/images/apricot.png',
      audioSrc: 'assets/audio/apricot.mp3',
    },
    {
      word: 'banana',
      translation: 'банан',
      imageSrc: 'assets/images/banana.png',
      audioSrc: 'assets/audio/banana.mp3',
    },
    {
      word: 'blueberry',
      translation: 'голубика',
      imageSrc: 'assets/images/blueberry.png',
      audioSrc: 'assets/audio/blueberry.mp3',
    },
    {
      word: 'cherry',
      translation: 'вишня',
      imageSrc: 'assets/images/cherry.png',
      audioSrc: 'assets/audio/cherry.mp3',
    },
    {
      word: 'grapes',
      translation: 'виноград',
      imageSrc: 'assets/images/grapes.png',
      audioSrc: 'assets/audio/grapes.mp3',
    },
    {
      word: 'kiwi',
      translation: 'киви',
      imageSrc: 'assets/images/kiwi.png',
      audioSrc: 'assets/audio/kiwi.mp3',
    },
    {
      word: 'lemon',
      translation: 'лимон',
      imageSrc: 'assets/images/lemon.png',
      audioSrc: 'assets/audio/lemon.mp3',
    },
    {
      word: 'orange',
      translation: 'апельсин',
      imageSrc: 'assets/images/orange.png',
      audioSrc: 'assets/audio/orange.mp3',
    },
    {
      word: 'pear',
      translation: 'груша',
      imageSrc: 'assets/images/pear.png',
      audioSrc: 'assets/audio/pear.mp3',
    },
    {
      word: 'strawberry',
      translation: 'клубника',
      imageSrc: 'assets/images/strawberry.png',
      audioSrc: 'assets/audio/strawberry.mp3',
    },
    {
      word: 'watermelon',
      translation: 'арбуз',
      imageSrc: 'assets/images/watermelon.png',
      audioSrc: 'assets/audio/watermelon.mp3',
    },
  ];
  vegetables: Word[] = [
    {
      word: 'beet',
      translation: 'свекла',
      imageSrc: 'assets/images/beet.png',
      audioSrc: 'assets/audio/beet.mp3',
    },
    {
      word: 'cabbage',
      translation: 'капуста',
      imageSrc: 'assets/images/cabbage.png',
      audioSrc: 'assets/audio/cabbage.mp3',
    },
    {
      word: 'carrot',
      translation: 'морковь',
      imageSrc: 'assets/images/carrot.png',
      audioSrc: 'assets/audio/carrot.mp3',
    },
    {
      word: 'corn',
      translation: 'кукуруза',
      imageSrc: 'assets/images/corn.png',
      audioSrc: 'assets/audio/corn.mp3',
    },
    {
      word: 'cucumber',
      translation: 'огурец',
      imageSrc: 'assets/images/cucumber.png',
      audioSrc: 'assets/audio/cucumber.mp3',
    },
    {
      word: 'garlic',
      translation: 'чеснок',
      imageSrc: 'assets/images/garlic.png',
      audioSrc: 'assets/audio/garlic.mp3',
    },
    {
      word: 'mushroom',
      translation: 'гриб',
      imageSrc: 'assets/images/mushroom.png',
      audioSrc: 'assets/audio/mushroom.mp3',
    },
    {
      word: 'onion',
      translation: 'лук',
      imageSrc: 'assets/images/onion.png',
      audioSrc: 'assets/audio/onion.mp3',
    },
    {
      word: 'peas',
      translation: 'горох',
      imageSrc: 'assets/images/peas.png',
      audioSrc: 'assets/audio/peas.mp3',
    },
    {
      word: 'pepper',
      translation: 'перец',
      imageSrc: 'assets/images/pepper.png',
      audioSrc: 'assets/audio/pepper.mp3',
    },
    {
      word: 'potato',
      translation: 'картошка',
      imageSrc: 'assets/images/potato.png',
      audioSrc: 'assets/audio/potato.mp3',
    },
    {
      word: 'tomato',
      translation: 'помидор',
      imageSrc: 'assets/images/tomato.png',
      audioSrc: 'assets/audio/tomato.mp3',
    },
  ];
  nature: Word[] = [
    {
      word: 'cloud',
      translation: 'облако',
      imageSrc: 'assets/images/cloud.png',
      audioSrc: 'assets/audio/cloud.mp3',
    },
    {
      word: 'desert',
      translation: 'пустыня',
      imageSrc: 'assets/images/desert.png',
      audioSrc: 'assets/audio/desert.mp3',
    },
    {
      word: 'forest',
      translation: 'лес',
      imageSrc: 'assets/images/forest.png',
      audioSrc: 'assets/audio/forest.mp3',
    },
    {
      word: 'lake',
      translation: 'озеро',
      imageSrc: 'assets/images/lake.png',
      audioSrc: 'assets/audio/lake.mp3',
    },
    {
      word: 'moon',
      translation: 'луна',
      imageSrc: 'assets/images/moon.png',
      audioSrc: 'assets/audio/moon.mp3',
    },
    {
      word: 'mountain',
      translation: 'гора',
      imageSrc: 'assets/images/mountain.png',
      audioSrc: 'assets/audio/mountain.mp3',
    },
    {
      word: 'river',
      translation: 'река',
      imageSrc: 'assets/images/river.png',
      audioSrc: 'assets/audio/river.mp3',
    },
    {
      word: 'sea',
      translation: 'море',
      imageSrc: 'assets/images/sea.png',
      audioSrc: 'assets/audio/sea.mp3',
    },
    {
      word: 'sun',
      translation: 'солнце',
      imageSrc: 'assets/images/sun.png',
      audioSrc: 'assets/audio/sun.mp3',
    },
    {
      word: 'water',
      translation: 'вода',
      imageSrc: 'assets/images/water.png',
      audioSrc: 'assets/audio/water.mp3',
    },
    {
      word: 'waterfall',
      translation: 'водопад',
      imageSrc: 'assets/images/waterfall.png',
      audioSrc: 'assets/audio/waterfall.mp3',
    },
    {
      word: 'wind',
      translation: 'ветер',
      imageSrc: 'assets/images/wind.png',
      audioSrc: 'assets/audio/wind.mp3',
    },
  ];
  home: Word[] = [
    {
      word: 'bathtub',
      translation: 'ванна',
      imageSrc: 'assets/images/bathtub.png',
      audioSrc: 'assets/audio/bathtub.mp3',
    },
    {
      word: 'bed',
      translation: 'кровать',
      imageSrc: 'assets/images/bed.png',
      audioSrc: 'assets/audio/bed.mp3',
    },
    {
      word: 'chair',
      translation: 'стул',
      imageSrc: 'assets/images/chair.png',
      audioSrc: 'assets/audio/chair.mp3',
    },
    {
      word: 'fridge',
      translation: 'холодильник',
      imageSrc: 'assets/images/fridge.png',
      audioSrc: 'assets/audio/fridge.mp3',
    },
    {
      word: 'microwave',
      translation: 'микроволновка',
      imageSrc: 'assets/images/microwave.png',
      audioSrc: 'assets/audio/microwave.mp3',
    },
    {
      word: 'mirror',
      translation: 'зеркало',
      imageSrc: 'assets/images/mirror.png',
      audioSrc: 'assets/audio/mirror.mp3',
    },
    {
      word: 'sink',
      translation: 'раковина',
      imageSrc: 'assets/images/sink.png',
      audioSrc: 'assets/audio/sink.mp3',
    },
    {
      word: 'sofa',
      translation: 'диван',
      imageSrc: 'assets/images/sofa.png',
      audioSrc: 'assets/audio/sofa.mp3',
    },
    {
      word: 'table',
      translation: 'стол',
      imageSrc: 'assets/images/table.png',
      audioSrc: 'assets/audio/table.mp3',
    },
    {
      word: 'toilet',
      translation: 'унитаз',
      imageSrc: 'assets/images/toilet.png',
      audioSrc: 'assets/audio/toilet.mp3',
    },
    {
      word: 'TV',
      translation: 'телевизор',
      imageSrc: 'assets/images/tv.png',
      audioSrc: 'assets/audio/tv.mp3',
    },
    {
      word: 'wardrobe',
      translation: 'шкаф',
      imageSrc: 'assets/images/wardrobe.png',
      audioSrc: 'assets/audio/wardrobe.mp3',
    },
  ];

  categories: Category[] = [
    {
      name: WordCategory.animals,
      id: '1',
    },
    {
      name: WordCategory.body,
      id: '2',
    },
    {
      name: WordCategory.clothes,
      id: '3',
    },
    {
      name: WordCategory.supplies,
      id: '4',
    },
    {
      name: WordCategory.fruits,
      id: '5',
    },
    {
      name: WordCategory.home,
      id: '6',
    },
    {
      name: WordCategory.nature,
      id: '7',
    },
    {
      name: WordCategory.vegetables,
      id: '8',
    },
  ];

  words = {
    [WordCategory.animals]: this.animals,
    [WordCategory.body]: this.body,
    [WordCategory.clothes]: this.clothes,
    [WordCategory.supplies]: this.supplies,
    [WordCategory.fruits]: this.fruits,
    [WordCategory.home]: this.home,
    [WordCategory.nature]: this.nature,
    [WordCategory.vegetables]: this.vegetables,
  };

  getWordCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getCategoryWords(category: WordCategory): Observable<Word[]> {
    return of(this.words[category]);
  }
}
