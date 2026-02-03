//nhập thông tin
let booksId ;
let booksName ;
let inventoryQuantity =[];
let total_book;
let book;
let book_count =0;//biến đếm
//hỏi người dùng
let ask =Number(prompt("Có bao sách cần kiểm kê trong  hôm nay: "));
while( ask <= 0 ){
    ask = Number(prompt("Vui lòng nhập số dương."));
}
total_book = ask;
console.log("Danh sách cần xem xét bổ sung" + "(" + total_book + " Loại "+")");

//phòng lặp thông tin danh sách
for( let i = 1 ; i <= total_book; i++ ){
    //Nhập mã sách
    booksId = prompt("Nhập mã sách thứ : "+i );
    while(booksId === null || booksId === ""){
        booksId = prompt("Vui lòng nhập đủ mã sách");
        //đẩy mã sách vào trong danh sách
        inventoryQuantity.push(booksId);
    }

    //Nhập tên sách
    booksName = prompt("Nhập tên sách: ");
    while(booksName === null || booksName === ""){
        booksName = prompt("Vui lòng nhập lại");
        //đẩy mã sách vào 
        inventoryQuantity.push(booksName);
    }
    //sách còn mấy bản
    book = Number(prompt("Tổng số các loại sách là: "));

    
    //in ra danh sách cần xem xét và bổ sung 
        console.log(i +"Mã: "+ booksId + "- " + booksName + "- Còn: " + book +" bản");

if( book <= 5){
            book_count++
            
        }
        

}        
console.log("Số sách có tồn kho <= 5 bản: " ,book_count );



if( book === 0 ){
    console.log("các mã sách đã hết hàng (0 bản): ",booksId);       
} else(
    console.log("không có sách nào hết hàng")
)