//This JS file only has two cats - also, has no cat menu.

var cat1 = document.getElementById('cat-photo1');
var cat2 = document.getElementById('cat-photo2');
var clicks1 = document.getElementById('counter1');
var clicks2 = document.getElementById('counter2');
var catName1 = document.getElementById('cat1');
var catName2 = document.getElementById('cat2');
var count1 = 0;
var count2 = 0;
var name1 = "Bob";
var name2 = "Felix";


catName1.innerHTML = name1;
catName2.innerHTML = name2;


cat1.addEventListener('click', function() {
    count1++;
    clicks1.innerHTML = count1;
});

cat2.addEventListener('click', function() {
    count2++;
    clicks2.innerHTML = count2;
});
