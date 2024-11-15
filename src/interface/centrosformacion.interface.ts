export interface CentrosFormacionList {
	id: number,
    centro_numero: number,
    centro_nombre: string,
    centro_horario: string;
}

export interface CentrosFormacion {
	id_generacion: number,
	id_zona: number,
	id_parroquia: number,
	centro_numero: number,
	centro_nombre: string,
	centro_horario: string,
	coordinador_nombre: string,
	coordinador_celular: string,
	subcoordinador_nombre: string,
	subcoordinador_celular: string,
	secretario_nombre: string,
	secretario_celular: string,
	finanzas_nombre: string,
	finanzas_celular: string,
	tecnologia_nombre: string,
	tecnologia_celular: string,
	serviciopractico_nombre: string,
	serviciopractico_celular: string,    
}