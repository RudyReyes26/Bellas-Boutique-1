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
    imagen: "assets/img/productos/vestido-rosa.jpg",
    estado: "Activo",
    destacado: true,
    etiqueta: "Oferta"
    },
    {
    id: 2,
    nombre: "Bolso de Cuero Premium",
    descripcion: "Bolso moderno de cuero sintético.",
    precio: 85000,
    stock: 5,
    categoria: "Accesorios",
    proveedor: "Leather CR",
    imagen: "assets/img/productos/bolso-negro.jpg",
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
    imagen: "assets/img/productos/tacon-negro.jpg",
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