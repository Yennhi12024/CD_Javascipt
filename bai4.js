const themsv = document.querySelector("#themsv");
const form = document.getElementById("form");

themsv.addEventListener("click", function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  // lay tu dong thong tin sv  va tao doi tuong thong tin sv
  const sinhvien = {
    masv: document.querySelector("#masv").value,
    hoten: document.querySelector("#hoten").value,
    lop: document.querySelector("#lop").value,
    ngaysinh: document.querySelector("#ngaysinh").value,
    showSinhVien: function () {
      const show = document.querySelector("#show");
      str_old = show.innerHTML;
      const str_new = `
            <tr>
            <td>${this.masv}</td> 
            <td>${this.hoten}</td> 
            <td>${this.lop}</td> 
            <td>${this.ngaysinh}</td> 
            </tr>
            `;
      str_old += str_new;
      show.innerHTML = str_old;
    },
  };
  sinhvien.showSinhVien();
});