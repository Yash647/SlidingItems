let prev = document.querySelector('#prev'); //previous button
let next = document.querySelector('#next'); // next button
let slider = document.querySelector('#slider'); // sliding frame
let scrollDist = slider.clientWidth-20; //distance by which to scroll

prev.addEventListener('click',moveLeft);
next.addEventListener('click',moveRight);

function moveLeft(e){
	slider.scrollBy(-scrollDist,0);
}

function moveRight(e){
	slider.scrollBy(scrollDist,0);	
}