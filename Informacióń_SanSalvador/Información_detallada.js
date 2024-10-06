const placesDetails = [
  {
    "place_id": 1,
    "direction": "Desde la terminal de Oriente en San Salvador, toma la ruta 119 hacia San Ignacio, luego toma la ruta 509 hasta el cantón Río Chiquito. Desde allí, camina 5 kilómetros o contrata un pick-up que cuesta entre $25 y $30 para llegar al Cerro El Pital.",
    "best_season_to_go": "diciembre - marzo.",
    "where_to_stay": "Hotel entre Pinos, Nanda Parbat Hostal, Hotel de Montaña El Pital Highland.",
    "where_to_eat": "La Cafetera, Baleadas Casa Lindo, La Placita Restaurant.",
    "safety_tips": "Antes de emprender una ruta de senderismo, debe informarse sobre las condiciones climáticas y el estado de los senderos, Notificar a alguien sobre el recorrido, evitar caminar solo y mantenerse en grupo, respetar la flora y la fauna y seguir las indicaciones de los guías locales."
  },
  {
    "place_id": 2,
    "direction": "Toma la ruta 119 en la terminal de oriente en San Salvador hacia San Ignacio, dirígete a la terminal de buses a Las Pilas y, si tomas el bus a Las Pilas, bájate en la parada del cantón Río Chiquito y camina hasta tu destino.",
    "best_season_to_go": "diciembre - marzo.",
    "where_to_stay": "Hostal Miramundo, El Pital Highland, La Posada del Cielo, Hacienda Los Dos Sauces.",
    "where_to_eat": "La Placita Restaurant, Villa Café, Restaurante Rancho Escondido.",
    "safety_tips": "Se recomienda hacer una planificación adecuada, contar con un equipo y la vestimenta adecuada, evitar dañar la flora y la fauna, considerar las condiciones climáticas y seguir las indicaciones de los guías locales."
  },
  {
    "place_id": 3,
    "direction": "Desde San Salvador, toma la autopista a Santa Ana, sigue las señales hacia Chalatenango, y al llegar, toma la carretera señalizada hacia el embalse. Continúa siguiendo las indicaciones hasta llegar al Embalse Cerrón Grande.",
    "best_season_to_go": "septiembre - abril.",
    "where_to_stay": "Casa 1800 Suchitoto, Los Almendros de San Lorenzo, Hostal Koltín Suchitoto, Casa Hotel Santa Lucía.",
    "where_to_eat": "Casa 1800 Suchitoto, Restaurante el Zope, Brutto - El Salvador.",
    "safety_tips": "Respetar la flora y fauna del lugar, no contaminar el lago y seguir las indicaciones de los guías locales."
  },
  {
    "place_id": 4,
    "direction": "Desde el Boulevard Arturo Castellanos, toma el Boulevard Venezuela hacia la Alameda Manuel Enrique Araujo. Luego, conduce por la carretera Troncal del Norte hasta Chalatenango. Finalmente, toma la carretera 3E hasta llegar a la Calle San Martín.",
    "best_season_to_go": "Durante todo el año.",
    "where_to_stay": "Hotel Jardín De Las Marias, The Mayan Grouper, El Tejado.",
    "where_to_eat": "Vidamia Restaurante y Café, Peñaflor Restaurante, Olan Café.",
    "safety_tips": "Infórmate sobre el área, visita durante el día, conoce los servicios de emergencia."
  },
  {
    "place_id": 5,
    "direction": "Toma la ruta de buses 119 desde la terminal de Oriente en San Salvador. Esta ruta va hasta la Frontera El Poy en Citalá y pasa por los municipios de La Palma y San Ignacio.",
    "best_season_to_go": "noviembre - abril.",
    "where_to_stay": "Hostal Posada Real, Entre Pinos Hotel, Hotel La Palma.",
    "where_to_eat": "Olan Café, Villa Café.",
    "safety_tips": "Visitar durante el día, Conoce los servicios de emergencia, cuida las estructuras."
  },
  {
    "place_id": 6,
    "direction": "Si viajas en automóvil, dirígete al kilómetro 87.5 de la Carretera Troncal del Norte en San Ignacio. Si viajas en autobús, toma la ruta 119 desde la Terminal de Oriente en San Salvador, el hotel está unos kilómetros después de La Palma. Pide al personal que te indique donde bajar.",
    "best_season_to_go": "Durante todo el año.",
    "where_to_stay": "Hotel Entre Pinos, La Posada de Suchitlan, EL Pital Ecolodge",
    "where_to_eat": "La Placita Restaurant, La Cafeta, Olan Café.",
    "safety_tips": "Ten precaución al salir, Comunica tus planes, usa el transporte recomendado."
  },
  {
    "place_id": 7,
    "direction": "Debes tomar la ruta de buses 119 por la terminal de oriente en San Salvador, al llegar a San Ignacio debes bajar en el punto de buses de la ruta 509A, luego toma la ruta 509A que conduce a cantón Las Pilas. Al llegar busca quien te indique claramente que lugares existen para poder visitar el rió Sumpul.",
    "best_season_to_go": "Durante todo el año.",
    "where_to_stay": "La Posada de Suchitlán, Hostal Taíces de Mi Pueblo, Hotel y Restaurante LOS AMIGOS.",
    "where_to_eat": "Hotel y Restaurante LOS AMIGOS, Turicentro Rio Sumpul, Rancho Bambú.",
    "safety_tips": "Investiga las condiciones del río, usa equipo adecuado para actividades acuáticas, Mantente alejado de las orillas resbaladizas y lleva un botiquín de primeros auxilios."
  },
  {
    "place_id": 8,
    "direction": "Toma la ruta 125 desde la Terminal de Oriente en San Salvador. Al llegar a Chalatenango, puedes tomar un taxi que cobra $1 por persona o caminar de 10 a 20 minutos hasta el lugar.",
    "best_season_to_go": "Durante todo el año.",
    "where_to_stay": "Hotel y Restaurante LOS AMIGOS, La Posada de Suchitlán, Hotel y Restaurante El Tejado.",
    "where_to_eat": "Hotel y Restaurante LOS AMIGOS, Hotel y Restaurante El Tejado.",
    "safety_tips": "Informate sobre el lugar, sus horarios y actividades, ten un uso adecuado de las atracciones."
  },
  {
    "place_id": 9,
    "direction": "Toma la ruta de buses 119 desde la Terminal de Oriente en San Salvador. Esta ruta llega a la Frontera El Poy en Citalá y pasa por los municipios de La Palma y San Ignacio.",
    "best_season_to_go": "diciembre - abril.",
    "where_to_stay": "Hotel La Palma, Hostal Posada Real, Entre Pinos Hotel.",
    "where_to_eat": "La Placita Restaurant, Olan Café, Rocios Ice Cream.",
    "safety_tips": "Investiga el lugar, evita zonas peligrosas, informate sobre horarios y actividades."
  },
  {
    "place_id": 10,
    "direction": "Toma la ruta de buses 119 desde la Terminal de Oriente en San Salvador. Esta ruta llega a la Frontera El Poy en Citalá y pasa por los municipios de La Palma y San Ignacio.",
    "best_season_to_go": "Durante todo el año.",
    "where_to_stay": "Entre Pinos Hotel, Las Tilapias Hotel y Restaurante, Cabañas El Pital.",
    "where_to_eat": "Las Tilapias Hotel y Restaurante, Restaurante Rancho Escondido, Romeros Cocina y Cafe.",
    "safety_tips": "Informate del lugar, respeta la flora y la fauna, ten un equipo y vestuario adecuados para caminatas, montañismo entre otras actividades."
  },
  {
    "place_id": 11,
    "direction": "Toma la ruta de buses 119 desde la Terminal de Oriente en San Salvador; esta ruta va a la Frontera El Poy en Citalá y pasa por La Palma y San Ignacio. Si viajas en automóvil, toma la carretera a Santa Ana hacia Chalatenango y sigue las indicaciones hasta el parque acuático.",
    "best_season_to_go": "Durante todo el año.",
    "where_to_stay": "Hotel y Restaurante LOS AMIGOS, Las Terrazas del Alto, La Posada de Suchitlán.",
    "where_to_eat": "Hotel y Restaurante LOS AMIGOS, Restaurante El Paraíso, Hostal y Restaurante Paraíso de la montaña.",
    "safety_tips": "Supervisa a los menores, uso adecuado de las atracciones, respeta las señales de seguridad."
  },


  //Detalles de lugares en San Salvador 
  {
    "place_id": 12,
    "direction": "Toma la ruta de buses 29 desde la terminal de oriente, punto de bajada Parque San Jose o mercado Excuartel. Si viajas en automóvil, ve por Blvr. del Ejercito Nacional y Blvr. Arturo Castellanos/Blvr. Venezuela hasta tu destino.",
    "best_season_to_go": "Durante todo el año",
    "where_to_stay": "La Zona Hostel, Hotel All Days Inn & Out",
    "where_to_eat": "Delikat, La Doña Steakhouse",
    "safety_tips": "Informate sobre los horarios y actividades, respeta las reglas si visitas lugares de historia nacional."
  },
  {
    "place_id": 13,
    "direction": "Desde la Terminal de Oriente, toma un bus hacia el centro de San Salvador (como la Ruta 29 o 41-A), luego transborda a la Ruta 30-B que te llevará directamente al Monumento al Salvador del Mundo.",
    "best_season_to_go": "noviembre - febrero",
    "where_to_stay": "Barceló San Salvador, Intercontinental San Salvador",
    "where_to_eat": "Pizza Hut - RBD Salvador del Mundo, Restaurante La Casona",
    "safety_tips": "Mantener objetos de valor en resguardo y evitar el tráfico los fines de semana"
  },
  {
    "place_id": 14,
    "direction": "Desde la Terminal de Oriente, toma un bus hacia el centro de San Salvador (como la Ruta 29 o 41-A), luego transborda a la Ruta 12 o 17 que te llevará cerca del Parque Saburo Hirao.",
    "best_season_to_go": "noviembre - abril",
    "where_to_stay": "Hotel Abrego, Hostal Doña Marta",
    "where_to_eat": "La Estancia, IzalcoMex",
    "safety_tips": "Respetar las zonas arqueológicas, tener precaución con las atracciones del parque"
  },
  {
    "place_id": 15,
    "direction": "Consta de dos entradas, una ubicada sobre la avenida Jerusalén, y otra entrada vehicular en final calle La Mascota. Para llegar puede abordar la ruta 101-D que le deja a escasos metros del parque.",
    "best_season_to_go": "enero - noviembre",
    "where_to_stay": "Hotel Vía Porto, Kaleo Hotel Boutique",
    "where_to_eat": "Al Pomodoro, Hacienda Real",
    "safety_tips": "Seguir las medidad de seguridad para ciclistas y siempre vigilar a los niños para evitar accidentes."
  },
  {
    "place_id": 16,
    "direction": "Para ir desde San Salvador puedes tomar la Ruta 15 en el Parque Infantil o en el Bulevar del Ejército.",
    "best_season_to_go": "",
    "where_to_stay": "Hotel Familiar Apulo Ilopango, Las Tres Piedras",
    "where_to_eat": "Restaurante Ericka R.R., Restaurante Brisas Del Lago",
    "safety_tips": "Llevar sombrero y protección solar, no alejarse demasiado de las áreas turísticas."
  },
  {
    "place_id": 17,
    "direction": "Desde la Terminal de Oriente, toma un bus hacia el centro de San Salvador (como la Ruta 29 o 41-A), luego transborda a la Ruta 12 que te llevará hasta Los Planes de Renderos, desde donde puedes caminar o tomar un transporte local hasta la Puerta del Diablo.",
    "best_season_to_go": "diciembre - febrero",
    "where_to_stay": "Hyatt Centric San Salvador , Hotel Mirador Plaza",
    "where_to_eat": "IKATÚ Café, Los Boomwalos",
    "safety_tips": "Usar calzado antideslizante/deportivo y ropa abrigada."
  },

  {
    "place_id": 18,
    "direction": "Desde el centro de San Salvador, toma la Ruta 52 o 42-A que te llevará directamente cerca del Museo MARTE, ubicado en la Colonia San Benito.",
    "best_season_to_go": "Todo el año",
    "where_to_stay": "Hotel Sheraton Presidente, Cardedeu Suites",
    "where_to_eat": "The Green House, Delikat",
    "safety_tips": "Visitar durante el día y en grupos."
  },
  {
    "place_id": 19,
    "direction": "Desde el centro de San Salvador, toma la Ruta 29 o 55 que te llevará directamente al Museo del Ferrocarril, ubicado en la Avenida Peralta.",
    "best_season_to_go": "Todo el año",
    "where_to_stay": "Hostal Casa 1717, Lorenzo Hotel",
    "where_to_eat": "Restaurante Conchas El Bosque, Restaurante Sabita",
    "safety_tips": "Informate sobre horarios y grupos, no está permitido fumar, ingresar alimentos y bebidad en el interior del museo."
  },
  {
    "place_id": 20,
    "direction": "Desde el centro de San Salvador, toma la Ruta 30-B o 52 que te llevará cerca de Plaza Futura, ubicada en la Colonia Escalón.",
    "best_season_to_go": "Todo el año",
    "where_to_stay": "Hilton San Salvador, Hotel Mirador Plaza",
    "where_to_eat": "Típicos Margoth, Restaurante Los Ranchos",
    "safety_tips": "Mantener nuestras pertenencias seguras, Evitar afluencias de personas."
  },
  {
    "place_id": 21,
    "direction": "Desde el centro de San Salvador, toma la Ruta 12 que te llevará directamente al Parque Balboa, ubicado en Los Planes de Renderos.",
    "best_season_to_go": "mayo - octubre",
    "where_to_stay": "Hotel Boutique Amatechan, Hotel Vieja Europa",
    "where_to_eat": "Pupusódromo Parque Balboa, Frida Cocina Mexicana",
    "safety_tips": "Informate sobre horarios y actividades, llevar ropa abrigada."
  },

  //Detalles de lugares de La Libertad
  {
    "place_id": 22,
    "direction": "Desde San Salvador, toma la carretera al puerto de La Libertad, luego el bypass Camino a Surf City, y sigue al occidente por la carretera Litoral, hasta el kilómetro 43. Un arco de madera indica que has llegado a una de las capitales mundiales del surf.",
    "best_season_to_go": "Durante todo el año",
    "where_to_stay": "Hotel Mirasuft & waves",
    "where_to_eat": "Rock & Roe Fish Shop",
    "safety_tips": "visitar durante la mañana ya que la marea no es muy turbulenta, nadar en áreas seguras, hidrátate y usa bloqueador y respetar el medio ambiente."
  },
  {
    "place_id": 23,
    "direction": "Desde la carretera Panamericana desde San Salvador en dirección a Santa Tecla. Luego, sigue las señales hacia el Volcán de San Salvador. Continúa por la Calle al Boquerón, que te llevará hasta la entrada del parque, ubicado en la cima del volcán. El trayecto dura aproximadamente 30-40 minutos desde San Salvador.",
    "best_season_to_go": "Durante todo el año",
    "where_to_stay": "Hotel Villa Antigua",
    "where_to_eat": "Café del Volcán",
    "safety_tips": "Es recomendable llegar temprano para disfrutar mejor las vistas y realizar caminatas sin prisa, llevar siempre agua para hidratarse bien."
  },
  {
    "place_id": 24,
    "direction": "Para llegar toma la Carretera del Litoral (CA-2) desde San Salvador en dirección al Puerto de La Libertad. El trayecto es de unos 30 a 45 minutos en auto, una vez en La Libertad, sigue las señales hacia las playas principales como El Tunco o El Zonte, que forman parte de Surf City.",
    "best_season_to_go": "Durante todo el año",
    "where_to_stay": "Hotel AST surf",
    "where_to_eat": "Olor de Mar",
    "safety_tips": "Mantenerse informado, tener precaución al nadar y mantenerse hidratado y protegido del sol."
  },
  {
    "place_id": 25,
    "direction": "se encuentra en el cantón Hacienda San Diego, Km 55, Calle a Comalapa, La Libertad, El Salvador. Para llegar, puedes tomar la carretera a Comalapa desde San Salvador, que te llevará directamente hacia el parque. La señalización es clara y hay acceso desde diferentes puntos de La Libertad.",
    "best_season_to_go": "Enero - Noviembre",
    "where_to_stay": "Boca Olas Resort Villas",
    "where_to_eat": "Café Don Pedro",
    "safety_tips": "Es recomendable ir desde la mañana, siempre manternse informado por cualquier percanse, hidratarse bien."
  },
  {
    "place_id": 26,
    "direction": "Tomar la carretera  del Litoral (CA-2) desde San Salvador hacia el oeste. La playa está aproximadamente a 35 kilómetros de la capital, lo que equivale a un trayecto de unos 40 a 50 minutos en auto.",
    "best_season_to_go": "Durante todo el año",
    "where_to_stay": "Rancho Las Brisas",
    "where_to_eat": "Restaurante Playa del Pulpo",
    "safety_tips": "informase de los horarios, no alejarse de las areas ya establecidas y mantener limpia la playa."
  },
  {
    "place_id": 27,
    "direction": "Llegar a El Zonte es fácil, desde San Salvador toma la carretera al Puerto de La Libertad, incorpórate después al bypass Camino a Surf City, y al llegar a la carretera Litoral, sigue hacia el occidente hasta el kilometro 53, donde la señalización te indicará que has arribado",
    "best_season_to_go": "Durante todo el año",
    "where_to_stay": "Hotel Palo Verde",
    "where_to_eat": "El Vikingo",
    "safety_tips": "Tener precaución al nadar, informa a alguien sobre tus planes, mantenerse hidratado y protegido del sol y mantente informado sobre cualquier cambio en la marea"
  },
  {
    "place_id": 28,
    "direction": "toma la Carretera del Litoral (CA-2) desde San Salvador. El trayecto es de aproximadamente 35 kilómetros, que se recorren en unos 40 minutos en auto. Al llegar, encontrarás un ambiente costero con acceso a diversas playas y un malecón encantador.",
    "best_season_to_go": "Durante todo el año",
    "where_to_stay": "Hotel Los Farallones",
    "where_to_eat": "Restaurante Acajutla",
    "safety_tips": "Llevar algun tipo de gorra o visera y usar bloqueador solar, utilizar transporte confiable y Mantenerse informado."
  },
  {
    "place_id": 29,
    "direction": "Tomar la carretera CA-2 desde San Salvador hacia el oeste. Luego, dirígete hacia la carretera que conecta con el cantón de Tamique, que está aproximadamente a 30 kilómetros de distancia y puede tomarte alrededor de 45 minutos en automóvil.",
    "best_season_to_go": "Durante todo el año",
    "where_to_stay": "Atami Escape Resort",
    "where_to_eat": "Beto's",
    "safety_tips": "Se sugiere contactar a la unidad de turismo al llegar al parque central de Tamanique, donde te proporcionarán un guía que te acompañará en la aventura."
  },
  {
    "place_id": 30,
    "direction": "Tomar a Carretera del Litoral (CA-2) desde San Salvador hacia el oeste. Después de aproximadamente 40 minutos y 35 kilómetros, encontrarás señales que te guiarán hacia Playa San Blas.",
    "best_season_to_go": "Durante todo el año",
    "where_to_stay": "Sabas Beach Resort",
    "where_to_eat": "La Dolce Vita",
    "safety_tips": "Evitar zonas solitarias, vigilar las pertenencias, informarse sobre le clima y consulta  a los locales."
  },
  {
    "place_id": 31,
    "direction": "Dirígete al Terminal de Oriente.Toma la Ruta 163, que es un autobús directo que te lleva desde San Salvador hasta Suchitoto. Esta ruta suele pasar cada 30 minutos a 1 hora. El tiempo de viaje es de aproximadamente 1.5 a 2 horas. Al llegar en la Ruta 163, puedes caminar unas pocas cuadras desde la terminal de buses hacia la Calle 15 de Septiembre, donde se encuentra el teatro.",
    "best_season_to_go": "depende de tus preferencias climáticas y de las actividades culturales que te interesen: Temporada seca (noviembre a abril):  Es ideal si prefieres un clima más fresco y seco. Temporada de lluvias (mayo a octubre): Aunque llueve más durante estos meses, el paisaje está más verde y exuberante.En ocasiones, la lluvia es intermitente, permitiendo disfrutar del teatro y otras actividades culturales.",
    "where_to_stay": "Hotel el tejado",
    "where_to_eat": "El Gringo Hostel & Restaurant",
    "safety_tips": "Evita zonas poco iluminadas de noche: Aunque el centro es seguro, si te alejas de las áreas turísticas, es mejor moverte en grupo o en transporte confiable por la noche. Evita objetos de valor a la vista: Aunque es un lugar tranquilo, mantener tus objetos personales, como cámaras, teléfonos y billeteras, fuera de vista en zonas concurridas puede reducir cualquier riesgo."
  },
  {
    "place_id": 32,
    "direction": "Ruta de bus: Autobús de la ruta 140 (San Salvador - Suchitoto).El bus te dejará en la terminal de autobuses de Suchitoto, que está a solo unas cuadras del Parque Central (unos 5-10 minutos caminando). Desde la terminal, solo necesitas caminar hacia el este por la Calle 15 de Septiembre, y pronto llegarás al parque. ",
    "best_season_to_go": "Mejor época para visitar: Noviembre a abril (temporada seca). Para eventos culturales: Septiembre (Festival de los Farolitos) y Semana Santa (abril). Si prefieres naturaleza exuberante: Mayo a octubre (temporada de lluvias).",
    "where_to_stay": "Hostel Suchitoto",
    "where_to_eat": "Café Suchitlán",
    "safety_tips": "Evita zonas poco iluminadas de noche: Aunque el centro es seguro, si te alejas de las áreas turísticas, es mejor moverte en grupo o en transporte confiable por la noche. Evita objetos de valor a la vista: Aunque es un lugar tranquilo, mantener tus objetos personales, como cámaras, teléfonos y billeteras, fuera de vista en zonas concurridas puede reducir cualquier riesgo."
  },
  {
    "place_id": 33,
    "direction": "Buses hacia La Libertad: Puedes tomar un bus desde el Terminal de Buses de San Salvador hacia La Libertad. Los buses que van a La Libertad suelen estar señalizados y pueden llevarte a la zona más cercana al ecolodge. Buses de la ruta 102: Una opción popular es el bus de la ruta 102, que va directo a La Libertad.Pregunta al conductor si va hacia el área de El Tunco o Zonte, que están cerca del ecolodge.",
    "best_season_to_go": " Durante todo el año",
    "where_to_stay": "Cabañas El Pescador",
    "where_to_eat": "Restaurante Los Tres Cafetales",
    "safety_tips": "Horarios de buses: Verifica los horarios de los buses de regreso a Suchitoto para asegurarte de tener tiempo suficiente para explorar el parque. Consulta el clima: Revisa el clima antes de salir, ya que el área puede ser lluviosa durante ciertas épocas del año. Lleva agua y snacks: Asegúrate de llevar agua y algunos snacks para disfrutar durante tu visita al parque.",
  },
  {
    "place_id": 34,
    "direction": "Terminal de Buses: Dirígete a la Terminal de Buses de San Salvador (Terminal de Occidente). Buses a Suchitoto: Busca los buses que van a Suchitoto.Estos buses suelen salir con frecuencia y el viaje dura aproximadamente 1.5 a 2 horas, dependiendo del tráfico. Llegada a Suchitoto: Una vez que llegues a Suchitoto, puedes preguntar a los locales o buscar señalización para llegar al Lago Suchitlán, que está a unos 15-20 minutos a pie del centro de la ciudad.",
    "best_season_to_go": " Durante todo el año",
    "where_to_stay": "Hotel Mirador",
    "where_to_eat": "La Posada de Suchitlán",
    "safety_tips": "Vístete adecuadamente: El clima puede ser cálido, así que lleva ropa ligera y cómoda. También es útil un sombrero o gorra para protegerte del sol. Protección solar: Usa bloqueador solar y repelente de insectos, especialmente si planeas estar al aire libre durante varias horas.Cuidado en el agua: Si decides nadar o participar en actividades acuáticas, asegúrate de hacerlo en áreas seguras y designadas.Usa chalecos salvavidas si es necesario. ",
  },
  {
    "place_id": 35,
    "direction": "Desde San Salvador: Toma el bus de la Ruta 129 que va desde San Salvador hacia Suchitoto",
    "best_season_to_go": " Durante todo el año",
    "where_to_stay": "Casa 1800 Suchitoto",
    "where_to_eat": "Los Almendros de San Lorenzo",
    "safety_tips": "uidado con las instalaciones: Trata la propiedad y sus exhibiciones con respeto. Es un lugar culturalmente significativo y debe ser tratado como tal. Silencio y consideración: Mantén un volumen bajo mientras te encuentras dentro de la casa para no interrumpir la experiencia de otros visitantes.",
  },
  {
    "place_id": 36,
    "direction": "Ve a la Terminal de Autobuses de San Salvador (Terminal de Occidente o Terminal de San Salvador).Toma un bus hacia Suchitoto.Varias compañías ofrecen este servicio, como Transportes Rápidos de El Salvador y Transportes Ahuachapaneco.",
    "best_season_to_go": " Durante todo el año",
    "where_to_stay": "Hotel Los Tercios ",
    "where_to_eat": "Restaurante El Rancho",
    "safety_tips": "Ropa adecuada: Usa ropa ligera y cómoda, preferiblemente de secado rápido. Un traje de baño es recomendable si planeas nadar. Calzado apropiado: Lleva calzado resistente y antideslizante, ya que el camino puede ser resbaladizo.Botas de senderismo o sandalias de trekking son buenas opciones. Hidratación: Lleva suficiente agua para mantenerte hidratado durante tu visita, especialmente si planeas hacer senderismo. Protección solar: Aplica bloqueador solar y lleva un sombrero o gorra, ya que la exposición al sol puede ser intensa. No dejes basura: Mantén la limpieza del área.Lleva tus desechos contigo y respeta la flora y fauna local. No molestar la vida silvestre: Observa a los animales y plantas, pero no los molestes ni los toques. Atención al entorno: Mantente atento a tu entorno y camina con cuidado, especialmente en áreas resbaladizas o cerca del agua. Viaja en grupo: Si es posible, visita la cascada con amigos o familiares.Esto no solo es más seguro, sino que también es más divertido. Horarios: Verifica los horarios de apertura de los restaurantes, especialmente si planeas visitarlos durante la semana. Reservas: Si planeas ir en fin de semana o en temporada alta, considera hacer una reserva, ya que algunos lugares pueden llenarse rápidamente.",
  },
  {
    "place_id": 37,
    "direction": "Dirígete a la Terminal de Occidente en San Salvador. Busca los buses que van hacia Suchitoto. Compañías como Transportes Rápidos de El Salvador y Transportes Ahuachapaneco ofrecen este servicio. El costo del pasaje suele ser entre $1.50 y $3.00 USD y el viaje dura aproximadamente 1.5 a 2 horas.",
    "best_season_to_go": " Durante todo el año",
    "where_to_stay": "Hostel Casa Verde",
    "where_to_eat": "La Posada de Suchitlán",
    "safety_tips": "Aprecia la diversidad: El Centro Arte para la Paz es un lugar que celebra la diversidad cultural. Muestra respeto por las diferentes expresiones artísticas y las tradiciones que encuentres. Reflexiona sobre el arte: Tómate un tiempo para reflexionar sobre las obras que veas.Pregúntate qué mensaje transmiten y cómo resuenan contigo. Fotografía responsable: Si deseas tomar fotos, pregunta primero si está permitido, especialmente en áreas donde se exhiben obras de arte.",
  }
]

placesDetails.forEach(place => {
  const insertQuery = `INSERT INTO place_details (place_id, direction, best_time, where_to_stay, where_to_eat, safety_tips) VALUES (${place.place_id}, '${place.direction}', '${place.best_season_to_go}', '${place.where_to_stay}', '${place.where_to_eat}', '${place.safety_tips}');`
  console.log(insertQuery)
})