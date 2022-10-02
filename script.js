// add links class on click of a hamburger button (nav-toggle)
const navBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')
navBtn.addEventListener('click', function () {
    links.classList.toggle("show-links")
})
//end of navbtn
//data for rewievs
const reviews = [
    {
        id: 1,
        name: "Ariah Healy",
        course: "Html",
        img:
            "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde, ea incidunt est vero placeat at harum architecto natus porro ducimus suscipit ab ad ratione vel eligendi eius laudantium quas animi tempora?",
    },
    {
        id: 2,
        name: "Alma Larson",
        course: "Css",
        img:
            "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sunt blanditiis libero ipsa odit est accusamus ratione esse alias sed provident maxime quibusdam obcaecati inventore neque, perspiciatis commodi incidunt nesciunt quo? Consectetur eum quidem error, doloremque libero voluptate at eius?",
    },
    {
        id: 3,
        name: "Zayd Parker",
        course: "Javascript",
        img:
            "https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolorem! Praesentium laudantium ratione hic ut necessitatibus consequuntur cupiditate, omnis accusantium laboriosam ducimus debitis similique deleniti!",
    },
    {
        id: 4,
        name: "Enrico Lim",
        course: "Javascript",
        img:
            "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quasi ad amet exercitationem, suscipit porro officia facere, odit provident distinctio ullam asperiores corporis reiciendis laboriosam debitis sit accusamus natus beatae, rem mollitia sed pariatur sequi. Tempora pariatur facere perferendis. ",
    },
];
//end of data

// make reviews scroll

const backBtn = document.querySelector('.go-back-btn');
const forwardBtn = document.querySelector('.go-forward-btn');
const randomBtn = document.querySelector('.random-btn');

const reviewImg = document.querySelector('.reviews-img-container');
const reviewName = document.getElementById('author');
const courseName = document.getElementById('course');
const info = document.getElementById('info');
// starting index of items
let startItem = 0;
// loads instantly with the page
window.addEventListener('DOMContentLoaded', function () {
    reviewer(startItem);
})
// make functions that update startItem +1 and -1
forwardBtn.addEventListener('click', function () {
    startItem++;
    if (startItem > 3) {
        startItem = 0;
    }
    reviewer(startItem);
})
backBtn.addEventListener('click', function () {
    startItem--;
    if (startItem < 0) {
        startItem = reviews.length - 1;
    }
    reviewer(startItem);

})
randomBtn.addEventListener('click', function () {
    startItem = Math.floor(Math.random() * 4);
    console.log(startItem);
    reviewer(startItem);

})


function reviewer(person) {
    const item = reviews[startItem];
    reviewImg.style.background = `url(${item.img}) center/cover no-repeat`;
    reviewName.textContent = item.name;
    courseName.textContent = item.course;
    info.textContent = item.text;
}