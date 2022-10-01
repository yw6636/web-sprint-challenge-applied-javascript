import axios from "axios";

const Card = (article) => {

  // const card = document.createElement('div');
  // card.classList.add('card');
  // articles.headline.forEach(item => {
  //   const headline = document.createElement('div');
  //   headline.textContent = item
  //   headline.classList.add('headline');
  //   card.appendChild(headline);
  // })


  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorName = document.createElement ('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = `${article.headline}`;
  image.src = `${article.authorPhoto}`;
  authorName.textContent = `${article.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(image);

  card.addEventListener('click',() => {
    console.log(headline)
  })
  return card;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const selected = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {
    console.log(res);
    const javascript = res.data.articles.javascript;
    javascript.forEach(element => {
      selected.appendChild(Card(element))
    })
    const bootstrap = res.data.articles.bootstrap;
    bootstrap.forEach(element => {
      selected.appendChild(Card(element))
    })
    const technology = res.data.articles.technology;
    technology.forEach(element => {
      selected.appendChild(Card(element))
    })
    const jquery = res.data.articles.jquery;
    jquery.forEach(element => {
      selected.appendChild(Card(element))
    })
    const node = res.data.articles.node;
    node.forEach(element => {
      selected.appendChild(Card(element))
    }) 
  })
  .catch(err => {
    console.log(err)
  })
}
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
