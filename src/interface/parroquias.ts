export interface Parroquias {
	id_tipo: number,
	id_zona: number,
	id_decanato: number,
	nombre: string,
	telefono: string,
	responsable_titulo: number,
	responsable_nombre: string,
	direccion: string,
	estado: string,
	municipio: string,
	colonia: string,
	codigopostal: string,
}

export interface ParroquiaList {
    id: number,
    nombre: string,
    municipio: string,
}