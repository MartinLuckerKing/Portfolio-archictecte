const deleteElement = () => {
    const gallery = document.querySelector(".gallery");
        for (let i = 0; gallery.childElementCount > 0; i++) {
            gallery.removeChild(gallery.firstChild);
        }
    };

const createElementById = (data, id) => {
        data.forEach(item =>{
        if (item.categoryId == id) {
            print()
        }
    });
};

const createElementOnClick = (data, id, selector) => {
    const objets = document.querySelector(selector);
    objets.addEventListener('click', function() {
        deleteElement(selector);
        createElementById(data, id);
            
    });
};

const print = () => {
    const gallery = document.querySelector(".gallery");
    
    const galleryFigure = document.createElement("figure");
    const galleryImg = document.createElement("img");
    const galleryFigureCaption = document.createElement("figcaption");

    galleryImg.src = item.imageUrl;
    galleryFigureCaption.innerHTML = item.title;

    gallery.appendChild(galleryFigure);
    galleryFigure.appendChild(galleryImg);
    galleryFigure.appendChild(galleryFigureCaption);
}

export const galleryFetchUrl = (url => {
    fetch(url)
        .then(response => {
            console.log('response:', response);
            return response.json();
        })
        .then(data => {
            createElementOnClick(data, 1, '#Objets')
            createElementOnClick(data, 2, '#Appartements')
            createElementOnClick(data, 3, '#Hotelsrestaurants')
        });
    });