create database books_manager;

use books_manager;

create table genero(
	id int auto_increment,
    nombre varchar(20),
    primary key(id)
);

create table autor(
	id int auto_increment,
    nombre varchar(20),
    apellido varchar(20),
    fecha_nacimiento date,
    genero int,
    primary key(id),
    foreign key(genero) references genero(id)
);

create table book(
	id int auto_increment,
    titulo varchar(100),
    descripcion text,
    fecha_lanzamiento date,
    cantidad_paginas int,
    cantidad_restantes int,
    autor int,
    genero int,
    precio double,
    imagen blob,
    path_imagen varchar(40),
    primary key(id),
    foreign key(autor) references autor(id),
    foreign key(genero) references genero(id)
);

insert into genero(nombre) values
("romance"),
("fantasia"),
("misterio"),
("drama"),
("aventura"),
("magia");

insert into autor(nombre, apellido, fecha_nacimiento, genero) values
("William", "Faulkner","1923-03-10", 1),
("Oscar", "Wilde", "1854-06-10", 4),
("Franz", "Kafka", "1833-09-11", 5),
("William", "Shakespeare", "1956-11-01", 3),
("James", "Joyce", "1986-08-12", 1),
("Philip K.", "Dick", "1871-03-11", 2),
("Gabriel", "García Márquez", "1822-11-03", 4),
("Paulo", "Coelho", "1922-11-12", 5),
("George", "Orwell", "1832-03-06", 4);

insert into book(titulo, descripcion, fecha_lanzamiento, cantidad_paginas, cantidad_restantes, autor, genero, precio, imagen, path_imagen) values
("DON QUIJOTE DE LA MANCHA", "La primera novela moderna es, para muchos analistas, también la mejor jamás escrita en cualquier lengua.", "1991-10-12", 328, 192, 4, 1, 290.00, null, null),
("LA REPÚBLICA", "Uno de los tratados filosófico-políticos más influyentes en la sociedad y el pensamiento occidentales.", "1991-10-12", 391, 919, 3, 1, 103.00, null, null),
("EL ORIGEN DE LAS ESPECIES", "La teoría de la evolución fue presentada por primera vez en este revolucionario tratado de ciencia y naturaleza.", "1923-11-03", 841, 0, 1, 4, 591.00, null, null),
("EL MANIFIESTO COMUNISTA", "Uno de esos libros que realmente cambiaron la historia, pues el siglo XX no podría entenderse sin él." , "1928-03-21", 912, 0, 4, 2, 510.00, null, null),
("LA ILÍADA", "Este poema épico está entre los trabajos escritos más antiguos de que tenemos constancia, pero aún hoy sigue influyéndonos.", "1948-06-18", 487, 10, 2, 1, 1000.00, null, null),
("MOBY DICK", "Y pensar que su autor no vivió para ver cómo se convertía en una de las novelas más reverenciadas de la historia...", "1841-11-29", 289, 591, 1, 5, 5912.00, null, null),
("HAMLET", "Hay quien puede recitar partes de su monólogo más famoso sin haberla leído o visto representada.", "1712-12-23", 893, 1200, 1, 6, 595.00, null, null),
("EL PRÍNCIPE", "Se escribió con intenciones satíricas, pero acabó pasando a la historia como un manual de instrucciones para poderosos sin escrúpulos.", "1951-04-02", 481, 590, 5, 4, 600.00, null, null),
("LAS MIL Y UNA NOCHES", "Una antología que recopila las mejores narraciones orales y cuentos de los pueblos árabes durante la Edad de Oro del Islam.", "1841-03-19", 481, 591, 8, 3, 500.00, null, null),
("LA DIVINA COMEDIA", "Es la forma más agradable y sencilla de visitar el Cielo sin moverte del sofá.", "1943-10-24", 584, 0, 7, 3, 430.00, null, null),
("DIARIO", "El horror nazi a través de los ojos de, probablemente, la adolescente más famosa que jamás vivió.", "1339-02-03", 489, 0, 6, 4, 300.00, null, null),
("LA INTERPRETACIÓN DE LOS SUEÑOS", "¿Sabes aquello que soñaste anoche? Pues verás: es posible que estés enamorado de tu madre...", "1493-11-29", 581, 0, 6, 5, 430.00, null, null),
("FAUSTO", "Todas las leyendas sobre pactos con el Demonio vienen de aquí. Una obra maestra sobre lo que nos hace humanos.", "1939-02-03", 861, 0, 4, 6, 400.00, null, null),
("PHILOSOPHAE NATURALIS PRINCIPIA MATHEMATICA", "Nada, este sólo es el lugar donde Newton propuso sus Leyes del Movimiento. Algo que, créenos, te interesa y afecta día a día.", "1943-12-29", 691, 192, 1, 1, 200.00, null, null),
("GUERRA Y PAZ", "Poca broma con este novelón de los que hacen época, pues en efecto la hizo. Un trabajo capital de la narrativa.", "1959-04-19", 915, 491, 2, 2, 210.00, null, null),
("ENEIDA", "Un personaje secundario de la Ilíada tuvo aquí una suerte de spin-off que, a la postre, sirvió como mito fundacional para la civilización romana.", "1985-11-04", 791, 051, 7, 3, 260.00, null, null),
("EL SEGUNDO SEXO", "El feminismo de segunda ola empezó con un ensayo del que aún tenemos mucho que aprender.", "1905-05-01", 952, 591, 1, 4, 230.00, null, null),
("CIEN AÑOS DE SOLEDAD", "Todo lo que necesitas saber sobre la cultura y la historia espiritual de Latinoamérica está contenido en este premio Nobel.", "1969-05-12", 961, 491, 2, 5, 210.00, null, null);

