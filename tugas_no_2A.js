let cekHariKerja = ((day) =>{
    return new Promise((resolve, reject) =>{
        setTimeout (()=>{
            const data = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = data.find((item)=>{
                return item === day;
            })
            if(cek){
                resolve(cek);
            }else{
                reject(new Error('Bukan hari kerja'))
            }
        },2000)
    })
})

cekHariKerja('minggu')
.then((result)=>{
    console.log(result)})
.catch((error)=>{
    console.log(error.message)})

/*Untuk menangani hasil atau error yang dihasilkan promise, gunakan then catch.
Jika promise ini berhasil, maka fungsi tersebut akan dipanggil kedalam result dan jika tidak fungsi catch akan digunakan. dalam hal kita kita memasukkan input berupa day dan jika input day tersebut merupakan hari kerja maka nilai promise(resolve) akan masuk kedalam blok then.
Jika terjadi error, itu akan masuk ke blok catch dan menampilkan pesan kesalahan yang ditentukan.*/
