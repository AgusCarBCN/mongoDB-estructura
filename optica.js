
//Creacion de base de datos pizzeria

db = db.getSiblingDB('pizzeria')

//creación de colecciones y validaciones 

db.createCollection("cliente", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "cliente",
      required: ["nombre", "apellidos", "direccion", "pedido"],
      properties: {
        nombre: { bsonType: "string" },
        apellidos: { bsonType: "string" },
        telefono: { bsonType: "string" },
        direccion: {
          bsonType: "object",
          title: "direccion",
          required: ["calle", "codigoPostal", "provincia", "localidad"],
          properties: {
            calle: { bsonType: "string" },
            codigoPostal: { bsonType: "string" },
            provincia: { bsonType: "string" },
            localidad: { bsonType: "string" },
          },
        },
        pedido: { bsonType: "array", items: { bsonType: "objectId" } },
      },
    },
  },
});
db.createCollection("pedido", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "pedido",
      required: ["fecha", "hora", "tipoDePedido", "producto", "tienda"],
      properties: {
        fecha: { bsonType: "date" },
        hora: { bsonType: "timestamp" },
        tipoDePedido: { bsonType: "objectId" },
        producto: { bsonType: "array", items: { bsonType: "objectId" } },
        tienda: { bsonType: "objectId" },
      },
    },
  },
});
db.createCollection("tienda", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "tienda",
      //required: ["direccion"],
      properties: {
        direccion: {
          bsonType: "object",
          title: "direccion",
          required: ["calle", "codigoPostal", "provincia", "localidad"],
          properties: {
            calle: { bsonType: "string" },
            codigoPostal: { bsonType: "string" },
            provincia: { bsonType: "string" },
            localidad: { bsonType: "string" },
          },
        },
      },
    },
  },
});

//En empleado ,categoria de empleado solo permitirá poner cocinero o repartidor.

db.createCollection("empleado", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "empleado",
      required: [
        "nombre",
        "apellidos",
        "nif",
        "telefono",
        "tienda",
        "categoriaEmpleado",
      ],
      properties: {
        nombre: { bsonType: "string" },
        apellidos: { bsonType: "string" },
        nif: { bsonType: "string" },
        telefono: { bsonType: "string" },
        tienda: { bsonType: "objectId" },
        categoriaEmpleado: { enum: ["cocinero","repartidor"] ,
        description: "se requiere introducir solo cocinero o repartidor."}
      },
    },
  },
});
db.createCollection("producto", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "producto",
      required: ["nombre", "descripcion", "imagen", "precio", "categoria "],
      properties: {
        nombre: { bsonType: "string" },
        descripcion: { bsonType: "string" },
        imagen: { bsonType: "binData" },
        precio: { bsonType: "double" },
        categoria: { bsonType: "objectId" },
      },
    },
  },
});
db.createCollection("categoria ", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "categoria ",
      properties: { nombre: { bsonType: "string" } },
    },
  },
});
db.createCollection("Hamburguesa", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Hamburguesa",
      required: ["categoria "],
      properties: { categoria: { bsonType: "objectId" } },
    },
  },
});
db.createCollection("bebida", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "bebida",
      required: ["categoria "],
      properties: { categoria: { bsonType: "objectId" } },
    },
  },
});
db.createCollection("pizza", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "pizza",
      required: ["categoria "],
      properties: {
        categoria: { bsonType: "array", items: { bsonType: "objectId" } },
      },
    },
  },
});
db.createCollection("tipo de pedido", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "tipo de pedido",
      required: ["tipoDePedido"],
      properties: { tipoDePedido: { bsonType: "string" } },
    },
  },
});
db.createCollection("recogidaTienda", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "recogidaTienda",
      required: ["tipoDePedido"],
      properties: { tipoDePedido: { bsonType: "objectId" } },
    },
  },
});
db.createCollection("recogidaDomicilio", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "recogidaDomicilio",
      required: ["fecha", "hora", "empleado", "tipoDePedido"],
      properties: {
        fecha: { bsonType: "date" },
        hora: { bsonType: "timestamp" },
        empleado: { bsonType: "objectId" },
        tipoDePedido: { bsonType: "objectId" },
      },
    },
  },
});
//muestra colecciones creadas en base de datos
db.getCollectionNames()