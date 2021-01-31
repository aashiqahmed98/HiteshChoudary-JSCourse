// Discount= (ListingPrice - SellingPrice)/ListingPrice * 100

var sellingPrice=199
var actualPrice= 799
var discountPercent= ((actualPrice-sellingPrice)/actualPrice) * 100

console.log(`Discount Percentage is : ${discountPercent}`)

let displayDiscountPercentage=Math.round(discountPercent)
console.log(displayDiscountPercentage)