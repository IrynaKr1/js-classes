class Post {
  constructor(id, name, author, text, addData, likes, img, hashtagList) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._text = text;
    this._addData = addData;
    this.likes = likes;
    this._img = img;
    this._hashtagList = hashtagList;
  }

  set likes(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Likes must be a number value');
    }
    if (likes < 0) {
        throw new RangeError ("Likes can't be a negative number");
    }
    this._likes = value;
  }

  get likes() {
    return this._likes;
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

  render() {
    const {
      _id: id,
      _name: postTitle,
      _author: postAuthor,
      _text: postText,
      _addData: postDate,
      _likes: likes,
      _img: img,
      _hashtagList: hashtagList,
    } = this;

    return document.write(`
        <article class="userPost">
      <div class="imgWrapper">
        <img
          src="${img}"
          alt="post image"
        />
      </div>
      <h2 class="postName">${postTitle}</h2>
      <div class="postDetais">
        <h3 class="postAuthor">${postAuthor}</h3>
        <p class="posdDate">${postDate}</p>
      </div>
      <p class="text">
        ${postText}
      </p>
      <p class="hashTags">${hashtagList}</p>
      <div class="likes">
        <i class="fa-regular fa-thumbs-up"></i>
        <span class="likesT">${likes}</span>
      </div>
    </article>`);
  }
}

try {
   const post1 = new Post(
  1,
  'Test Post Title',
  'John Doe',
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque
        non perferendis et, similique odio provident quasi corporis est
        temporibus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Consequuntur architecto, repellat et ut minima nemo molestias nihil
        magnam mollitia aut corporis sequi, aspernatur rem excepturi eligendi
        sit soluta temporibus aliquid necessitatibus? Totam obcaecati culpa
        soluta accusantium ipsam distinctio sequi. Sed consequatur maiores illo
        neque similique cupiditate culpa a id nulla?`,
  2024,
  23,
  'https://images.unsplash.com/photo-1752350434950-50e8df9c268e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ['one', 'two', 'three', 'four', 'five', 'six']
); 
//post1.changeText('New text lorem bla bla bla');
//post1.likesIncrease();
// post1.likesDecrease();
post1.render();
console.log(post1);
} catch (error) {
    console.error(error);
}



