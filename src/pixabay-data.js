const APIKEY = "19023503-87b010c566b4c2cdf0586d799"

let randomPg = Math.random() % 10;
const URL = "https://pixabay.com/api/?key=" + APIKEY + "&q=popular&image_type=all&page=" + randomPg;

let photos = [];

async function getPhotos() {
    // debugger
    const response = await fetch(URL);
    const photos = await response.json();
    return photos;
    
}

getPhotos().then(allPhotos => {
    allPhotos.hits.forEach(currPhoto => {
        photos.push({id:currPhoto.id, tags:currPhoto.tags, webformatURL:currPhoto.webformatURL, likes:currPhoto.likes, user:currPhoto.user})
    })
});

export default photos;
