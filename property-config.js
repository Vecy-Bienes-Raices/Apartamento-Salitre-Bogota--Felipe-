/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - PLANTILLA MAESTRA
 */

const propertyConfig = {
  // 1. SEO (Para Google y compartir en redes)
  seo: {
    title: "Apartamento en Venta en Sauzalito",
    description: "Apartamento de 121m² en Sauzalito, Teusaquillo, 3 habitaciones, 3 baños, 2 parqueaderos, conjunto cerrado.",
    keywords: "VentaApartamentosBogota, ApartamentoEnSauzalito, InmobiliariaBogota, BienesRaicesColombia, Teusaquillo, InversionInmobiliaria, VecyBienesRaices",
    propertyId: "AP-SAUZALITO1",
    ogUrl: "https://ap-salitre1-bogota.netlify.app/",
    ogImage: "assets/1.jpeg",
    author: "Vecy Bienes Raíces",
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "🚀 OPORTUNIDAD EN SAUZALITO 🏢",
    tituloHtml: "APARTAMENTO EN SAUZALITO",
    precioVenta: "$778.000.000",
    valorAdmin: "$600.000 / mes",
    labelExtra: "💵 Administración"
  },

  // 3. Rejilla de Detalles (Iconos y Datos Clave)
  detalles: [
    { label: "Área", value: "121 m²", icon: "📐" },
    { label: "Habitaciones", value: "3", icon: "🛏️" },
    { label: "Baños", value: "3", icon: "🚿" },
    { label: "Parqueaderos", value: "2", icon: "🚗" },
    { label: "Antigüedad", value: "14 años", icon: "🏗️" },
    { label: "Piso", value: "1", icon: "🏢" },
    { label: "Depósito", value: "No", icon: "📦" },
    { label: "Estrato", value: "4", icon: "⭐" }
  ],

  // 4. Características Internas (Lista izquierda)
  caracteristicasInternas: [
    { name: "3 Habitaciones", emoji: "🛏️" },
    { name: "2 Baños Completos", emoji: "🚿" },
    { name: "1 Baño Social", emoji: "🚽" },
    { name: "Estudio", emoji: "📚" },
    { name: "Chimenea a Gas en la Sala", emoji: "🔥" }
  ],
  destacadoInterno: "Un apartamento con excelentes espacios, estudio y una acogedora <strong>chimenea a gas</strong> en la sala.",

  // 5. Características Externas (Lista derecha)
  caracteristicasExternas: [
    { name: "2 Zonas BBQ", emoji: "🍖" },
    { name: "Cancha Múltiple", emoji: "🏀" },
    { name: "Zonas Verdes", emoji: "🌳" },
    { name: "2 Salones Comunales", emoji: "🎉" },
    { name: "Gimnasio", emoji: "🏋️‍♂️" },
    { name: "2 Porterías", emoji: "🛡️" }
  ],
  destacadoUbicacion: "Excelente conjunto con completas zonas comunes para toda la familia, además de amplias zonas verdes y <strong>doble portería</strong>.",

  // 6. Mapa (Google Maps Embed)
  mapa: {
    urlEmbed: "https://maps.google.com/maps?q=Sauzalito,+Teusaquillo,+Bogot%C3%A1&t=&z=15&ie=UTF8&iwloc=&output=embed", 
    titulo: "Ubicación Sauzalito, Teusaquillo"
  },

  // 7. Descripción Final / Análisis de Inversión
  descripcionFinal: {
    titulo: "💖 Tu Próximo Hogar en Sauzalito",
    texto: `
    <div class="roi-item">
      <p>Vive en uno de los sectores más estratégicos de Bogotá. Este excelente apartamento de 121 m² (incluyendo parqueadero) en primer piso, te ofrece comodidad y múltiples espacios.</p>
      <ul class="roi-list">
        <li>✨ <strong>Zonas Comunes:</strong> Disfruta de 2 BBQ, cancha múltiple, amplias zonas verdes, 2 salones comunales y gimnasio.</li>
        <li>✨ <strong>Comodidad:</strong> Cuenta con estudio, chimenea a gas y parqueadero con capacidad para camioneta grande y carro pequeño.</li>
        <li>✨ <strong>Seguridad:</strong> El conjunto cuenta con 2 porterías.</li>
      </ul>
      <div class="projection">
        ¡Excelente oportunidad en Estrato 4!
      </div>
      <br>
      <div style="text-align: center;">
         <a href="ficha-tecnica.html" class="btn-analisis">
            📋 VER MÁS DETALLES
         </a>
      </div>
    </div>`
  },

  // 8. Multimedia (Fotos y Video)
  multimedia: {
    videoUrl: "",
    videoThumbnail: "",
    imagesCount: 53,
    imagePrefix: "assets/",
    imageExtension: ".jpeg",
    imagesList: [
        "assets/1.jpeg",
        "assets/2.jpeg",
        "assets/3.jpeg",
        "assets/4.jpeg",
        "assets/5.jpeg",
        "assets/6.jpeg",
        "assets/7.jpeg",
        "assets/8.jpeg",
        "assets/9.jpeg",
        "assets/10.jpeg",
        "assets/11.jpeg",
        "assets/12.jpeg",
        "assets/13.jpeg",
        "assets/14.jpeg",
        "assets/15.jpeg",
        "assets/16.jpeg",
        "assets/17.jpeg",
        "assets/18.jpeg",
        "assets/19.jpeg",
        "assets/20.jpeg",
        "assets/21.jpeg",
        "assets/22.jpeg",
        "assets/23.jpeg",
        "assets/24.jpeg",
        "assets/25.jpeg",
        "assets/26.jpeg",
        "assets/27.jpeg",
        "assets/28.jpeg",
        "assets/29.jpeg",
        "assets/30.jpeg",
        "assets/31.jpeg",
        "assets/32.jpeg",
        "assets/33.jpeg",
        "assets/34.jpeg",
        "assets/35.jpeg",
        "assets/36.jpeg",
        "assets/37.jpeg",
        "assets/38.jpeg",
        "assets/39.jpeg",
        "assets/40.jpeg",
        "assets/41.jpeg",
        "assets/42.jpeg",
        "assets/43.jpeg",
        "assets/44.jpeg",
        "assets/45.jpeg",
        "assets/46.jpeg",
        "assets/47.jpeg",
        "assets/48.jpeg",
        "assets/49.jpeg",
        "assets/50.jpeg",
        "assets/51.jpeg",
        "assets/52.jpeg",
        "assets/53.jpeg"
    ]
  },

  // 9. Botón Compartir (Texto de WhatsApp)
  share: {
    whatsappText: `🏡 *APARTAMENTO EN VENTA - SAUZALITO*
    
💰 *Precio:* $778.000.000
💵 *Admin:* $600.000 / mes
📐 *Área:* 121 m²
🛏️ *Habitaciones:* 3
📍 *Ubicación:* Sauzalito, Teusaquillo, Bogotá

🔗 *Ver Fotos y Detalles:*
https://ap-salitre1-bogota.netlify.app/

#InmobiliariaBogota #BienesRaicesBogota #Teusaquillo #Sauzalito #ApartamentoEnVenta #VecyBienesRaices`
  }
};

