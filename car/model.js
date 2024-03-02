const data = [
    { rank:'<img src="https://cdn-icons-png.flaticon.com/512/9143/9143755.png" alt="">1',brand: '<img src="https://www.pngall.com/wp-content/uploads/2016/04/Toyota-Logo-PNG-Clipart.png" alt="">TOYOTA' , reserve: '7,245'},
    { rank:2,brand: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9dnhggg7P0aYJGHCc_Rp9nfWV3zMAKILxg&usqp=CAU" alt="">HONDA' , reserve: '6,149'},
    { rank:3,brand: '<img src="https://e7.pngegg.com/pngimages/323/922/png-clipart-byd-auto-car-electric-vehicle-byd-company-logo-broucher-company-text.png" alt="">BYD' , reserve: '5,455'},
    { rank:4,brand: '<img src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/317822700_110112008601774_6676653681124427280_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=axdeGMl24aIAX_WiPMz&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfA21L9xCwCoWzcJzQNp1RsIuHp-Q4NorQAel4R_t40dlQ&oe=65E55FAE" alt="">AION' , reserve: '4,568'},
    { rank:5,brand: '<img src="https://e7.pngegg.com/pngimages/846/912/png-clipart-mg-logo-logo-mg-thumbnail.png" alt="">MG' , reserve: '3,568'},
    { rank:6,brand: '<img src="https://www.liblogo.com/img-logo/ch1763c45c-changan-logo-changan-logo-clear-bg-wattev2buy.png" alt="">CHANGAN' , reserve: '3,549'},
    { rank:7,brand: '<img src="https://cdn2.downdetector.com/static/uploads/logo/great-wall-motors.png" alt="">GWM' , reserve: '3,524'},
    { rank:8,brand: '<img src="https://img2.thaipng.com/20180323/rsq/kisspng-isuzu-motors-ltd-car-ldv-group-logo-cars-logo-brands-5ab51e5a4d0dd0.1009598915218192263156.jpg" alt="">ISUZU' , reserve: '2,460'},
    { rank:9,brand: '<img src="https://img2.thaipng.com/20180720/itt/kisspng-nissan-logo-car-renault-emblem-japan-impression-5b51d7e49da5d2.1740482515320903406457.jpg" alt="">NISSAN' , reserve: '2,459'},
    { rank:10,brand: '<img src="https://img2.thaipng.com/20180426/caq/kisspng-mazda-demio-car-toyota-mazda-cx-9-mazda-vector-5ae290adb10e20.1743242315247976137252.jpg" alt="">MAZDA' , reserve: '1,961'},
];

function getAll(){
    return Promise.resolve(data);
}

module.exports = getAll;