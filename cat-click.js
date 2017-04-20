
var catList = [];

var catFactory = function(name, url) {
    var temp = {};
    temp.name = name;
    temp.photo = url;
    temp.clicks = 0;

    ( function(name) {
        var ul = document.getElementById('cat-list');
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(name));
        li.addEventListener('click', (function() {
            return function() {
                showCat(temp);
            }
        })());
        ul.appendChild(li);
    })(name);
    return temp;
};

function showCat(cat) {
    document.getElementById('cat-name').innerHTML = cat.name;
    var photo = document.getElementById('cat-photo')
    photo.src = 'https://' + cat.photo + '.jpg';
    document.getElementById('click-count').innerHTML = cat.clicks;
    document.getElementById('cat-box').style.display = "block";

    photo.addEventListener('click', function() {
        cat.clicks++;
        document.getElementById('click-count').innerHTML = cat.clicks;
    });
}


cat1 = catFactory("Tom", "c2.staticflickr.com/2/1557/25135549306_b671c01053_z");
cat2 = catFactory("Felix", "c2.staticflickr.com/6/5482/11637643254_8d7d8f4b48_z");
cat3 = catFactory("Garfield", "c1.staticflickr.com/9/8501/8300920648_d4a21bba59");
cat4 = catFactory("Alley", "c1.staticflickr.com/3/2386/1696417701_2ba5cda00c");
cat5 = catFactory("Sue", "c2.staticflickr.com/4/3360/3591850431_4599f509e2");








//catName1.innerHTML = name1;
//catName2.innerHTML = name2;


//cat1.addEventListener('click', function() {
//    count1++;
//    clicks1.innerHTML = count1;
//});

//cat2.addEventListener('click', function() {
//    count2++;
//    clicks2.innerHTML = count2;
//});
