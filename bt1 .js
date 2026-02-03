//hỏi người dùng
let hollow_array = [];
let name_book ;
let total = 0;

alert(`----Thư viện---`);
let ask = Number(prompt("Bạn muốn trả bao nhiêu cuốn sách: "));
let number_book = ask;

for( let i = 1 ; i<= number_book ; i++){
    name_book = prompt("Nhập tên cuốn sách thứ " + i+ ":" );
    //thêm sách và đẩy thứ tự sách xuống dưới
    hollow_array.push(name_book);
    console.log ("đã trả sách thứ " +i+ ": "+name_book);
}
console.log("Tổng số sách đã được trả: ",number_book);