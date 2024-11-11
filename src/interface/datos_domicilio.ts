export interface DatosDomicilio {
	id_registro: number,
	calle: string,
	numeroexterior: string,
	numerointerior: string,
	colonia: string,
	municipio: string,
	estado: string,
	codigopostal: string,
	referencias: string,
	telefono: string,
	tipovivienda: number,
	estatusvivienda: number,
	vivecon: number,
	domicilioactual: boolean
}