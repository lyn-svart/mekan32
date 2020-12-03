
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
   { 'baslik': 'Anasayfa',
    'sayfaBaslik':{
      'siteAd':'Mekan32',
      'aciklama':'Isparta civarındaki mekanları keşfedin!'
    },
    'mekanlar':[
      {
        'ad':'Starbucks',
        'adres':'Centrum Garden',
        'puan':'4',
        'imkanlar':['kahve','çay','pasta'],
        'mesafe':'10km'
      },
      {
        'ad':'Gloria Jeans',
        'adres':'Doğu Kampüsü',
        'puan':'2',
        'imkanlar':['kahve','kek','çay'],
        'mesafe':'1km'
      },
      {
        'ad':'Mackbear Coffee Co.',
        'adres':'Iyaş Avm',
        'puan':'4',
        'imkanlar':['kahve','tatlı','çay'],
        'mesafe':'7km'
      },
      {
        'ad':'Sarımsak Kafe',
        'adres':'Terminal',
        'puan':'5',
        'imkanlar':['eğlence','oyun','müzik'],
        'mesafe':'8km'
      },
      {
        'ad':'Black Playstation V.I.P. Lounge',
        'adres':'Iyaş Avm',
        'puan':'5',
        'imkanlar':['oyun','eğlence','maç'],
        'mesafe':'7km'
      }
    ]
  });
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', { title: 'Mekan Bilgisi'});
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}