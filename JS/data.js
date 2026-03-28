const seedUsuarios = [
    {
    id: 1,
    cedula: "101110111",
    nombre: "María",
    apellidos: "Rodríguez",
    correo: "cliente@bellas.com",
    telefono: "8888-9999",
    direccion: "San José, Costa Rica",
    password: "Cliente123*",
    rol: "Cliente",
    estado: "Activo"
    },
    {
    id: 2,
    cedula: "202220222",
    nombre: "Laura",
    apellidos: "Vargas",
    correo: "vendedor@bellas.com",
    telefono: "8777-1111",
    direccion: "Heredia, Costa Rica",
    password: "Vendedor123*",
    rol: "Vendedor",
    estado: "Activo"
    },
    {
    id: 3,
    cedula: "303330333",
    nombre: "Ana",
    apellidos: "Pérez",
    correo: "admin@bellas.com",
    telefono: "8666-2222",
    direccion: "Alajuela, Costa Rica",
    password: "Admin123*",
    rol: "Administrador",
    estado: "Activo"
    }
];

const seedProductos = [
    {
    id: 1,
    nombre: "Vestido Elegante Rosa",
    descripcion: "Vestido de ocasión con acabado elegante.",
    precio: 45000,
    stock: 8,
    categoria: "Ropa",
    proveedor: "Bellas Importaciones",
    imagen: "images\\Vestido_Rosa_Elegante.jpg",
    estado: "Activo",
    destacado: true,
    etiqueta: "Oferta"
    },
    {
    id: 2,
    nombre: "Bolso de Cuero Premium",
    descripcion: "Bolso moderno de cuero sintético.",
    precio: 40000,
    stock: 5,
    categoria: "Accesorios",
    proveedor: "Leather CR",
    imagen: "images\\Bolso_De_Cuero.jpg",
    estado: "Activo",
    destacado: true,
    etiqueta: "Nuevo"
    },
    {
    id: 3,
    nombre: "Zapatos de Tacón Elegantes",
    descripcion: "Tacones brillantes para eventos especiales.",
    precio: 55000,
    stock: 10,
    categoria: "Calzado",
    proveedor: "Moda CR",
    imagen: "images\\Zapato_Elegante.jpg",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    },
    {
    id: 4,
    nombre: "Tenis Deportivos",
    descripcion: "Zapatos cómodos para ejercicio y actividades al aire libre.",
    precio: 38000,
    stock: 15,
    categoria: "Calzado",
    proveedor: "Moda CR",
    imagen: "images\\tenis_deportivos.jpg",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    },
    {
    id: 5,
    nombre: "Zapatos Casual",
    descripcion: "Zapatos cómodos para uso diario.",
    precio: 42000,
    stock: 12,
    categoria: "Calzado",
    proveedor: "Moda CR",
    imagen: "images\\Zapato_Casual.jpg",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    },
    {
    id: 6,
    nombre: "Bolso de Mano Elegante Louis Vuitton",
    descripcion: "Bolso de lujo con diseño elegante.",
    precio: 100000,
    stock: 5,
    categoria: "Accesorios",
    proveedor: "Leather CR",
    imagen: "images\\Bolso_De_LV.jpg",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    },
    {
    id: 7,
    nombre: "Camiseta Casual",
    descripcion: "Camiseta cómoda para uso diario.",
    precio: 7500,
    stock: 20,
    categoria: "Ropa",
    proveedor: "Moda CR",
    imagen: "images\\Camiseta_Casual.jpg",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    },
    {
    id: 8,
    nombre: "Camiseta Deportiva",
    descripcion: "Camiseta cómoda para ejercicio y actividades al aire libre.",
    precio: 12500,
    stock: 25,
    categoria: "Ropa",
    proveedor: "Moda CR",
    imagen: "images\\Camiseta_Deportiva.jpg",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    },
    {
    id: 9,
    nombre: "Camisa de vestir",
    descripcion: "Camisa elegante para uso profesional.",
    precio: 16000,
    stock: 15,
    categoria: "Ropa",
    proveedor: "Moda CR",
    imagen: "images\\Camisa_De_Vestir.jpg",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    },
    {
    id: 10,
    nombre: "Pantalones de mezclilla",
    descripcion: "Pantalones cómodos para uso diario.",
    precio: 18000,
    stock: 25,
    categoria: "Ropa",
    proveedor: "Moda CR",
    imagen: "images\\Pantalones_De_Mezclilla.jpg",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    },
    {
    id: 11,
    nombre: "Crocs",
    descripcion: "Zapatos cómodos para uso diario.",
    precio: 22000,
    stock: 25,
    categoria: "Calzado",
    proveedor: "Moda CR",
    imagen: "images\\Crocs.jpg",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    },
    {
    id: 12,
    nombre: "Aretes",
    descripcion: "Aretes elegantes para ocasiones especiales.",
    precio: 18000,
    stock: 25,
    categoria: "Accesorios",
    proveedor: "Moda CR",
    imagen: "images\\Aretes.png",
    estado: "Activo",
    destacado: false,
    etiqueta: ""
    }
];

const seedFaq = [
    {
    id: 1,
    pregunta: "¿Cuál es el tiempo de entrega?",
    respuesta: "El tiempo estimado es de 2 a 5 días hábiles."
    },
    {
    id: 2,
    pregunta: "¿Puedo cambiar un producto?",
    respuesta: "Sí, dentro de los primeros 8 días con factura."
    }
];