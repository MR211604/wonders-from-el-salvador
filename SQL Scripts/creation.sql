CREATE DATABASE  IF NOT EXISTS `proyectolic` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyectolic`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectolic
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `place_id` int NOT NULL,
  `comment` text NOT NULL,
  `date_added` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `place_id` (`place_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place`
--

DROP TABLE IF EXISTS `place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(75) NOT NULL,
  `country` varchar(75) NOT NULL,
  `name` varchar(75) NOT NULL,
  `location` text NOT NULL,
  `description` text NOT NULL,
  `min_price` float NOT NULL,
  `max_price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place`
--

LOCK TABLES `place` WRITE;
/*!40000 ALTER TABLE `place` DISABLE KEYS */;
INSERT INTO `place` VALUES (1,'Chalatenango','El Salvador','cerro_el_pital','https://maps.app.goo.gl/xu25GKGWwuNSiTMz9','Es el punto más alto de El Salvador, con una altitud de 2,730 metros sobre el nivel del mar. Ofrece vistas espectaculares y es ideal para acampar, hacer senderismo y disfrutar de la naturaleza. En días despejados, puedes ver hasta el océano Pacífico desde la cima.',5,25),(2,'Chalatenango','El Salvador','cerro_miramundo','https://maps.app.goo.gl/rhUitCfMjHPPLZZv5','Visita Miramundo, un pintoresco pueblo de montaña con impresionantes vistas panorámicas y un clima fresco, ideal para disfrutar de la tranquilidad y la belleza natural.',5,25),(3,'Chalatenango','El Salvador','embalse_de_cerron_grande','https://maps.app.goo.gl/SpnA2AEjfBzuX3cd8','También conocido como el Lago Suchitlán, es el cuerpo de agua artificial más grande de El Salvador. Aquí puedes hacer paseos en lancha y observar aves, ya que es un área rica en biodiversidad.',5,25),(4,'Chalatenango','El Salvador','parque_central_de_chalatenango','https://maps.app.goo.gl/cyfdeKua2Xk9cvp79','Disfruta de un paseo por el Parque Central de Chalatenango, un espacio verde lleno de vida y color, donde podrás disfrutar de la arquitectura colonial y la hospitalidad de los lugareños.',5,25),(5,'Chalatenango','El Salvador','parque_la_palma','https://maps.app.goo.gl/fNwP9HiFkYwfTwYb9','Un pueblo pintoresco conocido por su arte naif, que es un estilo de pintura colorido y sencillo. La Palma es un centro cultural importante donde puedes comprar artesanías y ver murales que decoran el pueblo.',5,25),(6,'Chalatenango','El Salvador','hotel_entre_pinos','https://maps.app.goo.gl/yXMbew7L1tk9cKEL6','Es un amplio hotel con instalaciones acogedoras que le garantizaran un descanso formidable, cuenta con paquetes diseñados para disfrutar una visita de día o alojamiento prolongado con las mayores comodidades de un resort.',5,25),(7,'Chalatenango','El Salvador','rio_sumpul','https://maps.app.goo.gl/yKkfmWhnNRQbzkZG7','Disfruta de un refrescante baño en el Río Sumpul, un hermoso río rodeado de exuberante vegetación y cascadas, ideal para disfrutar de la naturaleza y relajarse.',5,25),(8,'Chalatenango','El Salvador','turicentro_agua_fria','https://maps.app.goo.gl/NoLT99ttPn1Yqr969','El Turicentro Agua Fría está ubicado en la parte urbana de la ciudad de Chalatenango, fue construido en 1977 como un centro recreativo familiar. Es un lugar muy visitado, especialmente en épocas de vacaciones o festivos.',5,25),(9,'Chalatenango','El Salvador','la_palma_chalatenango','https://maps.app.goo.gl/F9XLjogCmeeHy3gi9','El Pueblo de la Palma Posee una dimensión territorial de 13,189 kilpometros cuadrados y está bordeando al norte de San Ignacio. La Palma es una zona montañosa y esta conformado por 8 cantones, 87 caseríos y 6 barrios.',5,25),(10,'Chalatenango','El Salvador','san_ignacio','https://maps.app.goo.gl/MiKuzJpkaGEE3CT3A','Un pequeño pueblo cercano a El Pital, conocido por su ambiente tranquilo y sus vistas impresionantes. Es un buen punto de partida para explorar la región.',5,25),(11,'Chalatenango','El Salvador','parque_acuatico_paraiso_de_la_montana','https://maps.app.goo.gl/vPx2AqB7wrMMopwQ9','Parque Acuático Paraíso de la Montaña es un parque acuático en Chalatenango, El Salvador, que ofrece actividades para toda la familia, como piscinas y toboganes.',5,25),(12,'San Salvador','El Salvador','centro_historico_de_san_salvador','https://maps.app.goo.gl/AwvkNgtyyhN9RN5x6','El corazón de San Salvador. Descubre la historia, cultura y tradiciones, encontrarás lugares que destacan con sus imponentes estructuras, como el Palacio Nacional y el Teatro Nacional.',5,25),(13,'San Salvador','El Salvador','monumento_al_divino_salvador_del_mundo','https://maps.app.goo.gl/yoy1vfMXdnWnz2eeA','Símbolo icónico de El Salvador, ubicado en la Plaza Las Américas. Uno de los monumentos más importantes del país, magnífica ubicación, céntrica y con muchos lugares alrededor.',5,25),(14,'San Salvador','El Salvador','parque_saburo_hirao','https://maps.app.goo.gl/or2MVvp3uXU7ayPb9','El Saburo Hirao mide 11 manzanas, divididas en ocho áreas en las que hay zonas verdes, áreas de descanso, toboganes, torre de viento, torre de agua y laberintos, entre otros juegos.',5,25),(15,'San Salvador','El Salvador','parque_bicentenario','https://maps.app.goo.gl/Hfxpwg8hfefiGkHU7','Es un parque arbolado que abarca el municipio de San Salvador, ofrece áreas para picnic, descanso, ciclovías, y senderos para caminata y bicimontaña',5,25),(16,'San Salvador','El Salvador','lago_de_ilopango','https://maps.app.goo.gl/xqJkKRM4V9ZLXkP77','A minutos de la capital, podrás encontrar el lago más grande de El Salvador. Es de origen volcánico y es ideal para realizar buceo, surf de remo, kayaks, jet ski, natación, paseo en lancha y pescar',5,25),(17,'San Salvador','El Salvador','parque_natural_puerta_del_diablo','https://maps.app.goo.gl/JghVuNkywyGCc4udA','Formación rocosa con miradores y senderos, ofreciendo vistas espectaculares.',5,25),(18,'San Salvador','El Salvador','museo_marte','https://maps.app.goo.gl/4Jyh8u4ehGiSAk1r9','El MARTE exhibe una muestra permanente de arte salvadoreño con obras de su colección, de colecciones privadas y préstamos de artistas. ',5,25),(19,'San Salvador','El Salvador','museo_del_ferrocarril','https://maps.app.goo.gl/TAGshx3FhUXMNXDC7','En este museo se pueden conocer las diferentes facetas de los que fue un medio de transporte muy popular en El Salvador.',5,25),(20,'San Salvador','El Salvador','plaza_de_la_libertad','https://maps.app.goo.gl/z3TJcSbH2u3EAfKi6','Es el punto con más vida de toda la ciudad. Tanto locales como turistas hacen de ella el lugar más concurrido que ver en San Salvador. ',5,25),(21,'La Libertad','El Salvador','playa_el_tunco','https://maps.app.goo.gl/ecXVngyFEansCzbX7','Hermoso paisaje con aguas cálidas del pacífico, Grandes olas que atraen a surfistas de todo el mundo y tambien para disfrutar en familia.',5,25),(22,'La Libertad','El Salvador','puerto_de_la_libertad','https://maps.app.goo.gl/mcrcG53Dj7LJoduK8','Este puerto es uno de los más antiguos y pintorescos de El Salvador. Ofrece un mercado de mariscos fresco, un malecón donde puedes disfrutar de la brisa marina, y una variedad de restaurantes que sirven deliciosos platillos a base de mariscos.',5,25),(23,'La Libertad','El Salvador','playa_san_diego','https://maps.app.goo.gl/RgiWE5Z1KMA6ebTUA','Una de las mejores playas que he conocido. Propia para el descanso, la relajación y el surf. Cuenta con una diversidad de lugares que se adaptan fácilmente al presupuesto de cada visitante.',5,25),(24,'La Libertad','El Salvador','playa_el_majahual','https://maps.app.goo.gl/93aiE3yR7v6JcjTHA','Visita Playa El Majahual, una playa popular entre los locales y turistas por su ambiente animado y sus aguas cristalinas.',5,25),(25,'La Libertad','El Salvador','playa_el_sunzal','https://maps.app.goo.gl/zMJGv33qzoxRWsC88','Otra playa popular para el surf, El Sunzal es conocida por sus olas consistentes y su ambiente relajado. También es un excelente lugar para practicar buceo y snorkel.',5,25),(26,'La Libertad','El Salvador','playa_la_paz','https://maps.app.goo.gl/7pcTUb3DPizrBpXS8','Ubicada cerca del Puerto de La Libertad, esta playa es popular tanto para surfistas como para turistas que buscan disfrutar del sol y el mar en un entorno más tranquilo.',5,25),(27,'La Libertad','El Salvador','parque_nacional_walter_thilo_deininger','https://maps.app.goo.gl/W89cFHFUrXznepxcA','Este parque es perfecto para los amantes de la naturaleza y el senderismo. Cuenta con senderos que atraviesan bosques tropicales y permiten observar una gran diversidad de flora y fauna',5,25),(28,'La Libertad','El Salvador','parque_de_diversiones_sunset_park','https://maps.app.goo.gl/PWBzy37uPSrJPtbh6','Un Hermoso lugar con un parque de atracciones, combina el encanto de la costa salvadoreña con desarrollo turístico de calidad.',5,25),(29,'La Libertad','El Salvador','parque_acuatico_los_chorros','https://maps.app.goo.gl/ANgyMAJrJdCqtr4cA','Un parque natural que cuenta con piscinas alimentadas por manantiales naturales y cascadas. Es un lugar ideal para pasar un día en familia rodeado de naturaleza.',5,25),(30,'La Libertad','El Salvador','parque_aqueologico_joya_de_ceren','https://maps.app.goo.gl/Zeis7KwaSB2vh3rT8','Ubicado en San Juan Opico, departamento de la Libertad. En reconocimiento de su importancia, en 1993 fu inscrito en el listado de Patrimonio Mundial de UNESCO. Es el unico sitio de patrimonio mundial en El Salvador.',5,25),(31,'Cuscatlán','El Salvador','teatro_alejandro_cotto','https://maps.app.goo.gl/EFoDw6LVsmyo8euz6','El teatro Alejandro Cotto es un espacio para la reflexión y la promoción de la cultura salvadoreña, y un homenaje a Cotto, quien contribuyó significativamente al desarrollo del cine y la cultura en el país.',5,25),(32,'Cuscatlán','El Salvador','parque_central_suchitoto','https://maps.app.goo.gl/3b9MJ3EPcEscRtBM6:','Es uno de los destinos turísticos más destacados del país, conocido por su riqueza histórica, su encanto colonial y su entorno natural.',5,25),(33,'Cuscatlán','El Salvador','parque_nativo_ecolodge','https://maps.app.goo.gl/dhDkgoGQo1KvMxYT9','Se trata de un espacio diseñado para ofrecer una experiencia en contacto con la naturaleza, ideal para quienes buscan relajarse y disfrutar de la tranquilidad del entorno.',5,25),(34,'Cuscatlán','El Salvador','lago_suchitlan','https://maps.app.goo.gl/qn6fYTACgHLCnS9C9','El Lago Suchitlán es el cuerpo de agua más grande de El Salvador, creado artificialmente en 1976 tras la construcción de la Central Hidroeléctrica del Cerrón Grande. Ubicado en la región norte del país, entre los departamentos de Chalatenango, Cuscatlán, Cabañas y San Salvador, el lago cubre aproximadamente 135 km².',5,25),(35,'Cuscatlán','El Salvador','casa_museo_de_alejandro_cotto','https://maps.app.goo.gl/KYbB7Wg3eFpMevU49','La casa, construida con un estilo colonial, es un reflejo del gusto y la visión artística de Cotto, conservando mobiliario, obras de arte, libros y recuerdos personales que reflejan su vida y su contribución al arte y la cultura de El Salvador.',5,25),(36,'Cuscatlán','El Salvador','cascada_los_tercios','https://maps.app.goo.gl/jJc12hcgv32KFFbD7','El lugar es ideal para quienes disfrutan del senderismo y el ecoturismo, ya que se encuentra rodeado de vegetación. La caminata hacia la cascada es relativamente fácil y no requiere equipo especializado, lo que lo hace accesible para la mayoría de los visitantes.',5,25),(37,'Cuscatlán','El Salvador','centro_arte_para_la_paz','https://maps.app.goo.gl/1AaPdyH9zSgR8hg2A','es un espacio cultural que se centra en la promoción del arte y la paz. Este centro tiene como objetivo fomentar la creatividad y el desarrollo personal a través de diversas actividades artísticas, talleres y eventos culturales.',5,25);
/*!40000 ALTER TABLE `place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place_category`
--

DROP TABLE IF EXISTS `place_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place_category`
--

LOCK TABLES `place_category` WRITE;
/*!40000 ALTER TABLE `place_category` DISABLE KEYS */;
INSERT INTO `place_category` VALUES (1,'playa'),(2,'montaña'),(3,'parque'),(4,'museo'),(5,'plaza'),(6,'historia nacional'),(7,'senderismo'),(8,'emprendimiento nacional');
/*!40000 ALTER TABLE `place_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place_category_assignment`
--

DROP TABLE IF EXISTS `place_category_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place_category_assignment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `place_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `place_id` (`place_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `place_category_assignment_ibfk_1` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`),
  CONSTRAINT `place_category_assignment_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `place_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place_category_assignment`
--

LOCK TABLES `place_category_assignment` WRITE;
/*!40000 ALTER TABLE `place_category_assignment` DISABLE KEYS */;
INSERT INTO `place_category_assignment` VALUES (1,1,2),(2,2,2),(3,3,3),(4,4,3),(5,5,2),(6,6,2),(7,7,7),(8,8,3),(9,9,2),(10,10,2),(11,11,3),(12,12,6),(13,13,6),(14,14,3),(15,15,3),(16,16,7),(17,17,2),(18,18,4),(19,19,4),(20,20,5),(21,21,3),(22,22,1),(23,23,2),(24,24,1),(25,25,7),(26,26,1),(27,27,1),(28,28,1),(29,29,7),(30,30,1),(31,31,4),(32,32,3),(33,33,2),(34,34,7),(35,35,4),(36,36,2),(37,37,6);
/*!40000 ALTER TABLE `place_category_assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place_details`
--

DROP TABLE IF EXISTS `place_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `place_id` int NOT NULL,
  `direction` text NOT NULL,
  `best_time` text NOT NULL,
  `where_to_stay` text NOT NULL,
  `where_to_eat` text NOT NULL,
  `safety_tips` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `place_id` (`place_id`),
  CONSTRAINT `place_details_ibfk_1` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place_details`
--

LOCK TABLES `place_details` WRITE;
/*!40000 ALTER TABLE `place_details` DISABLE KEYS */;
INSERT INTO `place_details` VALUES (1,1,'Desde la terminal de Oriente en San Salvador, toma la ruta 119 hacia San Ignacio, luego toma la ruta 509 hasta el cantón Río Chiquito. Desde allí, camina 5 kilómetros o contrata un pick-up que cuesta entre $25 y $30 para llegar al Cerro El Pital.','diciembre - marzo.','Hotel entre Pinos, Nanda Parbat Hostal, Hotel de Montaña El Pital Highland.','La Cafetera, Baleadas Casa Lindo, La Placita Restaurant.','Antes de emprender una ruta de senderismo, debe informarse sobre las condiciones climáticas y el estado de los senderos, Notificar a alguien sobre el recorrido, evitar caminar solo y mantenerse en grupo, respetar la flora y la fauna y seguir las indicaciones de los guías locales.'),(2,2,'Toma la ruta 119 en la terminal de oriente en San Salvador hacia San Ignacio, dirígete a la terminal de buses a Las Pilas y, si tomas el bus a Las Pilas, bájate en la parada del cantón Río Chiquito y camina hasta tu destino.','diciembre - marzo.','Hostal Miramundo, El Pital Highland, La Posada del Cielo, Hacienda Los Dos Sauces.','La Placita Restaurant, Villa Café, Restaurante Rancho Escondido.','Se recomienda hacer una planificación adecuada, contar con un equipo y la vestimenta adecuada, evitar dañar la flora y la fauna, considerar las condiciones climáticas y seguir las indicaciones de los guías locales.'),(3,3,'Desde San Salvador, toma la autopista a Santa Ana, sigue las señales hacia Chalatenango, y al llegar, toma la carretera señalizada hacia el embalse. Continúa siguiendo las indicaciones hasta llegar al Embalse Cerrón Grande.','septiembre - abril.','Casa 1800 Suchitoto, Los Almendros de San Lorenzo, Hostal Koltín Suchitoto, Casa Hotel Santa Lucía.','Casa 1800 Suchitoto, Restaurante el Zope, Brutto - El Salvador.','Respetar la flora y fauna del lugar, no contaminar el lago y seguir las indicaciones de los guías locales.'),(4,4,'Desde el Boulevard Arturo Castellanos, toma el Boulevard Venezuela hacia la Alameda Manuel Enrique Araujo. Luego, conduce por la carretera Troncal del Norte hasta Chalatenango. Finalmente, toma la carretera 3E hasta llegar a la Calle San Martín.','Durante todo el año.','Hotel Jardín De Las Marias, The Mayan Grouper, El Tejado.','Vidamia Restaurante y Café, Peñaflor Restaurante, Olan Café.','Infórmate sobre el área, visita durante el día, conoce los servicios de emergencia.'),(5,5,'Toma la ruta de buses 119 desde la terminal de Oriente en San Salvador. Esta ruta va hasta la Frontera El Poy en Citalá y pasa por los municipios de La Palma y San Ignacio.','noviembre - abril.','Hostal Posada Real, Entre Pinos Hotel, Hotel La Palma.','Olan Café, Villa Café.','Visitar durante el día, Conoce los servicios de emergencia, cuida las estructuras.'),(6,6,'Si viajas en automóvil, dirígete al kilómetro 87.5 de la Carretera Troncal del Norte en San Ignacio. Si viajas en autobús, toma la ruta 119 desde la Terminal de Oriente en San Salvador, el hotel está unos kilómetros después de La Palma. Pide al personal que te indique donde bajar.','Durante todo el año.','Hotel Entre Pinos, La Posada de Suchitlan, EL Pital Ecolodge','La Placita Restaurant, La Cafeta, Olan Café.','Ten precaución al salir, Comunica tus planes, usa el transporte recomendado.'),(7,7,'Debes tomar la ruta de buses 119 por la terminal de oriente en San Salvador, al llegar a San Ignacio debes bajar en el punto de buses de la ruta 509A, luego toma la ruta 509A que conduce a cantón Las Pilas. Al llegar busca quien te indique claramente que lugares existen para poder visitar el rió Sumpul.','Durante todo el año.','La Posada de Suchitlán, Hostal Taíces de Mi Pueblo, Hotel y Restaurante LOS AMIGOS.','Hotel y Restaurante LOS AMIGOS, Turicentro Rio Sumpul, Rancho Bambú.','Investiga las condiciones del río, usa equipo adecuado para actividades acuáticas, Mantente alejado de las orillas resbaladizas y lleva un botiquín de primeros auxilios.'),(8,8,'Toma la ruta 125 desde la Terminal de Oriente en San Salvador. Al llegar a Chalatenango, puedes tomar un taxi que cobra $1 por persona o caminar de 10 a 20 minutos hasta el lugar.','Durante todo el año.','Hotel y Restaurante LOS AMIGOS, La Posada de Suchitlán, Hotel y Restaurante El Tejado.','Hotel y Restaurante LOS AMIGOS, Hotel y Restaurante El Tejado.','Informate sobre el lugar, sus horarios y actividades, ten un uso adecuado de las atracciones.'),(9,9,'Toma la ruta de buses 119 desde la Terminal de Oriente en San Salvador. Esta ruta llega a la Frontera El Poy en Citalá y pasa por los municipios de La Palma y San Ignacio.','diciembre - abril.','Hotel La Palma, Hostal Posada Real, Entre Pinos Hotel.','La Placita Restaurant, Olan Café, Rocios Ice Cream.','Investiga el lugar, evita zonas peligrosas, informate sobre horarios y actividades.'),(10,10,'Toma la ruta de buses 119 desde la Terminal de Oriente en San Salvador. Esta ruta llega a la Frontera El Poy en Citalá y pasa por los municipios de La Palma y San Ignacio.','Durante todo el año.','Entre Pinos Hotel, Las Tilapias Hotel y Restaurante, Cabañas El Pital.','Las Tilapias Hotel y Restaurante, Restaurante Rancho Escondido, Romeros Cocina y Cafe.','Informate del lugar, respeta la flora y la fauna, ten un equipo y vestuario adecuados para caminatas, montañismo entre otras actividades.'),(11,11,'Toma la ruta de buses 119 desde la Terminal de Oriente en San Salvador; esta ruta va a la Frontera El Poy en Citalá y pasa por La Palma y San Ignacio. Si viajas en automóvil, toma la carretera a Santa Ana hacia Chalatenango y sigue las indicaciones hasta el parque acuático.','Durante todo el año.','Hotel y Restaurante LOS AMIGOS, Las Terrazas del Alto, La Posada de Suchitlán.','Hotel y Restaurante LOS AMIGOS, Restaurante El Paraíso, Hostal y Restaurante Paraíso de la montaña.','Supervisa a los menores, uso adecuado de las atracciones, respeta las señales de seguridad.'),(12,12,'Toma la ruta de buses 29 desde la terminal de oriente, punto de bajada Parque San Jose o mercado Excuartel. Si viajas en automóvil, ve por Blvr. del Ejercito Nacional y Blvr. Arturo Castellanos/Blvr. Venezuela hasta tu destino.','Durante todo el año','La Zona Hostel, Hotel All Days Inn & Out','Delikat, La Doña Steakhouse','Informate sobre los horarios y actividades, respeta las reglas si visitas lugares de historia nacional.'),(13,13,'Desde la Terminal de Oriente, toma un bus hacia el centro de San Salvador (como la Ruta 29 o 41-A), luego transborda a la Ruta 30-B que te llevará directamente al Monumento al Salvador del Mundo.','noviembre - febrero','Barceló San Salvador, Intercontinental San Salvador','Pizza Hut - RBD Salvador del Mundo, Restaurante La Casona','Mantener objetos de valor en resguardo y evitar el tráfico los fines de semana'),(14,14,'Desde la Terminal de Oriente, toma un bus hacia el centro de San Salvador (como la Ruta 29 o 41-A), luego transborda a la Ruta 12 o 17 que te llevará cerca del Parque Saburo Hirao.','noviembre - abril','Hotel Abrego, Hostal Doña Marta','La Estancia, IzalcoMex','Respetar las zonas arqueológicas, tener precaución con las atracciones del parque'),(15,15,'Consta de dos entradas, una ubicada sobre la avenida Jerusalén, y otra entrada vehicular en final calle La Mascota. Para llegar puede abordar la ruta 101-D que le deja a escasos metros del parque.','enero - noviembre','Hotel Vía Porto, Kaleo Hotel Boutique','Al Pomodoro, Hacienda Real','Seguir las medidad de seguridad para ciclistas y siempre vigilar a los niños para evitar accidentes.'),(16,16,'Para ir desde San Salvador puedes tomar la Ruta 15 en el Parque Infantil o en el Bulevar del Ejército.','Durante todo el año','Hotel Familiar Apulo Ilopango, Las Tres Piedras','Restaurante Ericka R.R., Restaurante Brisas Del Lago','Llevar sombrero y protección solar, no alejarse demasiado de las áreas turísticas.'),(17,17,'Desde la Terminal de Oriente, toma un bus hacia el centro de San Salvador (como la Ruta 29 o 41-A), luego transborda a la Ruta 12 que te llevará hasta Los Planes de Renderos, desde donde puedes caminar o tomar un transporte local hasta la Puerta del Diablo.','diciembre - febrero','Hyatt Centric San Salvador , Hotel Mirador Plaza','IKATÚ Café, Los Boomwalos','Usar calzado antideslizante/deportivo y ropa abrigada.'),(18,18,'Desde el centro de San Salvador, toma la Ruta 52 o 42-A que te llevará directamente cerca del Museo MARTE, ubicado en la Colonia San Benito.','Todo el año','Hotel Sheraton Presidente, Cardedeu Suites','The Green House, Delikat','Visitar durante el día y en grupos.'),(19,19,'Desde el centro de San Salvador, toma la Ruta 29 o 55 que te llevará directamente al Museo del Ferrocarril, ubicado en la Avenida Peralta.','Todo el año','Hostal Casa 1717, Lorenzo Hotel','Restaurante Conchas El Bosque, Restaurante Sabita','Informate sobre horarios y grupos, no está permitido fumar, ingresar alimentos y bebidad en el interior del museo.'),(20,20,'Desde el centro de San Salvador, toma la Ruta 30-B o 52 que te llevará cerca de Plaza Futura, ubicada en la Colonia Escalón.','Todo el año','Hilton San Salvador, Hotel Mirador Plaza','Típicos Margoth, Restaurante Los Ranchos','Mantener nuestras pertenencias seguras, Evitar afluencias de personas.'),(21,21,'Desde el centro de San Salvador, toma la Ruta 12 que te llevará directamente al Parque Balboa, ubicado en Los Planes de Renderos.','mayo - octubre','Hotel Boutique Amatechan, Hotel Vieja Europa','Pupusódromo Parque Balboa, Frida Cocina Mexicana','Informate sobre horarios y actividades, llevar ropa abrigada.'),(22,22,'Desde San Salvador, toma la carretera al puerto de La Libertad, luego el bypass Camino a Surf City, y sigue al occidente por la carretera Litoral, hasta el kilómetro 43. Un arco de madera indica que has llegado a una de las capitales mundiales del surf.','Durante todo el año','Hotel Mirasuft & waves','Rock & Roe Fish Shop','visitar durante la mañana ya que la marea no es muy turbulenta, nadar en áreas seguras, hidrátate y usa bloqueador y respetar el medio ambiente.'),(23,23,'Desde la carretera Panamericana desde San Salvador en dirección a Santa Tecla. Luego, sigue las señales hacia el Volcán de San Salvador. Continúa por la Calle al Boquerón, que te llevará hasta la entrada del parque, ubicado en la cima del volcán. El trayecto dura aproximadamente 30-40 minutos desde San Salvador.','Durante todo el año','Hotel Villa Antigua','Café del Volcán','Es recomendable llegar temprano para disfrutar mejor las vistas y realizar caminatas sin prisa, llevar siempre agua para hidratarse bien.'),(24,24,'Para llegar toma la Carretera del Litoral (CA-2) desde San Salvador en dirección al Puerto de La Libertad. El trayecto es de unos 30 a 45 minutos en auto, una vez en La Libertad, sigue las señales hacia las playas principales como El Tunco o El Zonte, que forman parte de Surf City.','Durante todo el año','Hotel AST surf','Olor de Mar','Mantenerse informado, tener precaución al nadar y mantenerse hidratado y protegido del sol.'),(25,25,'se encuentra en el cantón Hacienda San Diego, Km 55, Calle a Comalapa, La Libertad, El Salvador. Para llegar, puedes tomar la carretera a Comalapa desde San Salvador, que te llevará directamente hacia el parque. La señalización es clara y hay acceso desde diferentes puntos de La Libertad.','enero - noviembre','Boca Olas Resort Villas','Café Don Pedro','Es recomendable ir desde la mañana, siempre manternse informado por cualquier percanse, hidratarse bien.'),(26,26,'Tomar la carretera  del Litoral (CA-2) desde San Salvador hacia el oeste. La playa está aproximadamente a 35 kilómetros de la capital, lo que equivale a un trayecto de unos 40 a 50 minutos en auto.','Durante todo el año','Rancho Las Brisas','Restaurante Playa del Pulpo','informase de los horarios, no alejarse de las areas ya establecidas y mantener limpia la playa.'),(27,27,'Llegar a El Zonte es fácil, desde San Salvador toma la carretera al Puerto de La Libertad, incorpórate después al bypass Camino a Surf City, y al llegar a la carretera Litoral, sigue hacia el occidente hasta el kilometro 53, donde la señalización te indicará que has arribado','Durante todo el año','Hotel Palo Verde','El Vikingo','Tener precaución al nadar, informa a alguien sobre tus planes, mantenerse hidratado y protegido del sol y mantente informado sobre cualquier cambio en la marea'),(28,28,'toma la Carretera del Litoral (CA-2) desde San Salvador. El trayecto es de aproximadamente 35 kilómetros, que se recorren en unos 40 minutos en auto. Al llegar, encontrarás un ambiente costero con acceso a diversas playas y un malecón encantador.','Durante todo el año','Hotel Los Farallones','Restaurante Acajutla','Llevar algun tipo de gorra o visera y usar bloqueador solar, utilizar transporte confiable y Mantenerse informado.'),(29,29,'Tomar la carretera CA-2 desde San Salvador hacia el oeste. Luego, dirígete hacia la carretera que conecta con el cantón de Tamique, que está aproximadamente a 30 kilómetros de distancia y puede tomarte alrededor de 45 minutos en automóvil.','Durante todo el año','Atami Escape Resort','Betos','Se sugiere contactar a la unidad de turismo al llegar al parque central de Tamanique, donde te proporcionarán un guía que te acompañará en la aventura.'),(30,30,'Tomar a Carretera del Litoral (CA-2) desde San Salvador hacia el oeste. Después de aproximadamente 40 minutos y 35 kilómetros, encontrarás señales que te guiarán hacia Playa San Blas.','Durante todo el año','Sabas Beach Resort','La Dolce Vita','Evitar zonas solitarias, vigilar las pertenencias, informarse sobre le clima y consulta  a los locales.'),(31,31,'Dirígete al Terminal de Oriente.Toma la Ruta 163, que es un autobús directo que te lleva desde San Salvador hasta Suchitoto. Esta ruta suele pasar cada 30 minutos a 1 hora. El tiempo de viaje es de aproximadamente 1.5 a 2 horas. Al llegar en la Ruta 163, puedes caminar unas pocas cuadras desde la terminal de buses hacia la Calle 15 de Septiembre, donde se encuentra el teatro.','Depende de tus preferencias climáticas y de las actividades culturales que te interesen: Temporada seca (noviembre a abril):  Es ideal si prefieres un clima más fresco y seco. Temporada de lluvias (mayo a octubre): Aunque llueve más durante estos meses, el paisaje está más verde y exuberante.En ocasiones, la lluvia es intermitente, permitiendo disfrutar del teatro y otras actividades culturales.','Hotel el tejado','El Gringo Hostel & Restaurant','Evita zonas poco iluminadas de noche: Aunque el centro es seguro, si te alejas de las áreas turísticas, es mejor moverte en grupo o en transporte confiable por la noche. Evita objetos de valor a la vista: Aunque es un lugar tranquilo, mantener tus objetos personales, como cámaras, teléfonos y billeteras, fuera de vista en zonas concurridas puede reducir cualquier riesgo.'),(32,32,'Ruta de bus: Autobús de la ruta 140 (San Salvador - Suchitoto).El bus te dejará en la terminal de autobuses de Suchitoto, que está a solo unas cuadras del Parque Central (unos 5-10 minutos caminando). Desde la terminal, solo necesitas caminar hacia el este por la Calle 15 de Septiembre, y pronto llegarás al parque. ','noviembre - abril.','Hostel Suchitoto','Café Suchitlán','Evita zonas poco iluminadas de noche: Aunque el centro es seguro, si te alejas de las áreas turísticas, es mejor moverte en grupo o en transporte confiable por la noche. Evita objetos de valor a la vista: Aunque es un lugar tranquilo, mantener tus objetos personales, como cámaras, teléfonos y billeteras, fuera de vista en zonas concurridas puede reducir cualquier riesgo.'),(33,33,'Buses hacia La Libertad: Puedes tomar un bus desde el Terminal de Buses de San Salvador hacia La Libertad. Los buses que van a La Libertad suelen estar señalizados y pueden llevarte a la zona más cercana al ecolodge. Buses de la ruta 102: Una opción popular es el bus de la ruta 102, que va directo a La Libertad.Pregunta al conductor si va hacia el área de El Tunco o Zonte, que están cerca del ecolodge.','Durante todo el año','Cabañas El Pescador','Restaurante Los Tres Cafetales','Horarios de buses: Verifica los horarios de los buses de regreso a Suchitoto para asegurarte de tener tiempo suficiente para explorar el parque. Consulta el clima: Revisa el clima antes de salir, ya que el área puede ser lluviosa durante ciertas épocas del año. Lleva agua y snacks: Asegúrate de llevar agua y algunos snacks para disfrutar durante tu visita al parque.'),(34,34,'Terminal de Buses: Dirígete a la Terminal de Buses de San Salvador (Terminal de Occidente). Buses a Suchitoto: Busca los buses que van a Suchitoto.Estos buses suelen salir con frecuencia y el viaje dura aproximadamente 1.5 a 2 horas, dependiendo del tráfico. Llegada a Suchitoto: Una vez que llegues a Suchitoto, puedes preguntar a los locales o buscar señalización para llegar al Lago Suchitlán, que está a unos 15-20 minutos a pie del centro de la ciudad.','Durante todo el año','Hotel Mirador','La Posada de Suchitlán','Vístete adecuadamente: El clima puede ser cálido, así que lleva ropa ligera y cómoda. También es útil un sombrero o gorra para protegerte del sol. Protección solar: Usa bloqueador solar y repelente de insectos, especialmente si planeas estar al aire libre durante varias horas.Cuidado en el agua: Si decides nadar o participar en actividades acuáticas, asegúrate de hacerlo en áreas seguras y designadas.Usa chalecos salvavidas si es necesario. '),(35,35,'Desde San Salvador: Toma el bus de la Ruta 129 que va desde San Salvador hacia Suchitoto','Durante todo el año','Casa 1800 Suchitoto','Los Almendros de San Lorenzo','uidado con las instalaciones: Trata la propiedad y sus exhibiciones con respeto. Es un lugar culturalmente significativo y debe ser tratado como tal. Silencio y consideración: Mantén un volumen bajo mientras te encuentras dentro de la casa para no interrumpir la experiencia de otros visitantes.'),(36,36,'Ve a la Terminal de Autobuses de San Salvador (Terminal de Occidente o Terminal de San Salvador).Toma un bus hacia Suchitoto.Varias compañías ofrecen este servicio, como Transportes Rápidos de El Salvador y Transportes Ahuachapaneco.','Durante todo el año','Hotel Los Tercios ','Restaurante El Rancho','Ropa adecuada: Usa ropa ligera y cómoda, preferiblemente de secado rápido. Un traje de baño es recomendable si planeas nadar. Calzado apropiado: Lleva calzado resistente y antideslizante, ya que el camino puede ser resbaladizo.Botas de senderismo o sandalias de trekking son buenas opciones. Hidratación: Lleva suficiente agua para mantenerte hidratado durante tu visita, especialmente si planeas hacer senderismo. Protección solar: Aplica bloqueador solar y lleva un sombrero o gorra, ya que la exposición al sol puede ser intensa. No dejes basura: Mantén la limpieza del área.Lleva tus desechos contigo y respeta la flora y fauna local. No molestar la vida silvestre: Observa a los animales y plantas, pero no los molestes ni los toques. Atención al entorno: Mantente atento a tu entorno y camina con cuidado, especialmente en áreas resbaladizas o cerca del agua. Viaja en grupo: Si es posible, visita la cascada con amigos o familiares.Esto no solo es más seguro, sino que también es más divertido. Horarios: Verifica los horarios de apertura de los restaurantes, especialmente si planeas visitarlos durante la semana. Reservas: Si planeas ir en fin de semana o en temporada alta, considera hacer una reserva, ya que algunos lugares pueden llenarse rápidamente.'),(37,37,'Dirígete a la Terminal de Occidente en San Salvador. Busca los buses que van hacia Suchitoto. Compañías como Transportes Rápidos de El Salvador y Transportes Ahuachapaneco ofrecen este servicio. El costo del pasaje suele ser entre $1.50 y $3.00 USD y el viaje dura aproximadamente 1.5 a 2 horas.','Durante todo el año','Hostel Casa Verde','La Posada de Suchitlán','Aprecia la diversidad: El Centro Arte para la Paz es un lugar que celebra la diversidad cultural. Muestra respeto por las diferentes expresiones artísticas y las tradiciones que encuentres. Reflexiona sobre el arte: Tómate un tiempo para reflexionar sobre las obras que veas.Pregúntate qué mensaje transmiten y cómo resuenan contigo. Fotografía responsable: Si deseas tomar fotos, pregunta primero si está permitido, especialmente en áreas donde se exhiben obras de arte.');
/*!40000 ALTER TABLE `place_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place_interaction`
--

DROP TABLE IF EXISTS `place_interaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place_interaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `interaction_name` varchar(75) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place_interaction`
--

LOCK TABLES `place_interaction` WRITE;
/*!40000 ALTER TABLE `place_interaction` DISABLE KEYS */;
INSERT INTO `place_interaction` VALUES (1,'visitado'),(2,'favorito');
/*!40000 ALTER TABLE `place_interaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(75) NOT NULL,
  `email` varchar(75) NOT NULL,
  `hashed_password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admintest','admin@test.com','$2a$10$5m.AO.CrM4UUBfH6YmldM.K3jJWrGM.tH2/X9afWG6PHERhUDJvc.'),(2,'Leo Miranda','mirandarodriguezleofernando@gmail.com','oauth_user'),(9,'KirbyMan','elmastrollxd34@gmail.com','oauth_user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_place_interaction`
--

DROP TABLE IF EXISTS `user_place_interaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_place_interaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `place_id` int NOT NULL,
  `added_at` date NOT NULL,
  `interaction_type_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `place_id` (`place_id`),
  KEY `interaction_type_id` (`interaction_type_id`),
  CONSTRAINT `user_place_interaction_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `user_place_interaction_ibfk_2` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`),
  CONSTRAINT `user_place_interaction_ibfk_3` FOREIGN KEY (`interaction_type_id`) REFERENCES `place_interaction` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_place_interaction`
--

LOCK TABLES `user_place_interaction` WRITE;
/*!40000 ALTER TABLE `user_place_interaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_place_interaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_rating`
--

DROP TABLE IF EXISTS `user_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_rating` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `place_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `comment` text,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `place_id` (`place_id`),
  CONSTRAINT `user_rating_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `user_rating_ibfk_2` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_rating`
--

LOCK TABLES `user_rating` WRITE;
/*!40000 ALTER TABLE `user_rating` DISABLE KEYS */;
INSERT INTO `user_rating` VALUES (1,1,1,3,NULL,'2024-10-12 23:46:14'),(2,2,1,5,NULL,'2024-10-13 00:25:53'),(3,1,2,4,NULL,'2024-10-13 12:42:35');
/*!40000 ALTER TABLE `user_rating` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-13 12:52:43
