export interface DatosInscripcion {
	id_registro: number,
	id_generacion: number,
	id_parroquia_envio: number,
	parrocoenvio_nombre: string,
	parrocoenvio_proceso: number,
	id_centroformativo: number,
	id_ministerio: number,
	numero_lista: number,
	id_causacambio_centroformativo: number,
	id_causacambio_ministerio: number,
	interes_misionero: boolean,
	interes_diacono: boolean,
	notas_administracion: string
}
