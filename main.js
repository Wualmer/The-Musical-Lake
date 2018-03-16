class album {
	constructor(nombre){
		this.nombre = nombre
		this.canciones = []
	}
	agregarCancion(sonidos) {
		this.canciones.push(sonidos)
	}
	escucharCancion(sonido){
		let index
		for (let i=0 ; i < this.canciones.length; i++) {
			if (this.canciones[i].includes(sonido)) {
				index = this.canciones[i].findIndex((e)=> e == sonido)
				if (index+1 == this.canciones[i].length) return console.log('...')
				else return console.log(this.canciones[i].slice(index+1))
			}	
		} 
	}
}
let AnimalesSongs = new album ("Los Animales")

AnimalesSongs.agregarCancion(["brr", "fiu", "cric-cric", "brrah"])
AnimalesSongs.agregarCancion(["pep", "birip", "trri-trri", "croac"])
AnimalesSongs.agregarCancion(["bri-bri", "plop", "cric-cric", "brrah"])

AnimalesSongs.escucharCancion("brr") // Devuelve "fiu", "cric-cric", "brrah"
AnimalesSongs.escucharCancion("fiu") // Devuelve "cric-cric", "brrah"
AnimalesSongs.escucharCancion("cric-cric") // Devuelve "brrah"
AnimalesSongs.escucharCancion("pep") // Devuelve "birip", "trri-trri", "croac"
AnimalesSongs.escucharCancion("birip") // Devuelve "trri-trri", "croac"
AnimalesSongs.escucharCancion("trri-trri") // Devuelve "croac"
AnimalesSongs.escucharCancion("bri-bri") // Devuelve "plop", "cric-cric", "brrah"
AnimalesSongs.escucharCancion("plop") //  Devuelve "cric-cric", "brrah"

AnimalesSongs.escucharCancion("croac") //Devuelve ...
AnimalesSongs.escucharCancion("brrah") //Devuelve ...
