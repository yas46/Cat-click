$(function(){

    var model = {
        currentCat: null,
        cats: [
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
        init: function(){
            var currentCat = model.cats[0];

            listView.init();
            catView.init();
        },

        getCurrentCat: function() {
            return model.currentCat;
        },

        setCurrentCat: function(){
            currentCat = cat;
        },

        getCats: function(){
            return model.cats;
        },

        incrementClickCount: function(){
            model.currentCat.clickCount++;
            catView.render;
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

    var catView = {
        init: function() {
            this.cat = document.getElementById('cat-box');
            this.catName = document.getElementById('cat-name');
            this.clickCount  = document.getElementById('click-count');
            this.catPhoto = document.getElementById('cat-photo');

            this.catPhoto.addEventListener('click', function(e) {
                controller.incrementClickCount();
            });

            this.render();
        },
        render: function() {
            var currentCat = controller.getCurrentCat;
            this.catName.textContent = currentCat.name;
            this.clickCount.textContent = currentCat.clickCount;
            this.catPhoto.src = 'https://' + currentCat.url + '.jpg';
        }

    };




});
