//////// preloader
// need to enable Network - Fast 3G
const photoRef = document.querySelector('.photo');
const preloaderRef = document.querySelector('.preloader');
const hidePreloader = () => {
  preloaderRef.remove();
};
// прелоадер надо убрать как только картинка загрузится
const asyncImageLoader = imageRef => {
  return new Promise((resolve, reject) => {
    imageRef.onload = function () {
      resolve(imageRef);
    };
    imageRef.onerror = function (error) {
      reject(error);
    };
  });
};

asyncImageLoader(photoRef).then(hidePreloader());
