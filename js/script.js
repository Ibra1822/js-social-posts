const posts = [
  {
      "id": 1,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/300?image=171",
      "author": {
          "name": "Phil Mangione",
          "image": "https://unsplash.it/300/300?image=15"
      },
      "likes": 80,
      "created": "2021-06-25"
  },
  {
      "id": 2,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=112",
      "author": {
          "name": "Sofia Perlari",
          "image": "https://unsplash.it/300/300?image=10"
      },
      "likes": 120,
      "created": "2021-09-03"
  },
  {
      "id": 3,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=234",
      "author": {
          "name": "Chiara Passaro",
          "image": "https://unsplash.it/300/300?image=20"
      },
      "likes": 78,
      "created": "2021-05-15"
  },
  {
      "id": 4,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=24",
      "author": {
          "name": "Luca Formicola",
          "image": null
      },
      "likes": 56,
      "created": "2021-04-03"
  },
  {
      "id": 5,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=534",
      "author": {
          "name": "Alessandro Sainato",
          "image": "https://unsplash.it/300/300?image=29"
      },
      "likes": 95,
      "created": "2021-03-05"
  }
];



// -------------------


let container = document.querySelector('#container')
container.innerHTML = '';

const userLikes = [1, 3, 4]


// -------------------


posts.forEach(post =>{

container.innerHTML += createall(post);

})


// -------------------


function createall(post){

let {id, author,content,media,likes,created} = post; 

return ` 

<div class="post">
<div class="post__header"> 
    <div class="post-meta">    

        <div class="post-meta__icon">
        
        ${author.image ? profilePh(author) : profileDef(author) }
        
        </div>

        <div class="post-meta__data">
            <div class="post-meta__author">${author.name}</div>
            <div class="post-meta__time">${formatDate(created)}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${content}</div>
<div class="post__image">
    <img src="${media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button ${isPostLiked(id) ? 'like-button--liked' : ''}  " href="#" data-postid="${id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${id }" class="js-likes-counter">${likes}</b> persone
        </div>
    </div> 
</div>  
</div> 

`
}

// -------------------


const likesButton = document.querySelectorAll('.like-button');

// -------------------


likesButton.forEach(likesButton =>{

    likesButton.addEventListener('click', function(event){

    event.preventDefault();

    const postId = this.getAttribute('data-postid')

    const counterDisp = document.getElementById('like-counter-'+ postId)

    let likes = parseInt(counterDisp.innerText);

    console.log(likes);

    if(this.classList.contains('like-button--liked')){

    this.classList.remove('like-button--liked')

    counterDisp.innerText = --likes;

    }else{
        this.classList.add('like-button--liked')

         counterDisp.innerText = ++likes;

    }
  
    console.log(postId);

    const likedPost = posts.filter(post => post.id == postId)

    likedPost[0].likes = likes;

    console.log(posts);

    })

})
// -------------------


function formatDate(date){

return date.split('-').reverse().join('-')

}

// -------------------



function isPostLiked(id){

   return userLikes.includes(id) 
}

// -------------------


function profilePh(author){

const {image,name} = author;
return ` <img class="profile-pic" src="${image}" alt="${name}"> `

}


// -------------------



function profileDef(author){

const {name} = author;

let initials = '';

const nameParts = name.split(' ');

nameParts.forEach( part => {

 initials += part[0];

})

return`

<div class='profile-pic-default'>

<span>${initials}</span>

</div>
`
}

// -------------------