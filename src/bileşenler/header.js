const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const span1 = document.createElement("span");
  span1.classList.add("date");
  span1.textContent = tarih;
  headerDiv.appendChild(span1);

  const h1 = document.createElement("h1");
  h1.textContent = baslik;
  headerDiv.appendChild(h1);

  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = yazi;
  headerDiv.appendChild(span2);

  return headerDiv;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  let baslik = Header(
    "Technology Time",
    "11 November 2022",
    "Every Language Has a Different Past and Future. Let's Take a Look!"
  );

  const headerContainer = document.querySelector(secici);
  headerContainer.appendChild(baslik);

  // return headerContainer;
};

export { Header, headerEkleyici };
