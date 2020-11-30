const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/kubus", (req,res) => {

    let sisi = Number(req.body.sisi)
    let volume = sisi * sisi * sisi
    let luas = 6 * (sisi * sisi)

    let response = {
        sisi : sisi,
        volume : volume,
        luas : luas,
    }

    res.json(response)
})

app.post("/balok", (req,res) => {

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let volume = panjang * lebar * tinggi
    let luas = 2 * ((panjang * lebar) + (lebar * tinggi) + (panjang * tinggi))

    let response = {
        panjang : panjang,
        lebar : lebar,
        tinggi : tinggi,
        volume : volume,
        luas : luas,
    }

    res.json(response)
})

app.post("/prismaSegitiga", (req,res) => {

    let luasAlas = Number(req.body.luasAlas)
    let tinggi = Number(req.body.tinggi)
    let kelilingAlas = Number(req.body.kelilingAlas)
    let luasAlasSegitiga = Number(req.body.luasAlasSegitiga)
    let volume = luasAlas * tinggi
    let luas = (kelilingAlas * tinggi) + (2 * luasAlasSegitiga)

    let response = {
        luasAlas : luasAlas,
        tinggi : tinggi,
        kelilingAlas : kelilingAlas,
        luasAlasSegitiga : luasAlasSegitiga,
        volume : volume,
        luas : luas,
    }

    res.json(response)
})

app.post("/tabung", (req,res) => {

    let pi = Number(req.body.pi)
    let jari = Number(req.body.jari)
    let tinggi = Number(req.body.tinggi)
    let luasAlas = Number(req.body.kelilingAlas)
    let kelilingAlas = Number(req.body.tinggi)
    let volume = pi * (jari * jari) * tinggi
    let luas = (2 * luasAlas) + (kelilingAlas * tinggi)

    let response = {
        pi : pi,
        jari : jari,
        tinggi : tinggi,
        luasAlas : luasAlas,
        kelilingAlas : kelilingAlas,
        volume : volume,
        luas : luas,
    }

    res.json(response)
})

    app.get("/convert/celsius/:celsius", (req,res) => {

        let celsius = req.params.celsius
        let resultF = ((9 / 5) * celsius) + 32
        let resultR = (4 / 5) * celsius
        let resultK = (celsius * 1) + 273
    
        let response = {
            celsius : celsius,
            result : {
                reamur : resultR,
                fahrenheit : resultF,
                kelvin : resultK,
            },
        }
    
        res.json(response)
    })

app.get("/convert/reamur/:reamur", (req,res) => {

    let reamur = req.params.reamur
    let resultC = (5 / 4) * reamur
    let resultF = ((9 / 4) * reamur) + 32
    let resultK = ((5 / 4) * reamur) + 273

    let response = {
        reamur : reamur,
        result : {
            celsius : resultC,
            fahrenheit : resultF,
            kelvin : resultK,
        },
    }

    res.json(response)
})

app.get("/convert/kelvin/:kelvin", (req,res) => {

    let kelvin = req.params.kelvin
    let resultC = kelvin - 273
    let resultF = ((9 / 5) * (kelvin - 273)) + 32
    let resultR = (4 / 5) * (kelvin - 273)

    let response = {
        kelvin : kelvin,
        result : {
            celsius : resultC,
            fahrenheit : resultF,
            reamur : resultR,
        },
    }

    res.json(response)
})

app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {

    let fahrenheit = req.params.fahrenheit
    let resultC = ((5 / 9) * (fahrenheit - 32))
    let resultR = ((4 / 9) * (fahrenheit - 32))
    let resultK = ((5 / 9) * (fahrenheit - 32)) + 273

    let response = {
        fahrenheit : fahrenheit,
        result : {
            celsius : resultC,
            reamur : resultR,
            kelvin : resultK
        },
    }

    res.json(response)
})

app.post("/BMI", (req,res) => {

    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let bmi = berat / (tinggi * tinggi)
    var status = status
    if (bmi < 18.5) {
        status = ("Kekurangan berat badan")
      } else if (bmi < 25) {
        status = ("Normal (Ideal)")
      } else if (bmi < 30){
        status = ("Kelebihan berat badan")
      } else {
        status = ("Kegemukan (Obesitas)")
      }
         

    let response = {
        tinggi : tinggi,
        berat : berat,
        bmi : bmi,
        status : status,
    }

    res.json(response)
})

app.get("/biner/:biner", (req,res) => {

    let biner = req.params.biner
    let convertO = parseInt(req.params.biner,2).toString(8);
    let convertH = parseInt(req.params.biner,2).toString(16);
    let convertD = parseInt(req.params.biner,2).toString(10).toUpperCase();

    let response = {
        biner : biner,
        convertO : convertO,
        convertH : convertH,
        convertD : convertD,
    }

    res.json(response)
})


app.listen(8000, () => {
    console.log("Server run on port 8000");
})