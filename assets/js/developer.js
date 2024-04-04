var Permission;
(function (Permission) {
    Permission["ADMIN"] = "ADMIN";
    Permission["READ_ONLY"] = "READ_ONLY";
})(Permission || (Permission = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
var reviewTotalDisplay = document.querySelector("#reviews");
var returningUserDisplay = document.querySelector("#returningUser");
var userNameDisplay = document.querySelector("#userName");
var propertiesDisplay = document.querySelector(".properties");
var footerDisplay = document.querySelector(".footer");
var getReviewsBtn = document.querySelector("#getReviewsBtn");
var reviewListDisplay = document.querySelector(".reviewList");
var mainImageDisplay = document.querySelector(".main-image");
var isLoggedIn;
// Get Review Details
var reviews = [
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
];
var showReviewTotal = function (value, reviewerName, isLoyaltyUser) {
    var icon = LoyaltyUser.GOLD_USER ? "🌟" : "";
    var makeMultiple;
    if (value > 1 || value == 0) {
        makeMultiple = 's';
    }
    else {
        makeMultiple = '';
    }
    reviewTotalDisplay.innerHTML = "".concat(value.toString(), " Review").concat(makeMultiple, " | Last Reviewed by ").concat(reviewerName, " ").concat(icon);
};
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var getReviews = function () {
    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });
    var topTwoReviews = sortedReviews.slice(0, 2);
    var reviewList = '';
    for (var i = 0; i < topTwoReviews.length; i++) {
        reviewList = "<li>".concat(topTwoReviews[i].stars, " stars from ").concat(topTwoReviews[i].name, "</li>");
        reviewListDisplay.innerHTML += reviewList;
    }
    getReviewsBtn.remove();
};
getReviewsBtn.addEventListener('click', function () { return getReviews(); });
var you = {
    firstName: 'John',
    lastName: 'Doe',
    isReturning: true,
    permission: Permission.ADMIN,
    age: 25,
    stayedAt: ['Florida', 'Oman', 'Tokyo']
};
var populateUser = function (isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
};
populateUser(you.isReturning, you.firstName);
var properties = [
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
        contact: [+9191919191, 'johndoe@gmail.com'],
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
        contact: [+4343434343, 'poland@gmail.com'],
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
        contact: [+1212121212, 'london@gmail.com'],
        isAvailable: true
    },
];
var authorityStatus;
isLoggedIn = true;
var showDetails = function (authorityStatus, price) {
    var element = '';
    if (authorityStatus) {
        element = "<h5>".concat(price.toString(), "/night</h5>");
    }
    return element;
};
var propertiesList = function () {
    for (var i = 0; i < properties.length; i++) {
        var priceElement = showDetails(isLoggedIn, properties[i].price);
        var property = "\n        <div class=\"card\">\n            <div class=\"card-img\">\n                <img src=".concat(properties[i].image, " />\n            </div>\n            <div class=\"card-content\">\n                <h4>").concat(properties[i].title, "</h4>\n                ").concat(priceElement, "\n            </div>\n        </div>\n        ");
        propertiesDisplay.innerHTML += property;
    }
};
propertiesList();
// Get Main Property
var mainProperty = /** @class */ (function () {
    function mainProperty(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
    return mainProperty;
}());
var yourMainProperty = new mainProperty('./assets/images/building-1.jpeg', 'Europian Shack', [{
        name: 'Brij',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '22-12-2015'
    }]);
mainImageDisplay.innerHTML = "\n    <img src=".concat(yourMainProperty.src, " />\n");
// Get Footer Details
var currentLocation = ['India', '6:00 PM', 35];
footerDisplay.innerHTML = "".concat(currentLocation[0], " ").concat(currentLocation[1], " ").concat(currentLocation[2], "\"");
//# sourceMappingURL=developer.js.map