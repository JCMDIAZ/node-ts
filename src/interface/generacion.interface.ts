export interface ListGeneracion {
    id: number,
    nombre_generacion: string,
}

export interface Generacion {
    nombre_generacion: string,
    fecha_inicio: Date,
    fecha_fin: Date,
    director_inicio: string,
    director_termino: string,
	total_alumnos_inicio: number,
	total_alumnos_termino: number,
	total_centros_presenciales: number,
	total_centros_virtuales: number,
}