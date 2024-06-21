// let not =""
// not= +prompt("ÖĞRENCİNİN NOTUNU GİRİNİZ")
// if(not>=50){
//     console.log(`${not} ile geçtiniz`);
    
// }else console.log(`${not} ile kaldınız`)

// 2. örnek
// let yas=Number(prompt("LÜTFEN YAŞINIZI GİRİNİZ"));
// let para=+prompt("lütfen elinizdeki toplam bütçeyi giriniz");
// let sans=+prompt("ehliyete girdiğiniz giriş sayısını giriniz");
// if(yas>=18 && para>2000 && sans>0 && sans<5){
//     console.log("EHLİYET SINAVINA KATILABİLİRSİNİZ");

// }else{
//     console.log("EHLİYET SINAVINA KATILAMAZSINIZ");
// }
// 3. örnek

// const vize1=+prompt("vize 1. notunuzu giriniz:");
// const vize2=+prompt("vize 2 notunuzu giriniz:");
// const final=+prompt("final notunu giriniz:");
// let ortalama= (vize1*0.3)+ (vize2*0.3) + (final*0.4)
// if(ortalama>=55){
//     console.log(`${ortalama} ile geçtiniz`)
// } else{
//     console.log(`${ortalama} ile kaldınız`)
// }

// 4. örnek

// const weg= prompt("LÜTFEN GİTMEK İSTEDİĞİNİZ YOLU SEÇİNİZ:")
// if(weg==1){
//     alert(`Seçilen yol ${weg} yoldur `);
// }else if(weg==2){
//     alert(`seçilen yol ${weg} yoldur`);
// }else if(weg==3){
//     alert(`seçilen yol ${weg} yoldur`)
// }else {
//     alert("lütfen bir yol seçiniz")
// }

// 5. örnek

// let name=prompt("LÜTFEN ADINIZI YAZINIZ");
// let tc= prompt("LÜTFEN TC KİMLİK NUMARANIZI GİRİNİZ");
// kontrol(name,tc);

// function kontrol(name, tc){
//     if(name==""){
//         console.log("Adınızı lütfen giriniz:");
//     return;
//     }
//     if(tc.length!=11){
//         console.log("tc numaranızı 11 haneli olarak giriniz");
//         return;
//     }
//     console.log("girişiniz başarı şekilde gerçekleştirildi");
// }

//örnek6

 const kilo=+prompt("LÜTFEN KİLONUZU GİRİNİZ");
 const boy=+prompt("lütfen boy uzunluğunuzu giriniz");
const sonuc=kilo/(boy*2);
 const ort=sonuc.toFixed(1)
console.log(ort);

 if(ort<18.5){
    alert(`Beden kitle endeksiniz: ${ort} =>İdeal kilonun altındsınız`)
}else if(ort>=18.5 && ort<=24.9)
{
     alert(`Beden kitle endeksiniz: ${ort} =>ideal kilodasınız`)

}else if(ort>=25 && ort<=29.9)
    {
         alert(`Beden kitle endeksiniz: ${ort} =>ideal kilonuzun üstündesiniz`)
    
    }
  else if(ort>=30 && ort<=39.9){
     alert(`Beden kitle endeksiniz: ${ort} =>İdeal kilonun çok üstünde (obez)`)
 }else {
    alert(`Beden kitle endeksiniz: ${ort} =>iadeal kilonun çok üstünde (morbid obez`)

 }