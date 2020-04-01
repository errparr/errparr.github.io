const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Looping through images */
//This link helped us tremendously with getting the base of our code//
//https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/gallery

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement("img");
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(p) {
      displayedImage.src = p.target.src;
    }
  }


/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','ligth');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}



console.log(img_array);