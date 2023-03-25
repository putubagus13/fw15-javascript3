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

//menggunakan then and catch
const hariKerja = async (day) => {
    try {
        const result = await cekHariKerja(day);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
};
hariKerja('sabtu');

/*penggunaan try catch bertujuan untuk menampung hasil atau error dara fungsi async. pada try terdapat variabel result yang memiliki nilai sama dengan cekHariKerja
dengan katakunci await(hanya dapat dijalankan didalam fungsi async) yang bertujuan untuk menunggu respon dari fungsi promise. pada program jika input yang dimasukan pada
fungsi hariKerja berhasil terpenuhi maka nilai akan masuk ke try dan jika tidak berhasil atau error maka nilai akan masuk ke catch.*/