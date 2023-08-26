let name1 = document.querySelector('.name')
let main = document.querySelector('.main')
let population1 = document.querySelector('.population')
cities1 = document.querySelector('.cities')
let modal = document.querySelector('.modal')
fetch("./countries.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        data.Planets.map(({img}) => {
            console.log(img);
            let box = document.createElement('img')
            document.body.appendChild(box)
            box.setAttribute('class', 'box')
            box.setAttribute('src',img)

        })
    });

setTimeout(() => {
    let box = document.querySelectorAll('.box')
    box[1].style.width = '300px'
    box[5].style.width = '700px'
    box[5].style.height = '400px'

    box[0].style.left = '640px'
    box[0].style.bottom = '100px'

    box[1].style.right = '600px'
    box[1].style.bottom = '100px'
    box[1].style.width = '200px'

    box[2].style.right = '600px'
    box[2].style.top = '100px'

    box[3].style.right = '500px'
    box[3].style.top = '400px'


    box[4].style.left = '990px'
    box[4].style.top = '10px'
    box[4].style.height = '250px'
    box[4].style.width = '250px'

    box[7].style.left = '1020px'
    box[7].style.bottom = '40px'
    box[7].style.height = '200px'
    box[7].style.width = '200px'

    box[6].style.left = '400px'
    box[6].style.top = '300px'
    box[6].style.height = '480px'
    box[6].style.width = '500px'

    box[8].style.left = '630px'
    box[8].style.top = '120px'
    box[8].style.width = '200px'

    box[5].style.left = '920px'
    box[5].style.width = '400px'

    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', () => {
            fetch("./countries.json")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    data.Planets.map(({ name, about,img }) => {
                        if (box[i].src == img) {
                            main.style.display = 'flex'
                            name1.innerHTML = name
                            population1.innerHTML = about
                        }
                    })
                });
        })

    }
}, 10);
modal.addEventListener('click', (e) => {
    e.stopPropagation()
})
main.addEventListener('click', () => {
    main.style.display = 'none'
})


