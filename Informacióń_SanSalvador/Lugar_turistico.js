const places = [
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "Cerro El Pital.",
    "location": "https://maps.app.goo.gl/xu25GKGWwuNSiTMz9",
    "description": "Es el punto más alto de El Salvador, con una altitud de 2,730 metros sobre el nivel del mar. Ofrece vistas espectaculares y es ideal para acampar, hacer senderismo y disfrutar de la naturaleza. En días despejados, puedes ver hasta el océano Pacífico desde la cima."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "Cerro Miramundo.",
    "location": "https://maps.app.goo.gl/rhUitCfMjHPPLZZv5",
    "description": "Visita Miramundo, un pintoresco pueblo de montaña con impresionantes vistas panorámicas y un clima fresco, ideal para disfrutar de la tranquilidad y la belleza natural."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "Embalse de Cerrón Grande.",
    "location": "https://maps.app.goo.gl/SpnA2AEjfBzuX3cd8",
    "description": "También conocido como el Lago Suchitlán, es el cuerpo de agua artificial más grande de El Salvador. Aquí puedes hacer paseos en lancha y observar aves, ya que es un área rica en biodiversidad."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "Parque Central de Chalatenango.",
    "location": "https://maps.app.goo.gl/cyfdeKua2Xk9cvp79",
    "description": "Disfruta de un paseo por el Parque Central de Chalatenango, un espacio verde lleno de vida y color, donde podrás disfrutar de la arquitectura colonial y la hospitalidad de los lugareños."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "Parque La Palma",
    "location": "https://maps.app.goo.gl/fNwP9HiFkYwfTwYb9",
    "description": "Un pueblo pintoresco conocido por su arte naif, que es un estilo de pintura colorido y sencillo. La Palma es un centro cultural importante donde puedes comprar artesanías y ver murales que decoran el pueblo."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "Hotel Entre Pinos.",
    "location": "https://maps.app.goo.gl/yXMbew7L1tk9cKEL6",
    "description": "Es un amplio hotel con instalaciones acogedoras que le garantizaran un descanso formidable, cuenta con paquetes diseñados para disfrutar una visita de día o alojamiento prolongado con las mayores comodidades de un resort."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "Río Sumpul",
    "location": "https://maps.app.goo.gl/yKkfmWhnNRQbzkZG7",
    "description": "Disfruta de un refrescante baño en el Río Sumpul, un hermoso río rodeado de exuberante vegetación y cascadas, ideal para disfrutar de la naturaleza y relajarse."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "Turicentro Agua Fría.",
    "location": "https://maps.app.goo.gl/NoLT99ttPn1Yqr969",
    "description": "El Turicentro Agua Fría está ubicado en la parte urbana de la ciudad de Chalatenango, fue construido en 1977 como un centro recreativo familiar. Es un lugar muy visitado, especialmente en épocas de vacaciones o festivos."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "La Palma Chalatenango.",
    "location": "https://maps.app.goo.gl/F9XLjogCmeeHy3gi9",
    "description": "El Pueblo de la Palma Posee una dimensión territorial de 13,189 kilpometros cuadrados y está bordeando al norte de San Ignacio. La Palma es una zona montañosa y esta conformado por 8 cantones, 87 caseríos y 6 barrios."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "San Ignacio",
    "location": "https://maps.app.goo.gl/MiKuzJpkaGEE3CT3A",
    "description": "Un pequeño pueblo cercano a El Pital, conocido por su ambiente tranquilo y sus vistas impresionantes. Es un buen punto de partida para explorar la región."
  },
  {
    "country": "El Salvador",
    "city": "Chalatenango",
    "name": "Parque Acuático Paraíso de la Montaña",
    "location": "https://maps.app.goo.gl/vPx2AqB7wrMMopwQ9",
    "description": "Parque Acuático Paraíso de la Montaña es un parque acuático en Chalatenango, El Salvador, que ofrece actividades para toda la familia, como piscinas y toboganes."
  },


  //Lugares turisticos de San Salvador 
  {
    "country": "El Salvador",
    "city": "San Salavdor",
    "name": "Centro Histórico de San Salvador",
    "location": "https://maps.app.goo.gl/AwvkNgtyyhN9RN5x6",
    "description": "El corazón de San Salvador. Descubre la historia, cultura y tradiciones, encontrarás lugares que destacan con sus imponentes estructuras, como el Palacio Nacional y el Teatro Nacional."
  },
  {
    "country": "El Salvador",
    "city": "San Salvador",
    "name": "Monumento al divino Salvador del_mundo",
    "location": "https://maps.app.goo.gl/yoy1vfMXdnWnz2eeA",
    "description": "Símbolo icónico de El Salvador, ubicado en la Plaza Las Américas. Uno de los monumentos más importantes del país, magnífica ubicación, céntrica y con muchos lugares alrededor."
  },

  {
    "country": "El Salvador",
    "city": "San Salvador",
    "name": "Parque Saburo Hirao",
    "location": "https://maps.app.goo.gl/or2MVvp3uXU7ayPb9",
    "description": "El Saburo Hirao mide 11 manzanas, divididas en ocho áreas en las que hay zonas verdes, áreas de descanso, toboganes, torre de viento, torre de agua y laberintos, entre otros juegos."
  },
  {
    "country": "El Salvador",
    "city": "San Salvador",
    "name": "Parque Bicentenario",
    "location": "https://maps.app.goo.gl/Hfxpwg8hfefiGkHU7",
    "description": "Es un parque arbolado que abarca el municipio de San Salvador, ofrece áreas para picnic, descanso, ciclovías, y senderos para caminata y bicimontaña"
  },
  {
    "country": "El Salvador",
    "city": "San Salvador",
    "name": "Lago de Ilopango",
    "location": "https://maps.app.goo.gl/xqJkKRM4V9ZLXkP77",
    "description": "A minutos de la capital, podrás encontrar el lago más grande de El Salvador. Es de origen volcánico y es ideal para realizar buceo, surf de remo, kayaks, jet ski, natación, paseo en lancha y pescar"
  },
  {
    "country": "El Salvador",
    "city": "San Salvador",
    "name": "Parque Natural Puerta del Diablo",
    "location": "https://maps.app.goo.gl/JghVuNkywyGCc4udA",
    "description": "Formación rocosa con miradores y senderos, ofreciendo vistas espectaculares."
  },

  {
    "country": "El Salvador",
    "city": "San Salvador",
    "name": "Museo Marte",
    "location": "https://maps.app.goo.gl/4Jyh8u4ehGiSAk1r9",
    "description": "El MARTE exhibe una muestra permanente de arte salvadoreño con obras de su colección, de colecciones privadas y préstamos de artistas. "
  },
  {
    "country": "El Salvador",
    "city": "San Salvador",
    "name": "Museo del Ferrocarril",
    "location": "https://maps.app.goo.gl/TAGshx3FhUXMNXDC7",
    "description": "En este museo se pueden conocer las diferentes facetas de los que fue un medio de transporte muy popular en El Salvador."
  },
  {
    "country": "El Salvador",
    "city": "San Salvador",
    "name": "Plaza de la Libertad ",
    "location": "https://maps.app.goo.gl/z3TJcSbH2u3EAfKi6",
    "description": "Es el punto con más vida de toda la ciudad. Tanto locales como turistas hacen de ella el lugar más concurrido que ver en San Salvador. "
  },

  //Lugares turisticos de La Libertad
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Playa El Tunco",
    "location": "https://maps.app.goo.gl/ecXVngyFEansCzbX7",
    "description": "Hermoso paisaje con aguas cálidas del pacífico, Grandes olas que atraen a surfistas de todo el mundo y tambien para disfrutar en familia."
  },
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Puerto de La Libertad",
    "location": "https://maps.app.goo.gl/mcrcG53Dj7LJoduK8",
    "description": "Este puerto es uno de los más antiguos y pintorescos de El Salvador. Ofrece un mercado de mariscos fresco, un malecón donde puedes disfrutar de la brisa marina, y una variedad de restaurantes que sirven deliciosos platillos a base de mariscos."
  },
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Playa San Diego",
    "location": "https://maps.app.goo.gl/RgiWE5Z1KMA6ebTUA",
    "description": "Una de las mejores playas que he conocido. Propia para el descanso, la relajación y el surf. Cuenta con una diversidad de lugares que se adaptan fácilmente al presupuesto de cada visitante."
  },
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Playa El Majahual",
    "location": "https://maps.app.goo.gl/93aiE3yR7v6JcjTHA",
    "description": "Visita Playa El Majahual, una playa popular entre los locales y turistas por su ambiente animado y sus aguas cristalinas."
  },
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Playa El Sunzal",
    "location": "https://maps.app.goo.gl/zMJGv33qzoxRWsC88",
    "description": "Otra playa popular para el surf, El Sunzal es conocida por sus olas consistentes y su ambiente relajado. También es un excelente lugar para practicar buceo y snorkel."
  },
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Playa La Paz",
    "location": "https://maps.app.goo.gl/7pcTUb3DPizrBpXS8",
    "description": "Ubicada cerca del Puerto de La Libertad, esta playa es popular tanto para surfistas como para turistas que buscan disfrutar del sol y el mar en un entorno más tranquilo."
  },
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Parque Nacional Walter Thilo Deininger",
    "location": "https://maps.app.goo.gl/W89cFHFUrXznepxcA",
    "description": "Este parque es perfecto para los amantes de la naturaleza y el senderismo. Cuenta con senderos que atraviesan bosques tropicales y permiten observar una gran diversidad de flora y fauna"
  },
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Parque de Diversiones Sunset Park",
    "location": "https://maps.app.goo.gl/PWBzy37uPSrJPtbh6",
    "description": "Un Hermoso lugar con un parque de atracciones, combina el encanto de la costa salvadoreña con desarrollo turístico de calidad."
  },
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Parque Acuatico Los Chorros",
    "location": "https://maps.app.goo.gl/ANgyMAJrJdCqtr4cA",
    "description": "Un parque natural que cuenta con piscinas alimentadas por manantiales naturales y cascadas. Es un lugar ideal para pasar un día en familia rodeado de naturaleza."
  },
  {
    "country": "El Salvador",
    "city": "La Libertad",
    "name": "Parque Aqueológico Joya de Cerén",
    "location": "https://maps.app.goo.gl/Zeis7KwaSB2vh3rT8",
    "description": "Ubicado en San Juan Opico, departamento de la Libertad. En reconocimiento de su importancia, en 1993 fu inscrito en el listado de Patrimonio Mundial de UNESCO. Es el unico sitio de patrimonio mundial en El Salvador."
  },
  //Lugares turisticos de Cuscatlán 
  {
    "country": "El Salvador",
    "city": "Cuscatlán",
    "name": "Teatro Alejandro Cotto",
    "location": "https://maps.app.goo.gl/EFoDw6LVsmyo8euz6",
    "description": "El teatro Alejandro Cotto es un espacio para la reflexión y la promoción de la cultura salvadoreña, y un homenaje a Cotto, quien contribuyó significativamente al desarrollo del cine y la cultura en el país.",
  },
  {
    "country": "El Salvador",
    "city": "Cuscatlán",
    "name": "Parque Central Suchitoto",
    "location": "https://maps.app.goo.gl/3b9MJ3EPcEscRtBM6:",
    "description": "Es uno de los destinos turísticos más destacados del país, conocido por su riqueza histórica, su encanto colonial y su entorno natural.",
  },
  {
    "country": "El Salvador",
    "city": "Cuscatlán",
    "name": "Parque Nativo Ecolodge",
    "location": "https://maps.app.goo.gl/dhDkgoGQo1KvMxYT9",
    "description": "Se trata de un espacio diseñado para ofrecer una experiencia en contacto con la naturaleza, ideal para quienes buscan relajarse y disfrutar de la tranquilidad del entorno.",
  },
  {
    "country": "El Salvador",
    "city": "Cuscatlán",
    "name": "Lago Suchitlán",
    "location": "https://maps.app.goo.gl/qn6fYTACgHLCnS9C9",
    "description": "El Lago Suchitlán es el cuerpo de agua más grande de El Salvador, creado artificialmente en 1976 tras la construcción de la Central Hidroeléctrica del Cerrón Grande. Ubicado en la región norte del país, entre los departamentos de Chalatenango, Cuscatlán, Cabañas y San Salvador, el lago cubre aproximadamente 135 km².",
  },
  {
    "country": "El Salvador",
    "city": "Cuscatlán",
    "name": "Casa Museo de Alejandro Cotto",
    "location": "https://maps.app.goo.gl/KYbB7Wg3eFpMevU49",
    "description": "La casa, construida con un estilo colonial, es un reflejo del gusto y la visión artística de Cotto, conservando mobiliario, obras de arte, libros y recuerdos personales que reflejan su vida y su contribución al arte y la cultura de El Salvador.",
  },
  {
    "country": "El Salvador",
    "city": "Cuscatlán",
    "name": "Cascada Los Tercios",
    "location": "https://maps.app.goo.gl/jJc12hcgv32KFFbD7",
    "description": "El lugar es ideal para quienes disfrutan del senderismo y el ecoturismo, ya que se encuentra rodeado de vegetación. La caminata hacia la cascada es relativamente fácil y no requiere equipo especializado, lo que lo hace accesible para la mayoría de los visitantes.",
  },
  {
    "country": "El Salvador",
    "city": "Cuscatlán",
    "name": "Centro Arte Para La Paz",
    "location": "https://maps.app.goo.gl/1AaPdyH9zSgR8hg2A",
    "description": "es un espacio cultural que se centra en la promoción del arte y la paz. Este centro tiene como objetivo fomentar la creatividad y el desarrollo personal a través de diversas actividades artísticas, talleres y eventos culturales.",
  },
]

