//Cat menu added to the functionality.

var catList = [];

var catFactory = function(name, url) {
    var temp = {};
    temp.name = name;
    temp.photo = url;
    temp.clicks = 0;
    temp.clickListener = false;

    ( function(name) {
        var clickCount = 0;
        catList.push(name);

        //create cat menu list
        var ul = document.getElementById('cat-list');
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(name));
        li.addEventListener('click', (function() {
            return function() {
                hideCat();
                document.getElementById(name).style.display = 'block';
            }
        })());
        ul.appendChild(li);

        //create individual cat div with name, image and click click-count
        var div = document.createElement('div');
        div.id = name;
        div.className = 'cat-div';
        var span = document.createElement('span');
        span.className = 'cat-name';
        var image = document.createElement('img');
        image.src = 'https://' + url + '.jpg';
        image.className = 'cat-photo';
        var clickText = document.createElement('span');
        clickText.className = 'click-text';
        var lineBreak = document.createElement('br');

        document.getElementById('cat-box').appendChild(div);
        div.appendChild(span);
        div.appendChild(clickText);
        div.appendChild(lineBreak);
        div.appendChild(image);

        span.innerHTML = name;
        clickText.innerHTML = " clicks: " + clickCount;

        image.addEventListener('click', function() {
            clickCount++;
            clickText.innerHTML = " clicks: " + clickCount;
            console.log(clickCount);
        });

    })(name);

    return temp;
};

function hideCat() {
    catList.forEach( function(cat) {
        document.getElementById(cat).style.display = "none";
    });
}

cat1 = catFactory("Tom", "c2.staticflickr.com/2/1557/25135549306_b671c01053_z");
cat2 = catFactory("Felix", "c2.staticflickr.com/6/5482/11637643254_8d7d8f4b48_z");
cat3 = catFactory("Garfield", "c1.staticflickr.com/9/8501/8300920648_d4a21bba59");
cat4 = catFactory("Alley", "c1.staticflickr.com/3/2386/1696417701_2ba5cda00c");
cat5 = catFactory("Sue", "c2.staticflickr.com/4/3360/3591850431_4599f509e2");
