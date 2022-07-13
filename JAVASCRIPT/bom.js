//shows current location
//alert(location.href);

//open new url
/*if (confirm("open google")){
    location.href = "https://google.com";
}

//reload url
if(confirm("reload the page")){
    location.reload
}*/

//change url
/*if(confirm("change URl")){
    location.href = "https://facebook.com"
}

//change url and add paremeter
if(confirm("change url and add a parameter")){
    location.href = "https://instagram.com/laurelcakes"
}*/

// get dbrowser name
alert("your are using a device from:" + navigator.userAgent)

//confirm browser vendor
alert("you are using an engine created from"+ navigator.vendor)

//Get location
navigator.geolocation.getCurrentPosition((position) =>{
    alert("you are at:" + position.coords.latitude + ", " + position.coords.longitude)
})

//get browser language
alert("your are using:" + navigator.language)