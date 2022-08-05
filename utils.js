var currentGalleryItem = null;
const galleryItems = document.querySelectorAll(".gallery-description");

galleryItems.forEach(galleryItem => {
  galleryItem.addEventListener('click', () => {

    //Toggle CSS class
    galleryItem.classList.toggle("active-gallery-description");




    //Hide the current displayed gallery item if any
    if(currentGalleryItem !== null && currentGalleryItem !== galleryItem){
      currentGalleryItem.classList.toggle("active-gallery-description");

    }



    //Toggle temporary value
    if(galleryItem !== currentGalleryItem)
        currentGalleryItem = galleryItem;
    else
        currentGalleryItem = null;

  })
})
