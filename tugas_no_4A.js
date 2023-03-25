let cariNama = (inisial)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const nama = ['Regina','Isna', 'Anggi', 'Putu', 'Yugo'];
            let filterName = nama.filter((nama)=>{
                nama = nama.toLowerCase().includes(inisial.toLowerCase())
                return nama;
            })
            if(filterName){
                resolve(filterName)
            }else{
                reject(new Error('Tidak ada nama yang anda cari'))
            }
        }, 3000)
    })
}

cariNama('na')
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error.messege)
})

