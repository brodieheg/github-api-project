const button = document.querySelector('.search')
button.addEventListener('click', function(){
  imageSearch();
  document.querySelector('#search-query').value = ""
})

const imageSearch = function(){
  const search = document.querySelector('#search-query').value;
  getImages(search);
  

}

const getImages = function(query){

  const url = 'https://api.github.com/repos/facebook/react/commits/' + query;
  fetch (url, {
    method: 'GET',
    dataType: 'json'
  })
  .then(data => data.json())
  .then(data => postSearch(data.author.login, data.author.avatar_url))
}

var postSearch = function(login, url){
  const postDiv = document.createElement('div');
  const userName = document.createElement('p');
  const loginNode = document.createTextNode(login);
  userName.appendChild(loginNode);
  const image = document.createElement('img');
  image.src = url;
  image.className = "img-thumbnail border-0"
  postDiv.className = "results text-center border border-3 col-md-3 d-inline-block"
  postDiv.appendChild(userName);
  postDiv.appendChild(image);
  document.querySelector('.committers').appendChild(postDiv);
}