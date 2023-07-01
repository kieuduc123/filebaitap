// cors: Cross origin resoure sharing  chia se tai nguyen 
// same origin
// same origin: evondev.com evondev.com/posts 
// not same origin: evondev.com facebook.com khong cung 
// cors: access-control-allow-origin blocked

// Status
// 200 - Success (Mỗi lần get thì trả về, hoặc trả về khi thành công 1 cái gì đó)
// 201 - Create (Tạo dữ liệu thành công)

// Hàng 3 redirect
//  301 - Moved Permanently điều hươngs
//  307 - Temporary Redirect 
 
// Hàng 4 là lỗi

// 400 Bad Request  mạng chậm
// 401 Unauthorized truy cập phải đăng nhập 
// 403 Forbidden không thể truy câp
// 404 Not Found không tìm thấy 
// 408 Request Timeout load lâu quá 

// Hàng 5 server
// 502 Bad Gateway   
// 504 Gateway Timeout

// Methods
// POST  lưu dữ liệu
//GET lấy dữ liệu
 //PUT  up date dữ liệu sửa toàn bộ 
 //PATCH dữ liệu sửa 1 
 //DELETE
