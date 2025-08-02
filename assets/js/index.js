const HASHTAG_LIST = ['1', '2', '3', '4', '5', '6'];
const TAG_COLORS = {
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'orange',
  5: 'purple',
  6: 'brown',
};

class Post {
  constructor(id, name, author, text, addData, likes, img, hashtagList) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._text = text;
    this._addData = addData;
    this.likes = likes;
    this._img = img;
    this.hashtagList = hashtagList;
  }

  set likes(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Likes must be a number value');
    }
    if (value < 0) {
      throw new RangeError("Likes can't be a negative number");
    }
    this._likes = value;
  }

  get likes() {
    return this._likes;
  }

  set hashtagList(hashtags) {
    this._hashtagList = [];
    try {
      hashtags.forEach((e) => this.addHashtag(e));
    } catch (error) {
      throw new Error('Hashtag list will not be created');
    }
  }

  get hashtagList() {
    return this._hashtagList;
  }

  addHashtag(hashtag) {
    if (this._hashtagList.length >= 6) {
      throw new RangeError('Size > 6');
    }

    if (!HASHTAG_LIST.includes(hashtag)) {
      throw new RangeError('No in the list');
    }

    if (this._hashtagList.includes(hashtag)) {
      throw new RangeError(
        'Hashtag is already on the list. Duplicates is not allowed'
      );
    }

    this._hashtagList.push(hashtag);
  }

  renderHashtags() {
    return this._hashtagList
      .map(
        (hashtag) =>
          `<span class="hashtag" style="color: ${TAG_COLORS[hashtag]};">#${hashtag}</span>`
      )
      .join(' ');
  }

  changeText(newText) {
    return (this._text = newText);
  }

  likesIncrease() {
    this.likes = this._likes + 1;
    return this._likes;
  }

  likesDecrease() {
    if (this._likes <= 0) {
      console.warn('Cannot decrease likes below 0');
      return this._likes;
    }
    this.likes = this._likes - 1;
    return this._likes;
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

    const coloredHashtags = this.renderHashtags();

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
      <p class="hashTags">${coloredHashtags}</p>
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
    2,
    'https://images.unsplash.com/photo-1752350434950-50e8df9c268e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ['1', '2', '3', '4', '5', '6']
  );
  //post1.changeText('New text lorem bla bla bla');
  //post1.likesIncrease();
  post1.likesDecrease();
  post1.render();
  console.log(post1);
  // post1.addHashtag('5');
  console.log(post1);
} catch (error) {
  console.error(error);
}
