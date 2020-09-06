export interface IUsuario {
    id: number;
    nombre: string;
    apellido: string;
    telefono: number;
    rut: number;
    fechaNacimiento: string;
    direccion: IDireccion;
    activo: number;
}

interface IDireccion {
    calle: string;
    numero: number;
    comuna: string;
}

export interface IActivo {
    idActivo: number;
    desActivo: string;
}
