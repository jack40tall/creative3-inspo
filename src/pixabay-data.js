const APIKEY = "19023503-87b010c566b4c2cdf0586d799"

let randomPgNum = (Math.ceil(Math.random() * 6));
// debugger;
const URL = "https://pixabay.com/api/?key=" + APIKEY + "&q=popular&orientation=horizontal&image_type=all&per_page=70&page=" + randomPgNum;

let photos = [];

async function getPhotos() {
    // debugger
    const response = await fetch(URL);
    const photos = await response.json();
    return photos;
    
}

getPhotos().then(allPhotos => {
    allPhotos.hits.forEach(currPhoto => {
        photos.push({id:currPhoto.id, tags:currPhoto.tags, img:currPhoto.webformatURL, likes:currPhoto.likes, user:currPhoto.user})
    })
});

export default photos;
