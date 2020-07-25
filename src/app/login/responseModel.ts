export interface ResponseModel{
    message:string;
    login:boolean;
    user:User;
}
export interface User{
    numeroDocumento:string;
    tipoDocumento:string;
    nombre:string;
    apellido:string;
    usuario:string;
    clave:string;
    numeroCelular:string;
    correoElectronico:string;
}