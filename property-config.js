/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - PLANTILLA MAESTRA
 */

const propertyConfig = {
  // 1. SEO (Para Google y compartir en redes)
  seo: {
    title: "Apartamento en Venta en Salitre, Bogotá",
    description: "Oportunidad de inversión: Apartamento de 121m² en Salitre, Bogotá. 3 habitaciones, 3 baños, chimenea, 2 parqueaderos. Alta seguridad, accesibilidad, zonas verdes y cascada.",
    keywords: "VentaApartamentosBogota, ApartamentoEnSalitre, SalitreBogota, InmueblesSalitre, BienesRaicesColombia, InversionInmobiliariaBogota, VecyBienesRaices, ApartamentosDeLujoBogota, AccesibilidadSillasDeRuedas, AltaSeguridad, ApartamentoFamiliarBogota",
    propertyId: "ID-BOG-EN01",
    ogUrl: "https://ap-salitre1-bogota.netlify.app/",
    ogImage: "assets/1.jpeg",
    author: "Vecy Bienes Raíces",
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "🚀 OPORTUNIDAD EN SALITRE 🏢",
    tituloHtml: "APARTAMENTO EN SALITRE BOGOTÁ",
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
  destacadoInterno: "Un apartamento con excelentes espacios, estudio ideal para teletrabajo y una acogedora <strong>chimenea a gas</strong> en la sala. Incluye parqueadero doble lineal.",

  // 5. Características Externas (Lista derecha)
  caracteristicasExternas: [
    { name: "2 Zonas BBQ", emoji: "🍖" },
    { name: "Cancha Múltiple", emoji: "🏀" },
    { name: "Zonas Verdes y Cascada", emoji: "🌳" },
    { name: "2 Salones Comunales", emoji: "🎉" },
    { name: "Gimnasio", emoji: "🏋️‍♂️" },
    { name: "Parq. Visitantes Independiente (~20)", emoji: "🚗" },
    { name: "Accesibilidad (Rampas)", emoji: "♿" },
    { name: "Vigilancia 24/7", emoji: "🛡️" }
  ],
  destacadoUbicacion: "Ubicado a pasos de la Av. Rojas y Calle 26, ofreciendo acceso inmejorable. El conjunto está pensado para la tranquilidad familiar: <strong>vigilancia 24/7</strong>, <strong>excelentes rampas de accesibilidad</strong> (ideales para movilidad reducida o adultos mayores) y amplia facilidad de parqueadero de visitantes. Disfruta de gimnasio, zonas BBQ, cancha múltiple y extraordinarias zonas verdes con cascada.",

  // 6. Mapa (Google Maps Embed)
  mapa: {
    urlEmbed: "https://maps.google.com/maps?q=Sauzalito,+Teusaquillo,+Bogot%C3%A1&t=&z=15&ie=UTF8&iwloc=&output=embed", 
    titulo: "Ubicación Sector Salitre, Bogotá"
  },

  // 7. Descripción Final / Análisis de Inversión
  descripcionFinal: {
    titulo: "💖 Tu Próximo Hogar en Salitre, Bogotá",
    texto: `
    <div class="roi-item">
      <p>Vive en uno de los sectores más estratégicos y de mayor valorización en Bogotá: El Salitre. Este espectacular apartamento de 121 m², te ofrece comodidad, elegancia y múltiples espacios ideales para tu familia.</p>
      <ul class="roi-list">
        <li>✨ <strong>Distribución y Comodidad:</strong> 3 habitaciones, 3 baños, estudio para teletrabajo, chimenea a gas en la sala y parqueadero doble lineal (camioneta y carro pequeño).</li>
        <li>✨ <strong>Entorno y Naturaleza:</strong> Amplias y extraordinarias zonas verdes con cascada, 2 zonas BBQ, cancha múltiple, 2 salones comunales y gimnasio.</li>
        <li>✨ <strong>Seguridad y Accesibilidad:</strong> Vigilancia 24/7 permanente, excelentes rampas de accesibilidad para movilidad reducida o adultos mayores, y gran facilidad de parqueadero para visitantes (~20 espacios).</li>
      </ul>
      <div class="projection">
        ¡Una oportunidad única de inversión por su ubicación inmejorable (Av. Rojas y Calle 26)!
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
    imagesCount: 30,
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
        "assets/30.jpeg"
    ]
  },

  // 9. Botón Compartir (Texto de WhatsApp)
  share: {
    whatsappText: `🏡 *APARTAMENTO EN VENTA - SALITRE BOGOTÁ*
✨ Alta seguridad, accesibilidad, zonas verdes con cascada y excelente parqueo para visitantes.
    
💰 *Precio:* $778.000.000
💵 *Admin:* $600.000 / mes
📐 *Área:* 121 m² (Incluye parqueadero doble lineal)
🛏️ *Habitaciones:* 3 + Estudio
🔥 *Extras:* Chimenea a gas
📍 *Ubicación:* Sector Salitre, Bogotá (Cerca Av. Rojas y Cll 26)

🔗 *Ver Fotos y Detalles:*
https://ap-salitre1-bogota.netlify.app/

#InmobiliariaBogota #BienesRaicesBogota #SalitreBogota #ApartamentoEnSalitre #InversionInmobiliaria #VecyBienesRaices`
  }
};

