
var catName1 = document.getElementById('cat-name');
//var catName2 = document.getElementById('cat-name2');
var clicks1 = document.getElementById('click-count');
//var clicks2 = document.getElementById('click-count2');
var cat1Photo = document.getElementById('cat-photo');
//var cat2Photo = document.getElementById('cat-photo2');
var count1 = 0;
//var count2 = 0;
var name1 = "Bob";
//var name2 = "Felix";


catName1.textContent = name1;
//catName2.textContent = name2;

clicks1.textContent = count1;
//catName2.textContent = count2;

cat1Photo.src = "https://c2.staticflickr.com/2/1557/25135549306_b671c01053_z.jpg";
//cat2Photo.src = "https://c2.staticflickr.com/2/1557/25135549306_b671c01053_z.jpg";


cat1Photo.addEventListener('click', function() {
    count1++;
    clicks1.textContent = count1;
});

// cat2Photo.addEventListener('click', function() {
//     count2++;
//     clicks2.textContent = count2;
// });
