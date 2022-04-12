const {
    modelImage,
    modelDeveloper,
    modelAdministrators,
} = require("./models.js");
/**
 *  Guardado de imagenes
 */
saveImage = async(nombre, url) => {
    const image = new modelImage({ nombre: nombre, url: url });
    await image.save((err, img) => {
        if (err) return console.log(err);
        console.log(`Imagen agregada correctamente ${nombre}`);
    });
};
/**
 *  Guardado de desarrolladores
 */
saveDeveloper = async(nombre, carnet, curso, puesto, url) => {
    const developer = new modelDeveloper({
        nombre: nombre,
        carnet: carnet,
        curso: curso,
        puesto: puesto,
        imagen: url,
    });
    await developer.save((err, dev) => {
        if (err) return console.log(err);
        console.log(`Developer agregada correctamente ${nombre}`);
    });
};
/**
 *  Guardado de administradores
 */
saveAdmin = async(nombre, descripcion, puesto, url) => {
    const administrator = new modelAdministrators({
        nombre: nombre,
        descripcion: descripcion,
        puesto: puesto,
        imagen: url,
    });
    await administrator.save((err, admin) => {
        if (err) return console.log(err);
        console.log(`Developer agregada correctamente ${nombre}`);
    });
};

function save() {
    // Guardar Imagenes
    saveImage(
        "Lago de Atitlan",
        "https://blogapi.uber.com/wp-content/uploads/2019/04/Informaci%C3%B3n-sobre-el-lago-de-Atitl%C3%A1n-1024x512.png"
    );
    saveImage(
        "Semuc Champey",
        "https://cdn.kimkim.com/files/a/images/8be5abb6c4b12252c00b11f32d05eeada603e19e/big-be76f93c119d95f27d3e747c35bb810e.jpg"
    );
    saveImage(
        "Laguna Lachua",
        "https://www.guatemala.com/fotos/201603/Andrea-Tortola-885x500.png"
    );
    saveImage(
        "Tikal",
        "https://topadventure.com/__export/1600632743129/sites/laverdad/img/2020/09/20/tikal.jpg_673822677.jpg"
    );
    saveImage(
        "Antigua Guatemala",
        "https://www.guatemala.com/fotos/2021/03/Antigua-Guatemala-es-considerada-una-de-las-ciudades-mas-hermosas-del-mundo-segun-medio-internacional7-885x500.jpg"
    );
    saveImage(
        "La Sierra de los Cuchumatanes",
        "https://aprende.guatemala.com/wp-content/uploads/2017/09/sierra-cuchumatanes.jpg"
    );

    // Guardar Integrantes
    saveDeveloper(
        "José Carlos I Alonzo Colocho",
        "201700965",
        "Redes De Computación 2",
        "Coordinador",
        "https://www.seekpng.com/png/full/138-1388073_login-icons-user-flat-icon-png.png"
    );
    saveDeveloper(
        "Estanley Rafael Cóbar García",
        "201700319",
        "Redes De Computación 2",
        "Programador",
        "https://cdn0.iconfinder.com/data/icons/fillicons-information-technology/1550/programmer_software_developer-512.png"
    );
    saveDeveloper(
        "Oscar Armin Crisostomo Ruiz",
        "201709140",
        "Redes De Computación 2",
        "Programador",
        "https://cdn0.iconfinder.com/data/icons/fillicons-information-technology/1550/programmer_software_developer-512.png"
    );

    // Guardar Administradores
    saveAdmin(
        "Daniel García",
        "Es el máximo responsable de la gestión y dirección administrativa de Ucron. Es quien hace la gestión, administra y da la dirección para dónde debe ir Ucron. Su principal habilidad es la visión de negocio, es decir, saber para donde evolucionará Ucron dónde está su negocio y comunicación, la habilidad de comunicar sus ideas, planes y metas para todo su equipo.",
        "Director Ejecutivo",
        "https://cdn-icons-png.flaticon.com/512/69/69636.png"
    );
    saveAdmin(
        "Alexander Hernández",
        "Determina las necesidades tecnológicas de Ucron y planifica cómo satisfacer esas necesidades: desde el desarrollo de la infraestructura hasta la coordinación de actualizaciones de software. Asegura que Ucron y sus empleados están trabajando a plena capacidad. Además, determina si hay alguna debilidad en el sistema, como programas obsoletos o servidores sobrecargados. También, determina si hay amenazas de seguridad.",
        "Administrador de TI",
        "https://e7.pngegg.com/pngimages/959/292/png-clipart-project-manager-project-management-executive-manager-business-angle-people.png"
    );
    saveAdmin(
        "Victoria Martínez",
        "Administrar la liquidez de la empresa, así como cobrar lo que se le debe y estar al día con los gastos de la empresa. Especialista en Finanzas. Es el responsable para implementar un plan financiero de acuerdo al plan estratégico de Ucron.",
        "Director Financiero",
        "https://static.vecteezy.com/system/resources/previews/004/716/368/non_2x/comptroller-rgb-color-icon-financial-controller-strategy-and-budget-creating-expert-accounting-management-isolated-illustration-simple-filled-line-drawing-editable-stroke-vector.jpg"
    );
}

module.exports = {
    save,
};