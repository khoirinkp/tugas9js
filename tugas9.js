function perulanganForIn(){
    var x = {
        nama: "Fajar",
        umur: "20",
        alamat: "Jl. Haji Raya",
        pekerjaan: "Mahasiswa",
    }

    for(var i in x){
        console.log(i + " : " + x[i]);
    }
}

perulanganForIn();