// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
       response.data.articles.bootstrap.forEach(item =>{
            document.querySelector('.cards-container').appendChild(newCard(item));
       })
       response.data.articles.javascript.forEach(item =>{
        document.querySelector('.cards-container').appendChild(newCard(item));
        })
    response.data.articles.jquery.forEach(item =>{
    document.querySelector('.cards-container').appendChild(newCard(item));
        })
    response.data.articles.node.forEach(item =>{
    document.querySelector('.cards-container').appendChild(newCard(item));
        })
    response.data.articles.technology.forEach(item =>{
    document.querySelector('.cards-container').appendChild(newCard(item));
        })
       
 
    })

function newCard (obj) {
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          img = document.createElement('img'),
          name = document.createElement('span');  

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(name);

    headline.textContent = obj.headline;
    author.textContent = obj.authorName;
    img.src = obj.authorPhoto;
    name.textContent = obj.authorName;

    return card;
}

