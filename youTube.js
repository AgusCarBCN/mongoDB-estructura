db.createCollection("usuario", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "usuario",
      required: [
        "nombre",
        "password",
        "fechaNacimiento",
        "sexo",
        "pais",
        "codigopostal",
        "canalesUsuario",
        "suscripciones",
        "playlist",
      ],
      properties: {
        nombre: { bsonType: "string" },
        password: { bsonType: "string" },
        fechaNacimiento: { bsonType: "date" },
        sexo: { bsonType: "string" },
        pais: { bsonType: "string" },
        codigopostal: { bsonType: "string" },
        canalesUsuario: { bsonType: "array", items: { bsonType: "objectId" } },
        suscripciones: { bsonType: "array", items: { bsonType: "objectId" } },
        playlist: { bsonType: "array", items: { bsonType: "objectId" } },
      },
    },
  },
});
db.createCollection("videos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "videos",
      required: [
        "titulo",
        "descripcion",
        "duracion",
        "thumbnail",
        "autor",
        "fechaPublicacion",
        "horaPublicacion",
        "estado",
        "etiquetas",
        "comentarios",
      ],
      properties: {
        titulo: { bsonType: "string" },
        descripcion: { bsonType: "string" },
        duracion: { bsonType: "string" },
        thumbnail: { bsonType: "binData" },
        autor: { bsonType: "string" },
        fechaPublicacion: { bsonType: "date" },
        horaPublicacion: { bsonType: "timestamp" },
        estado: { bsonType: "string" },
        etiquetas: { bsonType: "array", items: { bsonType: "objectId" } },
        comentarios: { bsonType: "array", items: { bsonType: "objectId" } },
      },
    },
  },
});
db.createCollection("etiquetas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "etiquetas",
      properties: { nombre: { bsonType: "string" } },
    },
  },
});
db.createCollection("canal", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "canal",
      required: ["nombre", "descripcion", "fechaCreacion"],
      properties: {
        nombre: { bsonType: "string" },
        descripcion: { bsonType: "string" },
        fechaCreacion: { bsonType: "date" },
      },
    },
  },
});
db.createCollection("comentarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "comentarios",
      required: ["comentario", "fecha", "hora", "usuario", "registrolikes"],
      properties: {
        comentario: { bsonType: "string" },
        fecha: { bsonType: "date" },
        hora: { bsonType: "timestamp" },
        usuario: { bsonType: "objectId" },
        registrolikes: {
          bsonType: "array",
          items: {
            title: "likes",
            required: ["likes", "dislike", "fecha", "hora"],
            properties: {
              likes: { bsonType: "int" },
              dislike: { bsonType: "int" },
              fecha: { bsonType: "date" },
              hora: { bsonType: "timestamp" },
            },
          },
        },
      },
    },
  },
});
db.createCollection("playlist", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "playlist",
      required: ["nombre", "fechaCreacion", "estado", "videos"],
      properties: {
        nombre: { bsonType: "string" },
        fechaCreacion: { bsonType: "date" },
        estado: { bsonType: "string" },
        videos: { bsonType: "array", items: { bsonType: "objectId" } },
      },
    },
  },
});


