document.getElementById('toggle').addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("nav-header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");
});

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
	var currentScroll = window.pageYOffset || document.body.scrollTop;
	if(currentScroll > lastScrollTop){
		document.getElementById("nav-background").style.display="none";
		document.getElementById("nav-header").classList.remove("header-in");
		document.getElementById("nav-header").style.opacity = 0;
	}else{
		document.getElementById("nav-background").style.display="table";
		document.getElementById("nav-header").classList.add("header-in");
		document.getElementById("nav-header").classList.add("solid");
		document.getElementById("nav-header").style.opacity = 1;

	if(currentScroll<=3){
		document.getElementById("nav-header").classList.remove("solid");
		document.getElementById("nav-header").classList.remove("header-in");
	}	

}
	lastScrollTop = currentScroll;
},false);

var codersLaboratoria = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia","Miriam Perralta",
"Elizabeth Condori","Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez",
"Nadia Cuadros","Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera",
"Stephanie Hiyagon","Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco", "Ericka Vidal","Katherine Ortega",
"Brilly Majuan","Flor Tello","Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez",
"Nakarid Jave","Angie Cóndor","Maricarmen Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez","Naomi Villanueva",
"Mari Castillo","Miriam Peralta","Karin Alejo","Liliana Peña","Ruth Salvador","Maribel","Wendy Reyes","Cinthia",
"Maria Grecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];
	
var divGeneral = document.getElementById("imagenes");

for(var i=1; i<=54; i++){
	var div = document.createElement("div");
	var img = document.createElement("img");
	var span = document.createElement("span");

	img.setAttribute("src", "assets/img/students/"+ i +".png");

	div.classList.add("fotoLaboratoria");
	span.classList.add("color");
	
	div.appendChild(img);
	span.innerText = codersLaboratoria[i-1];
	div.appendChild(span); //div>img
	
	divGeneral.appendChild(div); //imagenes>div>img

}