//Agregando precios a los lugares turisticos
places.forEach(place => {
  place.min_price = 5
  place.max_price = 25
})

function formatPlaceNames(places) {
  return places.map(place => {
    let formattedName = place.name
      .trim() // Eliminar espacios innecesarios
      .replace(/\.$/, '') // Eliminar el punto final si existe
      .toLowerCase() // Convertir a minúsculas
      .replace(/\s+/g, '_') // Reemplazar espacios por guiones bajos
      .replace(/[áéíóúñ]/g, char => { // Reemplazar caracteres especiales
        const map = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n' };
        return map[char];
      });
    return { ...place, name: formattedName }
  })
}

// const formattedPlaces = formatPlaceNames(places)

// formattedPlaces.forEach(place => {
//   const insertQuery = `INSERT INTO PLACE (country, city, name, location, description, min_price, max_price) VALUES ('${place.country}', '${place.city}', '${place.name}', '${place.location}', '${place.description}', ${place.min_price}, ${place.max_price});`
//   console.log(insertQuery)
// })

// //Informacion del usuario sin cierta informacion filtrada
const placeWithoutInfo = places.map((place, index) => {
  const { country, city, location, description, min_price, max_price, ...placeWithoutInfo } = place
  return { id: index + 1, ...placeWithoutInfo, }
})

console.log(placeWithoutInfo)

// const placeCategories = [
//   {
//     id: 1,
//     name: "Playa"
//   },
//   {
//     id: 2,
//     name: "Montaña"
//   },
//   {
//     id: 3,
//     name: "Parque"
//   },
//   {
//     id: 4,
//     name: "museo"
//   },
//   {
//     id: 5,
//     name: "plaza"
//   },
//   {
//     id: 6,
//     name: "historia nacional"
//   },
//   {
//     id: 7,
//     name: "senderismo"
//   },
// ]