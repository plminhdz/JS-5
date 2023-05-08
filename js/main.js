
// Quản lý tuyển sinh
function kiemTraDiem() {
    // Lấy giá trị điểm 3 môn từ người dùng
    var diemMon1 =Number(document.getElementById("diem1").value);
    var diemMon2 =Number(document.getElementById("diem2").value);
    var diemMon3 =Number(document.getElementById("diem3").value);
    // Lấy giá trị điểm đối tượng và khu vực từ người dùng
    var diemDoiTuong = Number(document.getElementById("diemDT").value);
    var diemKhuVuc = Number(document.getElementById("diemKV").value);
    // Lấy giá trị điểm chuẩn từ người dùng
    var diemChuan = Number(document.getElementById("diemchuan").value);
  
    // Tính tổng điểm 3 môn
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemDoiTuong + diemKhuVuc;
    //Điều kiện
    if(diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0){
        //Kiểm tra xem có môn nào bị điểm 0 không?
        document.getElementById("result").innerHTML = "Bạn đã rớt vì có 1 môn điểm 0!"
    } else if (tongDiem >= diemChuan){
        // Kiểm tra xem tổng điểm có lớn hơn điểm chuẩn không
        document.getElementById("result").innerHTML = "Bạn đã đậu với tổng điểm là " + tongDiem + " điểm!";
    } else{
        // Nếu tổng điểm nhỏ hơn điểm chuẩn thì in ra thông báo rớt
        document.getElementById("result").innerHTML = "Bạn đã rớt với tổng điểm là " + tongDiem + " điểm!";
    }
  }


// Tính tiền điện

//bảng giá điện theo km
const kwDau = 500; //50kw đầu
const kwThu2 = 650; //50kw kế
const kwThu3 = 850; // 100kw kế
const kwThu4 = 1100; //150kw kế
const kwCuoi = 1300; //còn lại

function tinhTienDien(){
    //Lấy giá trị từ người dùng
    var tenKhachHang = document.getElementById("tenKhachHang").value;
    var soKw = Number(document.getElementById("soKw").value);

    // Biến chứa giá tiền
    var tongTien = 0;
    if(soKw == 0){
        alert("Bạn đã nhập sai số Kw! Vui lòng nhập lại");
    } else if(soKw >0 && soKw <= 50){
        tongTien = soKw * kwDau;
    } else if(soKw <= 100){
        tongTien = (50 * kwDau) + (soKw - 50)*kwThu2;
    } else if(soKw <= 200){
        tongTien = (50 * kwDau) + 50*kwThu2 + (soKw - 100)*kwThu3;
    } else if(soKw <= 350){
        tongTien = (50 * kwDau) + 50*kwThu2 + 100*kwThu3 + (soKw - 200)*1100;
    } else if(soKw > 350){
        tongTien = (50 * kwDau) + 50*kwThu2 + 100*kwThu3 + 150*1100 + (soKw - 350)*1300;
    }

    // In giá tiền và tên KH lên UI

    document.getElementById("result2").innerHTML = "Họ tên: " + tenKhachHang + ":Tiền điện: " + tongTien.toLocaleString() + "đ";




}

// Tính thuế thu nhập cá nhân
const tienTruNPT = 1.6e+6;
function tinhTienThue(){
    var tenKhachHang = document.getElementById("tenKhachHang3").value;
    var thuNhapNam = Number(document.getElementById("thuNhapNam").value);
    var soNPT = Number(document.getElementById("soNPT").value);

    var tienThue = 0;

    if(thuNhapNam <= 60e+6){
        tienThue = thuNhapNam*0.05 - (soNPT*tienTruNPT);
    } else if(thuNhapNam <= 120e+6){
        tienThue = 60e+6*0.05 + (thuNhapNam-60)*0.1 - (soNPT*tienTruNPT);
    } else if(thuNhapNam <= 210e+6){
        tienThue = 60e+6*0.05 + (60e+6*0.1) + (thuNhapNam-120)*0.15 - (soNPT*tienTruNPT);
    } else if(thuNhapNam <= 384e+6){
        tienThue = 60e+6*0.05 + (60e+6*0.1) + 90e+6*0.15 + (thuNhapNam-210)*0.2 - (soNPT*tienTruNPT);
    } else if(thuNhapNam <= 624e+6){
        tienThue = 60e+6*0.05 + (60e+6*0.1) + 90e+6*0.15 + 174e+6*0.2 + (thuNhapNam-384)*0.25 - (soNPT*tienTruNPT);
    } else if(thuNhapNam <= 960e+6){
        tienThue = 60e+6*0.05 + (60e+6*0.1) + 90e+6*0.15 + 174e+6*0.2 + 240e+6/100*0.25 + (thuNhapNam-624)*0.3 - (soNPT*tienTruNPT);
    } else if(thuNhapNam > 960e+6){
        tienThue = 60e+6*0.05 + (60e+6*0.1) + 90e+6*0.15 + 174e+6*0.2 + 240e+6/100*0.25 + 336e+6/100*0.3 + (thuNhapNam-960)*0.35 - (soNPT*tienTruNPT);
       
    }

    document.getElementById("result3").innerHTML = "Họ tên: " + tenKhachHang + "Tiền thuế thu nhập cá nhân: " + tienThue.toLocaleString();
}

// Tính tiền cáp