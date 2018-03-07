
		document.getElementById("nas").innerHTML += (" nascido em 25/06/1998(" + calcula_idade(new Date(1998,05,25)) + " Anos).");

		function calcula_idade(nascimento){
			var hoje = new Date();
			var res = hoje.getFullYear() - nascimento.getFullYear();
			if(hoje.getMonth()>nascimento.getMonth()||hoje.getMonth()==nascimento.getMonth()&&hoje.getDate()>=nascimento.getDate()){
				return res;
			}else{
				res--;
				return res;
			}
		}
