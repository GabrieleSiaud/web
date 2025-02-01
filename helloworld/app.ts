var container = document.querySelector('.container') as HTMLDivElement;

var heading = document.createElement('h1');
heading.textContent = 'Myliuuuu tave ❤️';

var image = document.createElement('img');
image.src = 'images/aretas.jpg'; 
image.alt = 'Aretas Picture';
image.width = 300;

container.appendChild(heading);
container.appendChild(image);

document.body.appendChild(heading);
