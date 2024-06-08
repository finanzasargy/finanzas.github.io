const { createApp } = Vue



createApp({
  data() {
    return {
      corFundo: 'rgb(120,4,16)',


      top10: [
        ],



      // TODO CODIGO DE SPOTIFY ACA PARA ABAJO
      

      // playlists recentes
      playlists: [
        ],

      // TITULOS AQUI PARA FACILITAR TRADUÇÃO **
      // feito para você
      tituloParaVoce: '2023 - Sencillos',
      // tocadas recentemente
      tituloTocadaRecentemente: '2022 • Sencillos',
      // seus mixes mais ouvidos
      mixesMaisOuvidos: '🔥 TENDENCIAS', 
       // seus mixes mais ouvidos
      artistas: 'Artistas de Septiembre', 
      // seus mixes mais ouvidos
      Recomendados: '🎧 Spotify Recomienda', 
      Sigles2023: '🔥 2023 Esta prendido',
      othergeneros: '🎶 Cuarteto,Reggaeton,RKT..',
      GonzaAlbum: '🌎 ANTES DE AMERI • Album',
      MusicSessions: '🎙 Music Sessions • 2023',
      SiriusAlbum: '🤧 SEASON ENFERMO • Album',
      Top: 'Últimos Singles',
      QEtitle: '🔱 LEGENDS • Album',
      Top10Songs: '🎶 TOP 6 STREAMS "2023" (23/9)',
      singles2024title: 'Ultimos Singles - 2024',


      // playlists de exemplo
      QELEGENDS: [
        {
          id: 1,
          nome: '2018',
          img: 'https://i.scdn.co/image/ab67616d00001e02ca201af365442464f0a0869d',
          subtitulo: 'Quinto Escalon •',
          dailyStreams: 2023461965,
          details: '20 de Agosto 2023',
          production: 'Quinto Escalon',
          inter: 'Darko, Midel, Gunnerk, Kid Mess & Suro',
          fecha: '20/09/23',
        },
        {
          id: 2,
          nome: 'DMC vs The Witcher',
          img: 'https://i.scdn.co/image/ab67616d00001e02ca201af365442464f0a0869d',
          subtitulo: 'Quinto Escalon •',
          dailyStreams: 856964921,
          details: '25 de Octubre 2023',
          production: 'Quinto Escalon',
          inter: 'Midel & Darko',
          fecha: '25/10/23',
        },
        {
          id: 3,
          nome: 'JEFF THE KILLER',
          img: 'https://i.scdn.co/image/ab67616d00001e02ca201af365442464f0a0869d',
          subtitulo: 'Quinto Escalon •',
          dailyStreams: 1000534967,
          details: '5 de Noviembre 2023',
          production: 'Quinto Escalon',
          inter: 'Suro',
          fecha: '05/11/05',
        },
        {
          id: 3,
          nome: 'Jeff The Killer vs Slenderman',
          img: 'https://i.scdn.co/image/ab67616d00001e02ca201af365442464f0a0869d',
          subtitulo: 'Quinto Escalon •',
          dailyStreams: 659124635,
          details: '5 de Noviembre 2023',
          production: 'Quinto Escalon',
          inter: 'Suro & Gunnerk',
          fecha: '05/11/23',
        },
        {
          id: 3,
          nome: 'Me lo he ganado',
          img: 'https://i.scdn.co/image/ab67616d00001e02ca201af365442464f0a0869d',
          subtitulo: 'Quinto Escalon •',
          dailyStreams: 659124635,
          details: '5 de Noviembre 2023',
          production: 'Quinto Escalon',
          inter: 'John C',
          
          fecha: '05/11/23',
        },
        {
          id: 3,
          nome: 'GTA V RAP',
          img: 'https://i.scdn.co/image/ab67616d00001e02ca201af365442464f0a0869d',
          subtitulo: 'Quinto Escalon •',
          dailyStreams: 768964256,
          details: '5 de Noviembre 2023',
          production: 'Quinto Escalon',
          inter: 'John C, Midel, Darko & Suro',
          fecha: '05/11/23',
        },
        {
          id: 3,
          nome: 'CALL OF DUTY GHOST',
          img: 'https://i.scdn.co/image/ab67616d00001e02ca201af365442464f0a0869d',
          subtitulo: 'Quinto Escalon •',
          dailyStreams: 1043967826,
          details: '5 de Noviembre 2023',
          production: 'Quinto Escalon, Zecca, ODRJD',
          inter: 'GONZA & Kid Mess',
          
          fecha: '05/11/23',
        },
        {
          id: 3,
          nome: 'MI VENGANZA',
          img: 'https://i.scdn.co/image/ab67616d00001e02ca201af365442464f0a0869d',
          subtitulo: 'Quinto Escalon •',
          dailyStreams: 2103634965,
          details: '5 de Noviembre 2023',
          production: 'Quinto Escalon',
          inter: 'Lvrk',
          
          fecha: '05/11/23',
        },
        {
          id: 3,
          nome: 'GONZA vs LVRK',
          img: 'https://i.scdn.co/image/ab67616d00001e02ca201af365442464f0a0869d',
          subtitulo: 'Quinto Escalon •',
          dailyStreams: 2465964723,
          details: '5 de Noviembre 2023',
          production: 'Quinto Escalon',
          inter: 'Gonza & Lvrk',
          fecha: '05/11/23',
        },
      ],
      totalDailyStreams: 0,

      lista2024: [
        {
          id: 53,
          nome: 'La Lune',
          img: 'https://i.scdn.co/image/ab6761610000e5eb92385a7b5b3657ff10b0bb84',
          subtitulo: 'Yesan 雪山 • ',
          inter: 'Yesan',
          details: '26 de Diciembre 2024',
          production: 'Yesan',
          dailyStreams: 536048019,
          fecha: '26/12/24',
        },
        
      ],


      
      playlistPadrao: [
        {
          id: 53,
          nome: 'BIKEE',
          img: 'https://i1.sndcdn.com/artworks-m0XtmjkN4pGzzc2Q-E2ZQ4w-t500x500.jpg',
          subtitulo: 'SGustinProd • ',
          inter: 'N/A',
          details: '29 de Diciembre 2023',
          production: 'SGustinProd',
          dailyStreams: 536048019,
          fecha: '29/12/23',
        },
        {
          id: 53,
          nome: 'Call Me Maybe',
          img: 'https://i.scdn.co/image/ab67616d0000b2737e73b2aae4ae0085a1f7d825',
          subtitulo: 'GONZA • ',
          inter: 'Gonza',
          details: '03 de Diciembre 2023',
          production: 'Zecca',
          dailyStreams: 536048019,
          fecha: '03/12/23',
        },
        {
          id: 51,
          nome: 'Cumbia Cheta',
          img: 'https://i.scdn.co/image/ab67616d0000b2734bd50061beed976b11add40e',
          subtitulo: 'Rombai & Cami • ',
          inter: 'Rombai & Cami',
          details: '01 de Diciembre 2023',
          production: 'ROMBAI',
          dailyStreams: 826413630,
          fecha: '2/12/23'
        },
        {
          id: 52,
          nome: 'goosebumps',
          img: 'https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce',
          subtitulo: 'Travis Scott • ',
          inter: 'Jacques Webster, Kendrick duckworth, Ronald LaTour, Daveon Jackson, Tim Gomringer, Kevin Gomringer, Brock Korsan',
          details: '13 de Diciembre 2023',
          production: 'Cardo, Cubeatz, YeX',
          dailyStreams: 764123649,
          fecha: '13/12/23',
        },
        {
          id: 50,
          nome: 'MOJAA',
          img: 'https://i1.sndcdn.com/artworks-000652171405-in8s6x-t500x500.jpg',
          subtitulo: 'Sirius & Lvrk • ',
          inter: 'Sirius & Lvrk',
          details: '16 de Noviembre 2023',
          production: 'zeekay',
          dailyStreams: 2013643967,
          fecha: '16/11/23',
        },
        {
          id: 50,
          nome: 'Hijo de la Noche',
          img: 'https://i.scdn.co/image/ab67616d0000b27360a385a07d66f74cbb744028',
          subtitulo: 'Orkuy, Sirius & Lvrk • ',
          inter: 'Orkuy, Sirius & Lvrk',
          details: '14 de Noviembre 2023',
          
          production: 'ZECCA',
          dailyStreams: 933974983,
          fecha: '14/11/23',
        },
        {
          id: 47,
          nome: 'Music Sessions #21 - Milo j',
          img: 'https://i.scdn.co/image/ab67616d0000b273055cea306ade28a459e948b4',
          subtitulo: 'SGustinProd & Milo j • ',
          inter: 'Milo j',
          details: '12 de Noviembre 2023',
          production: 'SGustinProd',
          
          dailyStreams: 1002974792,
          fecha: '12/11/23',
        },
        {
          id: 46,
          nome: 'en dormir sin madrid',
          img: 'https://i.scdn.co/image/ab67616d0000b27344fa31a89a1e549f74908a81',
          subtitulo: 'SGustinProd & Milo j • ',
          inter: 'Milo j & SGustinProd',
          details: '12 de Noviembre 2023',
          production: 'SGustinProd',
          
          dailyStreams: 503012846,
          fecha: '12/11/23',
        },
        {
          id: 45,
          nome: 'COLOMBIANA',
          img: 'https://i.scdn.co/image/ab67616d00001e02d47ab9652d2d2068e2cc3bff',
          subtitulo: 'Midel, Darko, Kid Mess & Sirius • ',
          inter: 'Midel, Darko, Kid Mess & Sirius',
          details: '6 de Noviembre 2023',
          production: 'Neuen',
          dailyStreams: 1053634965,
          fecha: '06/11/23',
        },
        {
          id: 45,
          nome: 'BARCOS Y PUTAS',
          img: 'https://i1.sndcdn.com/artworks-000099529150-wthaan-t500x500.jpg',
          subtitulo: 'Saigo, Midel & Korean Kid • ',
          inter: 'Korean Kid, Midel',
          details: '23 de Septiembre 2023',
          production: 'Saigo',
          dailyStreams: 956124032,
          fecha: '23/09/23',
        },
        {
          id: 44,
          nome: 'NOTA ESPACIAL (FT. Sirius)',
          img: 'https://images.genius.com/a64d8867958cc7704ff8132bc81ba0e4.800x800x1.png',
          subtitulo: 'Zeekay • ',
          inter: 'Sirius, Zeekay, CLUB HATS',
          details: '23 de Septiembre 2023',
          production: 'Zeekay, CLUB HATS',
          dailyStreams: 1685964261,
        },
         {
          id: 44,
          nome: 'TROYA',
          img: 'https://i.scdn.co/image/ab67616d0000b273129347802e305dd44a0a41d6',
          subtitulo: 'GONZA • ',
          inter: 'Gonza, ZECCA',
          details: '21 de Septiembre 2023',
          production: 'ZECCA',
          dailyStreams: 1789562964,
        },
        {
          id: 43,
          nome: 'Hasta que lo pierdes (FT. Sirius)',
          img: 'https://i.scdn.co/image/ab67616d0000b2736cfdabcc96069f56218fe126',
          subtitulo: 'Gunnerk • ',
          inter: 'Gunnerk, Sirius',
          details: '20 de Septiembre 2023',
          production: 'Zeekay, Gunnerk, Sirius, 3AM',
          dailyStreams: 1001351526,
        },
        {
          id: 42,
          nome: 'Rptm',
          img: 'https://i.scdn.co/image/ab67616d0000b273f4bf849a44d2a3450abb152c',
          subtitulo: 'Kaktov • ',
          inter: 'Kaktov',
          details: '19 de Agosto 2023',
          production: 'Kaktov',
          dailyStreams: 801356964,
        },
        {
          id: 41,
          nome: 'HELLO COTTO',
          img: 'https://i.scdn.co/image/ab67616d0000b273a3eb9e8c8f24ef8f748a2c46',
          subtitulo: 'Sirius • ',
          inter: 'Sirius',
          details: '16 de Septiembre 2023',
          production: 'Zeekay & Sirius',
          dailyStreams: 2056964965,
        },
        {
          id: 40,
          nome: 'Pa Siempre',
          img: 'https://images.genius.com/7125e730e81712b55ee2d9eea7fc8800.1000x1000x1.png',
          subtitulo: 'Orkuy • ',
          details: '15 de Agosto 2023',
          production: 'Orkuy',
          dailyStreams: 1000123568,
        },
        {
          id: 39,
          nome: 'TU DUO FAVORITO',
          img: 'https://i.scdn.co/image/ab67616d0000b2733aa8aa53acd1d6b9e2582daf',
          subtitulo: 'Lvrk & Kify • ALBUM',
          inter: 'Lvrk, Kify, Gonza, Sirius, Korean Kid, Gunnerk & Midel',
          details: '09 de Agosto 2023',
          production: 'ASAN, D.A Goat, THAT DOPE, orodembow, oniria, Yesan, Baxian, KOKI',
          dailyStreams: 2012634965,
        },
        {
          id: 38,
          nome: 'GTA.mp3',
          img: 'https://i.scdn.co/image/ab67616d0000b273995e0ff3196c47b863fa259c',
          subtitulo: 'Emilia Mernes - ',
          inter: 'Emilia Mernes',
          details: '08 de Agosto 2023',
          production: 'Zecca',
          dailyStreams: 991203635,
        },
        {
          id: 37,
          nome: 'Fuc Boi',
          img: 'https://i.scdn.co/image/ab67616d0000b273d9f243d4c1a0b12b49286951',
          subtitulo: 'Midel - ',
          dailyStreams: 765301964,
        },
        {
          id: 36,
          nome: 'MI CIUDAD (Feat.Korean Kid)',
          img: 'https://i.scdn.co/image/ab67616d0000b273e3c104df485c04489dd6202f',
          subtitulo: 'LVRK,Kify - ',
          dailyStreams: 902436965,
        },
        {
          id: 35,
          nome: 'Sin Preguntar',
          img: 'https://i.scdn.co/image/ab67616d0000b2733c23603b992198d8c820c0a6',
          inter: 'Darko',
          details: '02 de Septiembre 2023',
          production: 'Darko & ODRJR',
          subtitulo: 'Darko, ODRJR - ',
          dailyStreams: 895623964,
        },
        {
          id: 34,
          nome: 'bien x vos (Feat. Suro)',
          img: 'https://i.scdn.co/image/ab67616d0000b273b1b4120562d5f153a8a0aecf',
          subtitulo: 'Kify, Suro - ',
          dailyStreams: 352102635,
        },
        {
          id: 33,
          nome: 'Del estudio al Estadio',
          img: 'https://i.scdn.co/image/ab67616d0000b273e9666873bff11b9f9b8beb3e',
          subtitulo: 'Gunnerk, GONZA - ',
          inter: 'Gunnerk, Gonza',
          details: '30 de Septiembre 2023',
          production: 'Gunnerk, prod800',
          dailyStreams: 1000013965,
        },
        {
          id: 32,
          nome: 'Lisa',
          img: 'https://i.scdn.co/image/ab67616d0000b2731fcf8dc413896f0fb5749141',
          inter: 'SaraMalaCara',
          details: '27 de Septiembre 2023',
          production: 'Yesan, Asan',
          subtitulo: 'Saramalacara - ',
          dailyStreams: 1000002020
        },
        {
          id: 31,
          nome: 'PITY (Feat. SIRIUS)',
          img: 'https://i.scdn.co/image/ab67616d00001e0266668c75f2f144ed25ec55b5',
          Profile: 'https://i.redd.it/a4k7yter2a741.jpg',
          inter: 'SIRIUS',
          details: '21 de Septiembre 2023',
          production: 'SGustinProd',
          subtitulo: 'SGustinProd - ',
          dailyStreams: 2805965964
        },
        {
          id: 30,
          nome: 'Vuelta A La Luna',
          img: 'https://i.scdn.co/image/ab67616d0000b27382d57f537077aaabbc639686',
          Profile: "https://music.youtube.com",
          inter: 'Lvrk, Orkuy, Sirius',
          details: '19 de Septiembre 2023',
          production: 'NEUEN, Zecca, Yesan',
          subtitulo: 'Lvrk,Orkuy & Sirius - ',
          dailyStreams: 1201204630
        },
        {
          id: 29,
          nome: 'Rincón',
          img: 'https://images.genius.com/08ca5667dee5e9decccf1f22fc4f12ae.1000x1000x1.jpg',
          subtitulo: 'Milo J - ',
          dailyStreams: 801236964, // Agregar una propiedad para el número de streams diarios
        },
        {
          id: 28,
          nome: 'ROCKSTAR',
          img: 'https://i.scdn.co/image/ab67616d0000b2732f405d5d63a07b98ced1521a',
          inter: 'SIRIUS',
          details: '13 de Septiembre 2023',
          production: 'Sirius',
          subtitulo: 'Sirius - ',
          dailyStreams: 2102365715, // Agregar una propiedad para el número de streams diarios
        },
        {
          id: 27,
          nome: 'X ESO BB (FT. Saramalacara)',
          img: 'https://i.scdn.co/image/ab67616d0000b273cc97a24971109c26d151779b',
          Profile: "https://i.redd.it/a4k7yter2a741.jpg",
          subtitulo: 'Jere Klein - ',
          dailyStreams: 250631965, // Agregar una propiedad para el número de streams diarios
        },
        {
          id: 26,
          nome: 'YO SOY EL RMX (FT. GONZA)',
          img: 'https://i.scdn.co/image/ab67616d0000b273804a2b5659770a15650c7435',
          subtitulo: 'Kaleb Di Masi - ',
          dailyStreams: 935634965, // Agregar una propiedad para el número de streams diarios
        },
        {
          id: 25,
          nome: 'S.I.C.K SEASON',
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
          inter: 'Sirius, Tados, GONZA, Milo J',
          details: '6 de Agosto 2023',
          production: 'Sirius, SGustinProd & Yesan',
          subtitulo: 'Sirius • ALBUM - ',
          dailyStreams: 1103956964,
        },
        {
          id: 24,
          nome: 'Aerobico',
          img: 'https://i.scdn.co/image/ab67616d0000b27362c5bc46ba222ef5bb797257',
          subtitulo: 'Kify,Gonza,Milo J, Midel - ',
          dailyStreams: 932653960
        },
        {
          id: 23,
          nome: "TRAP N' EXPORT",
          img: 'https://i.scdn.co/image/ab67616d0000b2735b37cf5c9c199e48fe7d56e1',
          subtitulo: 'Sirius,Orkuy,LVRK  - ',
          dailyStreams: 1057965964
        },
        {
          id: 16,
          nome: 'ANTES DE AMERI',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'GONZA • ALBUM - ',
          inter: 'GONZA, Darko, Midel, Orkuy, Young Craka, Gunnerk, Low Life, Sirius, Kify, Lvrk',
          details: '23 de Julio 2023',
          production: 'Yesan, Asan, Zecca & SGustinProd',
          dailyStreams: 1925634902
        },
         {
          id: 15,
          nome: 'ECLIPSE',
          img: 'https://images.genius.com/d1d610c3d1099e6916ac2824cb948222.1000x1000x1.png',
          subtitulo: 'KifyKify - ',
          dailyStreams: 656964965
        },
        {
          id: 16,
          nome: 'ROCKSTAR 2.0 (Feat. Midel)',
          img: 'https://images.genius.com/6325620c2b0ea8ef7d3c65582feba0bd.1000x1000x1.png',
          subtitulo: 'GONZA - ',
          dailyStreams: 802696964
        },
        {
          id: 14,
          nome: 'BOOTY',
          img: 'https://i1.sndcdn.com/artworks-h5p1faCwKycmMx8c-dhYygA-t500x500.jpg',
          subtitulo: 'Sirius - ',
          dailyStreams: 683569012
        },
        {
          id: 13,
          nome: 'PARA AMARTE A TI (FT. Gunnerk)',
          img: 'https://images.genius.com/758e6d390ae8d649fa47a11a6f1658a3.1000x1000x1.png',
          subtitulo: 'KifyKify - ',
          dailyStreams: 721635964
        },
        {
          id: 11,
          nome: 'Music Sessions #20 (FT. SaraMalaCara)',
          img: 'https://i.scdn.co/image/ab67616d0000b27348b74b66dab23f60aa6ff3af',
          inter: 'SaraMalaCara',
          details: '12 de Junio 2023',
          production: 'SGustinProd',
          subtitulo: 'SGustinProd - ',
          dailyStreams: 1078653964
        },
        {
          id: 10,
          nome: 'NO voy a llorar :,)',
          img: 'https://i.scdn.co/image/ab67616d0000b273ac4340d7908d2f4f7c6f7e1a',
          subtitulo: 'SaraMalaCara - ',
          dailyStreams: 801305696
        },
        {
          id: 9,
          nome: 'LOS DEL ESPACIO',
          img: 'https://i.scdn.co/image/ab67616d0000b27352c8b9dffa4fcdb36e30eea2',
          subtitulo: 'Orkuy - ',
          dailyStreams: 901605964
        },
        {
          id: 1,
          nome: 'aPoLLo13',
          img: 'https://images.genius.com/5d801b366c6a2c34c3e1f68c87a23963.1000x1000x1.png',
          subtitulo: 'Gonza - ',
          dailyStreams: 953634965
        },
        {
          id: 2,
          nome: 'No Estoy (FT. Akim88, After Party)',
          img: 'https://images.genius.com/fe6cc45285e8e3cbb6078abb8ef2206c.1000x1000x1.jpg',
          subtitulo: 'Milo J - ',
          dailyStreams: 526964952
        },
        {
          id: 3,
          nome: 'DISPARA *** (FT. Sirius)',
          img: 'https://images.genius.com/31f17c61b5daf00129063896a79cb6b0.1000x1000x1.png',
          subtitulo: 'SaraMalaCara  - ',
          dailyStreams: 701230987
        },
        {
          id: 4,
          nome: 'BUTAKERA (FT. Saramalacara)',
          img: 'https://images.genius.com/ddb6b664a8b9215464b9edda5dcfb7de.1000x1000x1.jpg',
          subtitulo: 'Lvrk - ',
          dailyStreams: 502000000
        },
        {
          id: 5,
          nome: 'MI LOCURA EN BUENOS AIRES',
          img: 'https://images.genius.com/620de172cbdaa10dd2716d03f54eaa03.1000x1000x1.jpg',
          subtitulo: 'Sirius - ',
          dailyStreams: 392350634
        },
        {
          id: 6,
          nome: 'hARAkiRi (FT. Orkuy)',
          img: 'https://i.scdn.co/image/ab67616d00001e027eb80f8193b2d744df5058c0',
          subtitulo: 'GONZA - ',
          dailyStreams: 825015692
        },
        {
          id: 7,
          nome: 'SISMO',
          img: 'https://seeded-session-images.scdn.co/v1/img/artist/2qWK8K2Jfh67UqtwY8tCW6/de',
          subtitulo: 'Lvrk - SISMO ALBUM.',
          dailyStreams: 1094893093
        },
        {
          id: 8,
          nome: '+ SINCERO (FT. Orkuy)',
          img: 'https://images.genius.com/56090052d3c50dce159c1dc91637e19b.300x300x1.jpg',
          subtitulo: 'Sirius - ',
          dailyStreams: 903563964
        },
        {
          id: 10,
          nome: 'Tu Despedida',
          img: 'https://images.genius.com/09014f16b32f754708c228e9a0f864c6.1000x1000x1.jpg',
          subtitulo: 'Tados - ',
          dailyStreams: 7013965
        },
      ],

            

      albumes: [
        {
          id: 1,
          nome: 'LVRK Album',
          img: 'https://images.genius.com/5d801b366c6a2c34c3e1f68c87a23963.1000x1000x1.png',
          new: '#3 Tendencias ',
          subtitulo: 'Gonza - 19.4M Streams'
        },
      ],
        
       playlist2022sencillos: [
        {
          id: 1,
          nome: 'BOTTAS (FT. Gonza,SGustinProd)',
          img: 'https://i.scdn.co/image/ab67616d0000b27330326b23e30ae93d4d48165b',
          subtitulo: 'Gunnerk - 16M Streams'
        },
        {
          id: 2,
          nome: 'Music Sessions #18 (FT. GONZA)',
          img: 'https://i1.sndcdn.com/artworks-rSH8DhUNVbek-0-t500x500.jpg',
          subtitulo: 'SGustinProd - 55.6M Streams'
        },
         {
          id: 3,
          nome: 'Advil',
          img: 'https://cdns-images.dzcdn.net/images/cover/607940d47a5b7657c930b35ac44182b7/350x350.jpg',
          subtitulo: 'Sirius - 10.1M Streams'
        },
         {
          id: 4,
          nome: 'MMG2',
          img: 'https://i.scdn.co/image/ab67616d0000b273da84c60246cac178b739129a',
          subtitulo: 'Kaktov - 7.6M Streams'
        },
         {
          id: 5,
          nome: 'Space Sex',
          img: 'https://images.genius.com/c2b9775d58c998641e40689dccc633c6.1000x1000x1.jpg',
          subtitulo: 'Sirius - 19M Streams'
        },
         {
          id: 6,
          nome: 'YaMeFui (FT. Saramalacara)',
          img: 'https://images.genius.com/e2c3dc4770cde6df92f8e8bdb42907b6.1000x1000x1.png',
          subtitulo: 'Sirius - 15.6M Streams'
        },
         {
          id: 7,
          nome: 'Olvidate',
          img: 'https://i1.sndcdn.com/artworks-RZ2aRlgs7xac-0-t500x500.jpg',
          subtitulo: 'Lvrk - 10.2M Streams'
        },
         {
          id: 8,
          nome: 'TKN (FT. Think)',
          img: 'https://i.scdn.co/image/ab67616d0000b2732a3d01289b78099e4508ba0e',
          subtitulo: 'Saramalacara - 12M Streams'
        },
         {
          id: 9,
          nome: 'OJALÁ',
          img: 'https://i.scdn.co/image/ab67616d0000b27370159be5a347d3b52cfaecab',
          subtitulo: 'Emilia Mernes - 8M Streams'
        },
         {
          id: 10,
          nome: 'WO (FT. Bigoblin)',
          img: 'https://i1.sndcdn.com/artworks-uEaXIvld9JXo-0-t500x500.jpg',
          subtitulo: 'Kaktov - 7M Streams'
        },
          {
          id: 11,
          nome: 'GIVENCHY',
          img: 'https://i.scdn.co/image/ab67616d0000b273b661d9d73921e40ae97cb5e4',
          subtitulo: 'GONZA - 670M Streams'
          },
         {
          id: 12,
          nome: 'JDM',
          img: 'https://images.genius.com/92dac827ec2f63a2851dbff2b1bd73e9.1000x1000x1.jpg',
          subtitulo: 'Sirius - 7M Streams'
         },
         {
          id: 13,
          nome: 'Dia de Pago (FT. Darko)',
          img: 'https://i.scdn.co/image/ab67616d0000b273bb763b5ba0e89987d4aeeecb',
          subtitulo: 'GONZA - 5.8M Streams'
         },
         {
          id: 14,
          nome: 'Algo Aparte',
          img: 'https://images.genius.com/0e445bb9b81a5e696dfddd1ebf86c32d.1000x1000x1.png',
          subtitulo: 'Sirius - 4.3M Streams'
         },
         {
          id: 15,
          nome: 'Tengo Envidia',
          img: 'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/79/7e/66/797e6676-2c04-14f2-a0d6-ec74c9b1b20c/1912eeec-cf16-4396-9712-9ec3caf54921.jpg/1200x1200bf-60.jpg',
          subtitulo: 'Sirius • Single'
        },
         {
          id: 17,
          nome: '24K',
          img: 'https://images.genius.com/94e45b04a77b363f48fb30990e7f62d9.800x800x1.png',
          subtitulo: 'Midel,Korean Kid,GONZA • Single'
        },
         {
          id: 18,
          nome: '420 (0600-Prod)',
          img: 'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/85/64/6f/85646fa7-050a-b95d-1db2-bdfaa0331144/0.jpg/600x600bf-60.jpg',
          subtitulo: 'Kaktov,0600-Prod • Single'
        },
         {
          id: 19,
          nome: 'Mi Propio FIN',
          img: 'https://images.genius.com/e4d310d4d08b746338af77da955420a8.500x500x1.jpg',
          subtitulo: 'Sirius • Single'
        },
         {
          id: 20,
          nome: 'No Es Para Tanto',
          img: 'https://images.genius.com/b6c5aa1356da14addbcf3dce4fe87b3f.1000x1000x1.png',
          subtitulo: 'Sirius,GONZA • Single'
        },
         {
          id: 21,
          nome: 'Si quieren frontear',
          img: 'https://i.scdn.co/image/ab67616d0000b2731e7623ea1f70fc02791a5594',
          subtitulo: 'GONZA,Orkuy,Kaleb • Single'
        }
      ], 
      TopWeek: [
        {
          id: 1,
          nome: '1️⃣ Lvrk & Kify - TU DUO FAVORITO',
          img: 'https://i.scdn.co/image/ab67616d0000b2733c64b875e14d62e1b094e995',
          new: '🔊 +1B Streams'
        },
        {
          id: 2,
          nome: '2️⃣ Gunnerk - Del estudio Al Estadio',
          img: 'https://i.scdn.co/image/ab67616d00001e02e9666873bff11b9f9b8beb3e',
          new: '🔊 +980M Streams'
        },
         {
          id: 3,
          nome: "3️⃣ Saigo - SS#3 - Dress",
          img: 'https://i.scdn.co/image/ab67616d0000b273cf8256d2c6a2cd8749604cc9',
          new: '🔊 +900M Streams'
        },
        {
          id: 4,
          nome: '4️⃣ Sirius - Hello Cotto',
          img: 'https://i.scdn.co/image/ab67616d0000b273a3eb9e8c8f24ef8f748a2c46',
          new: '🔊 +900M Streams'
        },
        {
          id: 5,
          nome: '5️⃣ Orkuy - Pa Siempre',
          img: 'https://i.scdn.co/image/ab67616d0000b27322ed1820f5dced32a5159da8',
          new: '🔊 +900M Streams'
        },
        {
          id: 6,
          nome: '6️⃣ Orkuy - Live Sessions #12',
          img: 'https://i.scdn.co/image/ab67616d0000b2731ff540ce0b6ebd31b8c6a462',
          new: '🔊 +1B Streams'
        },

      ],
      Aartistas: [
        {
          id: 2,
          nome: 'Sirius',
          img: 'https://i.scdn.co/image/ab6761610000e5eb04467287f0cd7d15534e3fd1',
          subtitulo: 'Streams Mensuales',
          new: '#1 • 6.013.926.238',
        },
        {
         id: 9,
          nome: 'Midel',
          img: 'https://i.scdn.co/image/ab6761610000e5ebf8dc60cf6517ac24c1b2134f',
          subtitulo: 'Streams Mensuales',
          new: '#2 • 4.312.577.901',
        },
        {
          id: 3,
          nome: 'Gunnerk',
          img: 'https://i1.sndcdn.com/artworks-KjPz8o2DeCdVPMB3-COoJyw-t240x240.jpg',
          subtitulo: 'Streams Mensuales',
          new: '#3 • 3.666.954.137',
        },
        {
          id: 1,
          nome: 'Korean Kid',
          img: 'https://miro.medium.com/v2/resize:fit:1080/1*I3YNq-W67_sryrTK4yCgVA.jpeg',
          subtitulo: 'Streams Mensuales',
          new: '#4 • 1,384,222,748',
        },
        {
          id: 4,
          nome: 'Gonza',
          img: 'https://yt3.googleusercontent.com/MPAu34hVXe8Lp6x_eLv8pgrfFTfqjrwqHG-8auLtb2bHGpPaSy5wYP1WXj527JLG-sSI-dN4=s900-c-k-c0x00ffffff-no-rj',
          subtitulo: 'Streams Mensuales',
          new: '#5 • 3.224.702.974',
        },
        {
          id: 4,
          nome: 'Saigo',
          img: 'https://cdna.artstation.com/p/assets/images/images/059/433/352/large/daniel-gengar.jpg?1676379136',
          subtitulo: 'Streams Mensuales',
          new: '#6 • 1.901.608.927',
        },
         {
          id: 6,
          nome: 'Darko',
          img: 'https://i.pinimg.com/736x/09/c4/57/09c457b20b7349f18b4d5c46e3e38bfb.jpg',
          subtitulo: 'Streams Mensuales',
          new: '#7 • 1.864.588.929',
        },
        {
          id: 7,
          nome: 'SGustinProd' ,
          img: 'https://i.scdn.co/image/ab6761610000e5ebe707b87e3f65997f6c09bfff',
          subtitulo: 'Artista de Spotify'
        },
        {
          id: 8,
          nome: 'Tados',
          img: 'https://marketplace.canva.com/EAEj17Y_k_k/2/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-41B81rUGLAg.jpg',
          subtitulo: 'Artista de Spotify'
        },
      ],

     RecomendadosSingles: [
       {
          id: 5,
          nome: 'SS#3 - Dress',
          img: 'https://images.genius.com/504b7ea718727821e3073fb75917f3b9.600x600x1.jpg',
          subtitulo: 'Saigo & Dress',
        },
       {
          id: 10,
          nome: 'SS#2 - Minina',
          img: 'https://i.scdn.co/image/ab67616d0000b273866cc4ae1146f652c360f27a',
          subtitulo: 'Saigo, Carre & Spreen - 5M Streams'
        },
        {
          id: 1,
          nome: 'SS#1 - a casa pete',
          img: 'https://lastfm.freetls.fastly.net/i/u/ar0/218d57c5513107b1eb0a79e37fa027aa.jpg',
          subtitulo: 'Saigo, Spreen - 11M Streams'
        },
       {
          id: 2,
          nome: 'DIRTY SOUND (FT. Jay OC)',
          img: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4f/ad/cc/4fadccb6-d2a6-2f07-2a49-2a7544d36c7d/190296650628.jpg/600x600bf-60.jpg',
          subtitulo: 'Un Poco De Sirius - 5M Streams'
        },
       {
          id: 3,
          nome: 'Sin Estribos (Freestyle)',
          img: 'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1c/9e/3d/1c9e3d95-105d-0544-fcd9-5532c7738506/603194f0-61b8-43ce-81f6-6a5dc9604c04.png/400x400cc.jpg',
          subtitulo: 'Saigo, Orkuy - 856K Streams'
        },
       {
          id: 4,
          nome: 'Rara Vez',
          img: 'https://i.scdn.co/image/ab67616d0000b273d467bed4e6b2a01ea8569100',
          subtitulo: 'Milo J - 105M Streams'
        },
        {
          id: 5,
          nome: 'Milagrosa',
          img: 'https://cdns-images.dzcdn.net/images/cover/f23bcb5d201947f0072c27d869c68187/500x500.jpg',
          subtitulo: 'Milo J - 50M Streams'
        }
      ],

      Singles2023: [
        {
          id: 53,
          nome: 'BIKEE',
          img: 'https://i1.sndcdn.com/artworks-m0XtmjkN4pGzzc2Q-E2ZQ4w-t500x500.jpg',
          subtitulo: 'SGustinProd • Single',
        },
        {
          id: 52,
          nome: 'goosebumps',
          img: 'https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce',
          subtitulo: 'Travis Scott • Single',
        },
        {
          id: 50,
          nome: 'MOJAA',
          img: 'https://i1.sndcdn.com/artworks-000652171405-in8s6x-t500x500.jpg',
          subtitulo: 'Sirius & Lvrk • Single',
        },
        {
          id: 50,
          nome: 'Hijo de la Noche',
          img: 'https://i.scdn.co/image/ab67616d0000b27360a385a07d66f74cbb744028',
          subtitulo: 'Orkuy, Sirius & Lvrk • Single',
        },
        {
          id: 47,
          nome: 'Music Sessions #21 - Milo j',
          img: 'https://i.scdn.co/image/ab67616d0000b273055cea306ade28a459e948b4',
          subtitulo: 'SGustinProd & Milo j • Single',
        },
        {
          id: 45,
          nome: 'COLOMBIANA',
          img: 'https://i.scdn.co/image/ab67616d00001e02d47ab9652d2d2068e2cc3bff',
          subtitulo: 'Midel, Darko, Kid Mess & Sirius • Single',
        },
                {
          id: 45,
          nome: 'BARCOS Y PUTAS',
          img: 'https://i1.sndcdn.com/artworks-000099529150-wthaan-t500x500.jpg',
          subtitulo: 'Saigo, Midel & Korean Kid • Single ',
        },
        {
          id: 44,
          nome: 'NOTA ESPACIAL (FT. Sirius)',
          img: 'https://images.genius.com/a64d8867958cc7704ff8132bc81ba0e4.800x800x1.png',
          subtitulo: 'Zeekay • Single ',
        },
        {
          id: 44,
          nome: 'TROYA',
          img: 'https://i.scdn.co/image/ab67616d0000b273129347802e305dd44a0a41d6',
          subtitulo: 'GONZA • Single',
        },
        {
          id: 43,
          nome: 'Hasta que lo pierdes (FT. Sirius)',
          img: 'https://i.scdn.co/image/ab67616d0000b2736cfdabcc96069f56218fe126',
          subtitulo: 'Gunnerk • Single',
        },
        {
          id: 42,
          nome: 'Rptm',
          img: 'https://i.scdn.co/image/ab67616d0000b273f4bf849a44d2a3450abb152c',
          subtitulo: 'Kaktov • Single',
        },
        {
          id: 41,
          nome: 'HELLO COTTO',
          img: 'https://i.scdn.co/image/ab67616d0000b273a3eb9e8c8f24ef8f748a2c46',
          subtitulo: 'Sirius • Single ',
          details: '16 de Agosto 2023',
          production: 'Zeekay & Sirius',
        },
        {
          id: 10,
          nome: 'Pa Siempre',
          img: 'https://images.genius.com/7125e730e81712b55ee2d9eea7fc8800.1000x1000x1.png',
          subtitulo: 'Orkuy • Single',
        },
        {
          id: 38,
          nome: 'GTA.mp3',
          img: 'https://i.scdn.co/image/ab67616d0000b273995e0ff3196c47b863fa259c',
          subtitulo: 'Emilia Mernes • Single',
        },
        {
          id: 36,
          nome: 'MI CIUDAD (Feat. Kify, Korean Kid)',
          img: 'https://i.scdn.co/image/ab67616d0000b273e3c104df485c04489dd6202f',
          subtitulo: 'LVRK,Kify,Korean Kid • Single',
        },
        {
          id: 37,
          nome: 'Fuc Boi',
          img: 'https://i.scdn.co/image/ab67616d0000b273d9f243d4c1a0b12b49286951',
          subtitulo: 'Midel • Single ',
        },
        {
          id: 35,
          nome: 'Sin Preguntar',
          img: 'https://i.scdn.co/image/ab67706c0000da849177d8bf80af7627f2c812d4',
          subtitulo: 'Darko, ODRJR • Single ',
        },
        {
          id: 34,
          nome: 'bien x vos (Feat. Suro)',
          img: 'https://i.scdn.co/image/ab67616d0000b273b1b4120562d5f153a8a0aecf',
          subtitulo: 'Kify, Suro • Single',
        },
         {
          id: 33,
          nome: 'Del estudio al Estadio',
          img: 'https://i.scdn.co/image/ab67616d0000b273e9666873bff11b9f9b8beb3e',
          subtitulo: 'Gunnerk, GONZA • Single ',
        },
        {
          id: 32,
          nome: 'Lisa',
          img: 'https://i.scdn.co/image/ab67616d0000b2731fcf8dc413896f0fb5749141',
          subtitulo: 'Saramalacara • Single ',
        },
        {
          id: 30,
          nome: 'PITY (Feat. SIRIUS)',
          img: 'https://i.scdn.co/image/ab67616d00001e0266668c75f2f144ed25ec55b5',
          Profile: 'https://i.redd.it/a4k7yter2a741.jpg',
          subtitulo: 'SGustinProd • Single',
        },
        {
          id: 30,
          nome: 'Vuelta A La Luna',
          img: 'https://i.scdn.co/image/ab67616d0000b27382d57f537077aaabbc639686',
          subtitulo: 'Lvrk,Orkuy & Sirius • Single'
        },
         {
          id: 29,
          nome: 'Rincón',
          img: 'https://images.genius.com/08ca5667dee5e9decccf1f22fc4f12ae.1000x1000x1.jpg',
          subtitulo: 'Milo J • Single'
        },
         {
          id: 29,
          nome: 'Dress | Live Sessions #12',
          img: 'https://i.scdn.co/image/ab67616d0000b2731ff540ce0b6ebd31b8c6a462',
          subtitulo: 'Orkuy & Dress • Single'
        },
        {
          id: 28,
          nome: 'ROCKSTAR',
          img: 'https://i.scdn.co/image/ab67616d0000b2732f405d5d63a07b98ced1521a',
          subtitulo: 'Sirius • Single'
        },
        {
          id: 27,
          nome: 'X ESO BB (FT. Saramalacara)',
          img: 'https://i.scdn.co/image/ab67616d0000b273cc97a24971109c26d151779b',
          subtitulo: 'Jere Klein • Single'
        },
        {
          id: 26,
          nome: 'YO SOY EL RMX (FT. GONZA)',
          img: 'https://i.scdn.co/image/ab67616d0000b273804a2b5659770a15650c7435',
          subtitulo: 'Kaleb Di Masi • Single'
        },
        {
          id: 25,
          nome: 'S.I.C.K SEASON',
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
          subtitulo: 'Sirius • ALBUM'
        },
                {
          id: 24,
          nome: 'Aerobico',
          img: 'https://i.scdn.co/image/ab67616d0000b27362c5bc46ba222ef5bb797257',
          subtitulo: 'Kify,Gonza,Agus U, Midel • Single'
        },
        {
          id: 23,
          nome: 'TRAP N EXPORT',
          img: 'https://i.scdn.co/image/ab67616d0000b2735b37cf5c9c199e48fe7d56e1',
          subtitulo: 'Sirius,Orkuy,LVRK • Single'
        },
        {
          id: 1,
          nome: 'aPoLLo13',
          img: 'https://images.genius.com/5d801b366c6a2c34c3e1f68c87a23963.1000x1000x1.png',
          subtitulo: 'Gonza • Single'
        },
         {
          id: 2,
          nome: 'O.V.N.I',
          img: 'https://img.freepik.com/vector-premium/lindo-astronauta-captura-alienigena-ovni-dibujos-animados-vector-icono-ilustracion-ciencia-tecnologia-aislada_138676-4793.jpg?w=2000',
          subtitulo: 'Sirius • Single'
        },
        {
          id: 3,
          nome: '+ SINCERO (FT. Orkuy)',
          img: 'https://images.genius.com/56090052d3c50dce159c1dc91637e19b.300x300x1.jpg',
          subtitulo: 'Sirius • Single'
        },
        {
          id: 4,
          nome: 'Te Fuiste (FT. Midel)',
          img: 'https://images.genius.com/d0e3502a38cabbb4b3c47e261cc7cc22.1000x1000x1.png',
          subtitulo: 'Tados • Single'
        },
        {
          id: 5,
          nome: 'Music Sessions #19',
          img: 'https://i1.sndcdn.com/artworks-LKRGIMlF0k3k-0-t500x500.jpg',
          subtitulo: 'SGustin,Sirius • Single'
        },
        {
          id: 6,
          nome: 'Si me sobrara el tiempo',
          img: 'https://i1.sndcdn.com/artworks-XnBPvVdxb8PT-0-t500x500.jpg',
          subtitulo: 'GONZA • Single'
        },
        {
          id: 7,
          nome: 'LOS DEL ESPACIO',
          img: 'https://i.scdn.co/image/ab67616d0000b27352c8b9dffa4fcdb36e30eea2',
          subtitulo: 'Orkuy • Single'
        },
        {
          id: 8,
          nome: 'Tu Despedida',
          img: 'https://images.genius.com/09014f16b32f754708c228e9a0f864c6.1000x1000x1.jpg',
          subtitulo: 'Tados • Single'
        },
        {
          id: 10,
          nome: 'NO voy a llorar :,)',
          img: 'https://i.scdn.co/image/ab67616d0000b273ac4340d7908d2f4f7c6f7e1a',
          subtitulo: 'SaraMalaCara • Single'
        },
        {
          id: 11,
          nome: 'DISPARA *** (FT. Sirius)',
          img: 'https://images.genius.com/31f17c61b5daf00129063896a79cb6b0.1000x1000x1.png',
          subtitulo: 'SaraMalaCara • Single'
        },
        {
          id: 13,
          nome: 'PARA AMARTE A TI (FT. Gunnerk)',
          img: 'https://images.genius.com/758e6d390ae8d649fa47a11a6f1658a3.1000x1000x1.png',
          subtitulo: 'KifyKify • Single'
        },
        {
          id: 12,
          nome: 'Music Sessions #20 (FT. Sara)',
          img: 'https://i.scdn.co/image/ab67616d0000b27348b74b66dab23f60aa6ff3af',
          subtitulo: 'SGustinProd • Single'
        },
        {
          id: 14,
          nome: 'BOOTY',
          img: 'https://i1.sndcdn.com/artworks-h5p1faCwKycmMx8c-dhYygA-t500x500.jpg',
          subtitulo: 'Sirius • Single'
        },
         {
          id: 15,
          nome: 'ECLIPSE',
          img: 'https://images.genius.com/d1d610c3d1099e6916ac2824cb948222.1000x1000x1.png',
          subtitulo: 'KifyKify  • Single'
        },
      ],

      listaalbumg1: [
        {
          id: 1,
          nome: '01 dE ENEro',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza & DarkoSSJ • ALBUM'
        },
         {
          id: 2,
          nome: 'JEFES DEL SUDOESTE',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza • ALBUM'
        },
        {
          id: 3,
          nome: 'RoCKSTAR 2.0',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza & Midel • ALBUM'
        },
        {
          id: 4,
          nome: 'hARAkiRI',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza & Orkuy • ALBUM'
        },
        {
          id: 5,
          nome: 'cONTRA><Mi',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza & YC • ALBUM'
        },
        {
          id: 6,
          nome: 'CSIpher (audio latino) (feat. orkuymusic)',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza, Gunnerk & Low Life • ALBUM'
        },
        {
          id: 7,
          nome: 'GiGi',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza • ALBUM'
        },
        {
          id: 8,
          nome: 'dont liE',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza & Sirius • ALBUM'
        },
        {
          id: 10,
          nome: 'antes de perderte (OG VERSION)',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza • ALBUM'
        },
        {
          id: 11,
          nome: 'uNO dOS',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza & KifyKify • ALBUM'
        },
        {
          id: 13,
          nome: 'N.C.L.C',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza • ALBUM'
        },
        {
          id: 12,
          nome: 'aPoLLo13',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza • ALBUM'
        },
        {
          id: 14,
          nome: 'Ultimo Tren a Ameri',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza • ALBUM'
        },
         {
          id: 15,
          nome: 'bUSCANDO Ameri',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza • ALBUM'
        },
         {
          id: 16,
          nome: 'Remember Me (FT. Lvrk, SGustinProd)',
          img: 'https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c',
          subtitulo: 'Gonza • ALBUM'
        },
      ],
      ListaalbumS: [
        {
          id: 1,
          nome: 'O.V.N.I',
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
           details: '2023',
          subtitulo: 'Sirius • ALBUM'
        },
         {
          id: 2,
          nome: 'S.L.O.W',
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
          details: '2023',
          subtitulo: 'Sirius • ALBUM'
        },
         {
          id: 3,
          nome: '4.0',
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
          details: '2023',
          subtitulo: 'Sirius • ALBUM'
        },
         {
          id: 4,
          nome: "Esto E' Trap (FT. Tados)",
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
          details: '2023',
          subtitulo: 'Sirius • ALBUM'
        },
        {
          id: 5,
          nome: 'W.H.I.T.E',
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
          details: '06 de Agosto 2023',
          production: 'Agus U, ODRJR & Yesan',
          subtitulo: 'Sirius • ALBUM'
        },
        {
          id: 6,
          nome: 'Lo Mejor Del Odio',
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
          subtitulo: 'Sirius • ALBUM',
          details: '2023',
        },
        {
          id: 7,
          nome: 'Compro & Pago (FT. GONZA)',
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
          details: '2023',
          subtitulo: 'Sirius • ALBUM'
        },
        {
          id: 8,
          nome: 'A.D.N (FT. SGustinProd)',
          img: 'https://copa.ccopaamericacm.repl.co/Imagen/album.png',
          details: '2023',
          subtitulo: 'Sirius • ALBUM'
        },
      ],
       Listamusics: [
                  {
          id: 47,
          nome: 'Music Sessions #21 - Milo j',
          img: 'https://i.scdn.co/image/ab67616d0000b273055cea306ade28a459e948b4',
          subtitulo: 'SGustinProd & Milo j • ',
          inter: 'Milo j',
          details: '12 de Noviembre 2023',
          production: 'SGustinProd',
          new: '#2 Tendencias',
          dailyStreams: 930192093,
          fecha: '12/11/23',
        },
        {
          id: 1,
          nome: 'Music Sessions #20 - Saramalacara',
          img: 'https://i.scdn.co/image/ab67616d0000b27348b74b66dab23f60aa6ff3af',
          subtitulo: 'SGustinProd • 2023'
        },
         {
          id: 2,
          nome: 'Music Sessions #19 - Sirius',
          img: 'https://i.scdn.co/image/ab67616d0000b2731630dd349221a35ce03a0ccf',
          subtitulo: 'SGustinProd • 2023'
        },
         {
          id: 3,
          nome: 'Music Sessions #18 - GONZA',
          img: 'https://i.scdn.co/image/ab67616d0000b27393c4eec56cea95c9022ed28f',
          subtitulo: 'SGustinProd • 2022',
          details: '2022'
        },
      ],
      ReggaetonyCuarteto: [
        {
          id: 1,
          nome: 'YO SOY EL RMX (FT. GONZA)',
          img: 'https://i.scdn.co/image/ab67616d0000b273804a2b5659770a15650c7435',
          subtitulo: 'Kaleb Di Masi • ',
          dailyStreams: 'N/A'
        },
        {
          id: 2,
          nome: 'Dress | Live Sessions #12',
          img: 'https://i.scdn.co/image/ab67616d0000b2731ff540ce0b6ebd31b8c6a462',
          subtitulo: 'Orkuy & Dress • ',
          inter: 'Dress',
          details: '13 de Septiembre 2023',
          production: 'Orkuy & ODRJR',
          dailyStreams: 1501356964
        },
        {
          id: 3,
          nome: 'Dress & BM - La Morocha',
          img: 'https://i.scdn.co/image/ab67616d0000b2733cd645cc0b41595ccdfd0a73',
          subtitulo: 'Dress & BM • ',
          inter: 'Dress, BM',
          details: '21 de Septiembre 2023',
          dailyStreams: 1021356964
        },
        {
          id: 5,
          nome: 'SS#3 - Dress',
          img: 'https://images.genius.com/504b7ea718727821e3073fb75917f3b9.600x600x1.jpg',
          subtitulo: 'Saigo & Dress • ',
          inter: 'Dress',
          details: '10 de Agosto 2023',
          production: 'Saigo',
          dailyStreams: 1035643965
        },
        {
          id: 4,
          nome: 'El Amor De Mi Vida',
          img: 'https://i.scdn.co/image/ab67616d0000b2731ba9cc2d815c0c60c5060681',
          subtitulo: 'Maria Becerra & Angeles Azules • ',
          inter: 'Maria Becerra, Angeles Azules',
          details: '27 de Septiembre 2023',
          production: 'Spotify, Angeles Azules',
          dailyStreams: 826413630
        },
        {
          id: 4,
          nome: 'Cumbia Cheta',
          img: 'https://i.scdn.co/image/ab67616d0000b2734bd50061beed976b11add40e',
          subtitulo: 'Rombai & Cami • ',
          inter: 'Rombai & Cami',
          details: '01 de Septiembre 2023',
          production: 'Spotify, Angeles Azules',
          dailyStreams: 900123463,
          fecha: '12/2/23'
        },
      ]
    }
  },

  

  computed: {

    playlistsConNew() {
      // Filtra las playlists que tienen la propiedad 'new' de playlistPadrao
      const playlistsPadrao = this.playlistPadrao.filter(playlist => playlist.hasOwnProperty('new'));

      // Filtra las playlists que tienen la propiedad 'new' de ReggaetonyCuarteto
      const playlistsReggaetonyCuarteto = this.ReggaetonyCuarteto.filter(playlist => playlist.hasOwnProperty('new'));

      const playlistssingles2024 = this.singles2024.filter(playlist => playlist.hasOwnProperty('new'));

      const playlistsQELEGENDS = this.QELEGENDS.filter(playlist => playlist.hasOwnProperty('new'));

      // Concatena todas las playlists con 'new' en una sola lista
      return [...playlistsPadrao, ...playlistsReggaetonyCuarteto, ...playlistsQELEGENDS, ...playlistssingles2024];
    },

    
   playlistsFormateadas() {
    return this.playlistPadrao.map(playlist => ({
      ...playlist,
      dailyStreamsFormatted: playlist.dailyStreams.toLocaleString(),
    }));
  },
    // saudacao de "Bom dia", "Boa tarde" e "Boa noite"
    saudacao() {
      var horario = new Date().getHours()

      if (horario >= 18 || horario == 0) {
        return 'Buenas Noches 🌙'
      }else if (horario >= 12) {
        return 'Buenas Tardes ☀'
      }else if(horario >= 1) {
        return 'Buenos Dias 🌞'
      }
    },


    // mostrar as playlists em ordem diferente
    listaUm() {
      let listaUm = this.playlistPadrao
      return listaUm.sort(() => Math.random() - 0.5)
    },
    listaDois() {
      let listaDois = this.playlist2022sencillos
      return listaDois.sort(() => Math.random() - 0.5)
    },
    listaTres() {
      let listaTres = this.playlists
      return listaTres.sort()
    },
    listaCuat() {
      let listaCuat = this.Aartistas
      return listaCuat.sort()
    },
    listaCinco() {
      let listaCinco = this.RecomendadosSingles
      return listaCinco.sort(() => Math.random() - 0.5)
    },
    listaSeis() {
      let listaSeis = this.Singles2023
      return listaSeis.sort(() => Math.random() - 0.5)
    },
    listaalbumg() {
      let listaalbumg = this.listaalbumg1
      return listaalbumg.sort(() => Math.random() - 0.5)
    }, //TopUsers
    listalbumS() {
      let listalbumS = this.ListaalbumS
      return listalbumS.sort(() => Math.random() - 0.5)
    },
      singles2024() {
      let singles2024 = this.lista2024
      return singles2024.sort(() => Math.random() - 0.5)
    },
    
    TopUsers() {
      const combinedList = [...this.QELEGENDS, ...this.playlistPadrao,...this.singles2024];

      return combinedList
        .filter(item => item.fecha) // Filtrar solo los objetos con fecha definida
        .sort((a, b) => {
          // Parsear las fechas en formato "dd/mm/yy"
          const dateA = new Date(`20${a.fecha.split('/').reverse().join('/')}`);
          const dateB = new Date(`20${b.fecha.split('/').reverse().join('/')}`);

          // Ordenar en orden descendente (más reciente primero)
          return dateB - dateA;
        });
    },
    
    listamusics() {
      let listamusics = this.Listamusics
      return listamusics.sort(() => Math.random() - 0.5)
    },
    Reggaetonycuarteto() {
      let Reggaetonycuarteto = this.ReggaetonyCuarteto
      return Reggaetonycuarteto.sort(() => Math.random() - 0.5)
    },
    listaquinto() {
      let listaquinto = this.QELEGENDS
      return listaquinto.sort(() => Math.random() - 1)
    },
   topPlaylists() {
     let topPlaylists = this.top10
      return topPlaylists.sort((a, b) => b.dailyStreams - a.dailyStreams);
},

  },

  created() {
    // Calcula el total de dailyStreams al crear el componente
    this.totalDailyStreams = this.listaquinto.reduce(
      (total, playlist) => total + playlist.dailyStreams,
      0
    );
  },

  methods: {
    
  corFundoPrincipal() {
    this.corFundo = 'rgb(120,4,16)'
  },
    

    formatNumberWithCommas(number) {
      return number.toLocaleString();
    },
    
    showDetails(playlist) {
      
      // Obtén una referencia al modal y sus elementos internos
      var modal = document.getElementById("myModal");
      var modalTitle = document.getElementById("modalTitle");
      var modalImage = document.getElementById("modalImage");
      var modalSubtitulo = document.getElementById("modalSubtitulo");
      var modalDetails = document.getElementById("modalDetails");
      var modalProduction = document.getElementById("modalProduction");
      var modalInterpretada = document.getElementById("modalInterpretada");
      var modalStreams = document.getElementById("modalStreams");
      var modalNew = document.getElementById("modalNew");

      // Establece el contenido del modal con los detalles de la playlist
      modalTitle.textContent = playlist.nome;
      modalDetails.textContent = "Released: " + playlist.details;
      modalProduction.textContent = "Produccion: " + playlist.production;
      modalInterpretada.textContent = "Interpretada Por: " + playlist.inter;
      modalNew.textContent = "" + playlist.new;

       var modalNew = document.getElementById("modalNew");

  // Verifica si hay texto en playlist.new antes de asignarlo a modalNew
  if (playlist.new) {
    modalNew.textContent = playlist.new;
    modalNew.style.display = "block"; // Muestra modalNew si hay contenido
  } else {
    modalNew.style.display = "none"; // Oculta modalNew si no hay contenido
  }
  // Obtén el número de streams formateado
  var formattedStreams = this.formatNumberWithCommas(playlist.dailyStreams);

  // Crea un elemento span para la palabra "Streams"
  var streamsTextSpan = document.createElement("span");
  streamsTextSpan.textContent = "Streams: ";

  // Crea un elemento span para el número de streams con la clase "bold-number"
  var streamsSpan = document.createElement("span");
  streamsSpan.textContent = formattedStreams;
  streamsSpan.classList.add("bold-number"); // Agrega la clase "bold-number" al elemento

  // Limpia el contenido actual de modalStreams
  modalStreams.innerHTML = "";

  // Agrega los elementos span al elemento modalStreams en el orden correcto
  modalStreams.appendChild(streamsTextSpan); // Palabra "Streams"
  modalStreams.appendChild(streamsSpan); // Número de streams en negrita

      modal.style.display = "block";
    },

    // Función para cerrar el modal
    closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },

    
    
    
  mudarCorFundo(n) {
    switch (n) {
      case 2:
        this.corFundo = 'rgb(36, 0, 4)'
        break;
      case 3:
        this.corFundo = 'rgb(4, 116, 120)'
        break;
      case 4:
        this.corFundo =  'rgb(2, 29, 102)'
        break;
      case 5:
        this.corFundo =  'rgb(121, 77, 15)'
        break;
      case 6:
        this.corFundo =  'rgb(73, 53, 55)'
        break;
      default:
        break;
    }  
  },

    
  formatNumberWithCommas(number) {
      return number.toLocaleString();
    },
     aumentarStreamsDiariosAleatorios() {
       console.log('Aumentando streams diarios...');
        // Obtén la fecha actual
        const fechaActual = new Date();
        // Comprueba si es un nuevo día
        if (fechaActual.getHours() === 0 && fechaActual.getMinutes() === 0) {
          // Aumenta el número de streams diarios de forma aleatoria solo para QELEGENDS
          this.QELEGENDS.forEach(playlist => {
            playlist.canciones.forEach(cancion => {
              // Genera un aumento aleatorio entre 1 y 1000 (puedes ajustar este rango)
              const aumentoAleatorio = Math.floor(Math.random() * 10000000) + 1;
              cancion.dailyStreams += aumentoAleatorio;
              // Actualiza el local storage solo para QELEGENDS
              localStorage.setItem(`dailyStreams_${cancion.id}`, cancion.dailyStreams);
            });
          });
        }
      },

      // Resto de tus métodos...
    },

    

  
mounted() {
  // Llama a la función para aumentar los streams diarios al cargar la página
   this.aumentarStreamsDiariosAleatorios();

  this.playlists = this.playlistsConNew;


  // Llama a la función cada minuto para comprobar si es un nuevo día
  setInterval(this.aumentarStreamsDiariosAleatorios, 60000); // 60000 milisegundos = 1 minuto6
}
}).mount('#app')



