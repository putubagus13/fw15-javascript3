 let angkot = (jmlAngkot, beroprasi)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let angkotAktif;
            for(let noAngkot= 1 ; noAngkot <= jmlAngkot ; noAngkot++){
                if(noAngkot <= beroprasi){
                    return angkotAktif = angkotAktif + noAngkot;
                }
                else{
                    return angkotAktif = angkotAktif + noAngkot;
                }
            }
            console.log(angkotAktif);
            if(angkotAktif <= beroprasi){
                resolve(console.log('Angkot Beroprasi'))
            }else{
                reject(new Error('Angkot tidak beroprasi'))
            }
        },3000)
    })
 }

 angkot(10, 7)
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error.messege)
})