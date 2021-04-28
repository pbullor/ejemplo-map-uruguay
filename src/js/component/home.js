import React from "react";
import Card from "./card.js";

//create your first component
export function Home() {
	let personajes = [
		{
			nombre: "Bob Marley",
			descripcion:
				"Robert Nesta Marley, más conocido como Bob Marley, fue un músico, guitarrista y compositor jamaicano. Durante su carrera musical fue el líder, compositor y guitarrista de las bandas The Wailers y Bob Marley & The Wailers",
			imagen:
				"https://los40es00.epimg.net/los40/imagenes/2020/06/15/los40classic/1592224638_964781_1592235274_noticia_normal.jpg"
		},
		{
			nombre: "Rosana Arbelo",
			descripcion:
				"Rosana Arbelo Gopar, conocida simplemente como Rosana, es una cantautora española que se dio a conocer con su tema El talismán de su disco Lunas rotas.",
			imagen:
				"https://www.vanguardia.com/binrepository/716x1344/0c37/716d477/none/12204/VJSC/imagen_5264384_20210117150539.jpg"
		},
		{
			nombre: "Emiliano Brancciari",
			descripcion:
				"Emiliano Germán Brancciari Amarillo es un músico y compositor argentino, que hizo la mayoría de su carrera musical en Uruguay. Es uno de los líderes fundadores de la banda No Te Va Gustar. ",
			imagen:
				"https://resizer.glanacion.com/resizer/cwh69v9uWGTKbN_oBQ4IthZDMFk=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5KJJCASJYNED3BXSADN3BG3ZKM.jpg"
		},
		{
			nombre: "Idea Vilariño",
			descripcion:
				"Idea Vilariño ​ fue una poeta, ensayista y crítica literaria uruguaya perteneciente al grupo de escritores denominado Generación del 45. Dentro de sus facetas menos conocidas se encuentran la de traductora, compositora y docente.",
			imagen:
				"https://www.poeticous.com/system/poets/photos/000/000/632/large/idea.jpg?1487437548"
		},
		{
			nombre: "Maca",
			descripcion: "Gran teacher de 4Geeks",
			imagen:
				"https://www.poeticous.com/system/poets/photos/000/000/632/large/idea.jpg?1487437548"
		}
	];

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="container">
				<div className="row">
					{personajes.map((elem, i) => {
						return (
							<Card
								key={i}
								nombre={elem.nombre}
								descripcion={elem.descripcion}
								img={elem.imagen}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
