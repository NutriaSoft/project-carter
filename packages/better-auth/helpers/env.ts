// helpers/env.ts

/**
 * Obtiene un array desde una variable de entorno, dividiendo por un delimitador.
 * @param key - Nombre de la variable de entorno.
 * @param delimiter - Delimitador para dividir la cadena (por defecto: ",").
 * @returns Array de strings. Si la variable no existe, retorna un array vacío.
 */
export function getEnvArray(key: string, delimiter = ","): string[] {
	const rawValue = Bun.env[key];
	return rawValue ? rawValue.split(delimiter).map((item) => item.trim()) : [];
}

export function getEnvArrayFiltered(key: string, delimiter = ","): string[] {
	const rawValue = Bun.env[key];
	return rawValue
		? rawValue
				.split(delimiter)
				.map((item) => item.trim())
				.filter((item) => item !== "")
		: [];
}
