export interface DatosEstadoCivil {
	id_registro: number,
	id_estadocivil: number,
	conyuge_nombres: string,
	conyuge_primerapellido: string,
	conyuge_segundoapellido: string,
	conyuge_fechanacimiento: Date, 	
    conyuge_fechadefunsion: Date,
    matrimoniocivil_fecha: Date,
    matrimoniocivil_fechaseparacion: Date,
    matrimoniocivil_constancia: boolean,
	totalhijos: number
}