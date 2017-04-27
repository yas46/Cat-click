$(function(){

    var model = {
        currentCat: null,
        catList: [
            {
                clickCount: 0,
                name: "Tom",
                url: "c2.staticflickr.com/2/1557/25135549306_b671c01053_z"
            },
            {
                clickCount: 0,
                name: "Felix",
                url: "c2.staticflickr.com/6/5482/11637643254_8d7d8f4b48_z"
            },
            {
                clickCount: 0,
                name: "Garfield",
                url: "c1.staticflickr.com/9/8501/8300920648_d4a21bba59"
            },
            {
                clickCount: 0,
                name: "Alley",
                url: "c1.staticflickr.com/3/2386/1696417701_2ba5cda00c"
            },
            {
                clickCount: 0,
                name: "Sue",
                url: "c2.staticflickr.com/4/3360/3591850431_4599f509e2"
            },
        ]
    };


    var controller = {

    };


    var catView = {
        init: function(name, url) {
            var div = document.createElement('div');
            var span = document.createElement('span');
            var image = document.createElement('img');
            var clickText = document.createElement('span');
            var lineBreak = document.createElement('br');
            div.id = name;
            div.className = 'cat-div';
            span.className = 'cat-name';
            image.src = 'https://' + url + '.jpg';
            image.className = 'cat-photo';
            clickText.className = 'click-text';
            catView.render(name, url)
        },
        render: function(name, url) {
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
        }

    };

    var listView = {
        init: function(name) {
            var ul = document.getElementById('cat-list');
            var li = document.createElement("li");
            listView.render(name)
        },
        render: function(name) {
            li.appendChild(document.createTextNode(name));
            li.addEventListener('click', (function() {
                return function() {
                    hideCat();
                    document.getElementById(name).style.display = 'block';
                }
            })());
            ul.appendChild(li);
        }
    };


});
