enum Permission {
    ADMIN = 'ADMIN',
    READ_ONLY = 'READ_ONLY'
}

enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}

const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement;
const returningUserDisplay = document.querySelector("#returningUser") as HTMLElement;
const userNameDisplay = document.querySelector("#userName") as HTMLElement;
const propertiesDisplay = document.querySelector(".properties") as HTMLElement;
const footerDisplay = document.querySelector(".footer") as HTMLElement;
const getReviewsBtn = document.querySelector("#getReviewsBtn") as HTMLElement;
const reviewListDisplay = document.querySelector(".reviewList") as HTMLElement;
const mainImageDisplay = document.querySelector(".main-image") as HTMLElement;


let isLoggedIn : boolean

interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string
}

// Get Review Details
const reviews: Review[] = [
    {
        name: 'Shetia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2014'
    },
    {
        name: 'Andrej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '24-02-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '23-12-2013'
    },
    {
        name: 'Harsh',
        stars: 5,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '16-08-2018'
    }
]
const showReviewTotal = (value : number, reviewerName : string, isLoyaltyUser : LoyaltyUser) => {
    const icon = LoyaltyUser.GOLD_USER ? "🌟" : ""
    let makeMultiple
    if (value > 1 || value == 0) {
        makeMultiple = 's'
    } else {
        makeMultiple = ''
    }
    reviewTotalDisplay.innerHTML = `${value.toString()} Review${makeMultiple} | Last Reviewed by ${reviewerName} ${icon}`
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const getReviews = () => {
    let sortedReviews =  reviews.sort((a, b) => b.stars - a.stars)
    let topTwoReviews = sortedReviews.slice(0,2)
    let reviewList = ''
    for (let i = 0; i < topTwoReviews.length; i++) {
        reviewList = `<li>${topTwoReviews[i].stars} stars from ${topTwoReviews[i].name}</li>`
        reviewListDisplay.innerHTML += reviewList
    }
    getReviewsBtn.remove()
}
getReviewsBtn.addEventListener('click', () => getReviews())

// get User Info
interface You {
    firstName : string;
    lastName : string;
    isReturning : boolean;
    permission: Permission;
    age : number;
    stayedAt : string[]
}
const you: You = {
    firstName : 'John',
    lastName : 'Doe',
    isReturning : true,
    permission: Permission.ADMIN,
    age : 25,
    stayedAt : ['Florida', 'Oman', 'Tokyo']
}
const populateUser = (isReturning: boolean, userName: string) => {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back"
    }
    userNameDisplay.innerHTML = userName
}
populateUser(you.isReturning, you.firstName)

// Get Property List
interface Properties {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: string;
    },
    contact: [number, string];
    isAvailable: boolean;
}
const properties: Properties[] = [
    {
        image: './assets/images/building-2.jpeg',
        title: 'Columbian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: '45456',
            country: 'Columbia'
        },
        contact: [ +9191919191, 'johndoe@gmail.com'],
        isAvailable: true
    },
    {
        image: './assets/images/building-3.jpeg',
        title: 'Poland Cottage',
        price: 60,
        location: {
            firstLine: 'Cottage 37',
            city: 'Gdansk',
            code: 12342,
            country: 'Poland'
        },
        contact: [ +4343434343, 'poland@gmail.com'],
        isAvailable: true
    },
    {
        image: './assets/images/building-4.jpeg',
        title: 'London Flat',
        price: 78,
        location: {
            firstLine: 'Flat 37',
            city: 'London',
            code: 56744,
            country: 'United Kingdom'
        },
        contact: [ +1212121212, 'london@gmail.com'],
        isAvailable: true
    },
]

let authorityStatus : any
isLoggedIn = true
const showDetails = (authorityStatus: boolean | Permission, price: number) => {
    let element = ''
    if(authorityStatus){
        element = `<h5>${price.toString()}/night</h5>`
    }
    return element
}

const propertiesList = () => {
    for(let i = 0; i < properties.length; i++) {
        let priceElement = showDetails(isLoggedIn ,properties[i].price)
        let property = `
        <div class="card">
            <div class="card-img">
                <img src=${properties[i].image} />
            </div>
            <div class="card-content">
                <h4>${properties[i].title}</h4>
                ${priceElement}
            </div>
        </div>
        `
        propertiesDisplay.innerHTML += property
    }
}
propertiesList()

// Get Main Property
class mainProperty {
    src: string
    title: string
    reviews: Review[]
    constructor(src: string, title: string, reviews: Review[]) {
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}

let yourMainProperty = new mainProperty(
    './assets/images/building-1.jpeg',
    'Europian Shack',
    [{
        name: 'Brij',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '22-12-2015'
    }]
)

mainImageDisplay.innerHTML = `
    <img src=${yourMainProperty.src} />
`

// Get Footer Details
let currentLocation : [string, string, number] = ['India', '6:00 PM', 35]
footerDisplay.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}"`