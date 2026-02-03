//khai báo biến
let hollow_array =[];
let name_book;
let number_book;
let total;
let i;
let book_count = 0;//biến đếnm các sách dài hơn 20 kí tự

//yêu cầu người đùng trả lời
let ask = Number(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn:  "));
number_book = ask;
while( number_book <= 0){
    console.log("Vui lòng nNhập lại chính xác số dương");
    break;
}

//VÒng lặp Những cuốn sách târ muộn
for( i = 1 ; i <=number_book ; i++ ){
    name_book = prompt("Nhập tên cuốn sách bị trả muộn thứ" + i +":"  );
    //thêm tên sách vào mảng vs únshift
    hollow_array.unshift(name_book);
    console.log( i +"." +name_book);
}

//đếm ký tự chuỗi
for(let j = 0 ; j < hollow_array.length; j++  ){
    if( hollow_array[j].length > 20){
        book_count= book_count +1;
    }
}

console.log("Tổng sách trả muộn: ",number_book);
console.log("Số lượng sách có tên dài hoen 20 ký tự: ",book_count);
