; + function() {
    window.Slider = function Slider(dom, arr) {
        let ul = document.createElement('ul');

        ul.classList.add("slider");

        let slides = [];
        let curSlide = 0;

        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.setAttribute("src", arr[i]);
            li.appendChild(img);
            ul.appendChild(li);
            slides.push(li);
        }

        dom.appendChild(ul);

        this.run = function() {
            this.nextSlide();
            setInterval(this.nextSlide, 4000);
        }

        this.nextSlide = function() {
            slides[curSlide].classList.remove("active");
            curSlide++;
            curSlide = curSlide < slides.length ? curSlide : 0;
            slides[curSlide].classList.add("active");
        }.bind(this);
    }
}();