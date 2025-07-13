class Post {
  constructor(id, name, author, text, addData, likes, img, hashtagList) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._text = text;
    this._addData = addData;
    this._likes = likes;
    this._img = img;
    this._hashtagList = hashtagList;
  }

  changeText(newText) {
    return (this._text = newText);
  }

  likesIncrease() {
    return this._likes++;
  }

  likesDecrease() {
    return this._likes--;
  }
}

const post1 = new Post(
  1,
  'Story1',
  'John Doe',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida libero sed nunc feugiat, eu.',
  2024,
  23,
  '',
  ['one', 'two', 'three', 'four', 'five', 'six']
);


post1.changeText('New text lorem bla bla bla');
post1.likesIncrease();

// post1.likesDecrease();
console.log(post1);