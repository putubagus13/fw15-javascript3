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