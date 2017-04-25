$(function(){

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

    var octopus = {

    };

    var model = {
        var catList = [];
    };

});
