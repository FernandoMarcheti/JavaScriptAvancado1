class NegociacoesView {

	constructor(elemento){
		this._elemento = elemento;
	}

	update(model){
		this._elemento.innerHTML = this._template(model);
	}

	_template(model){
		return `
			<table class="table table-hover table-bordered">
		        <thead>
		            <tr>
		                <th>DATA</th>
		                <th>QUANTIDADE</th>
		                <th>VALOR</th>
		                <th>VOLUME</th>
		            </tr>
		        </thead>		        	
		        <tbody>
		        	${this._getCorpoTabela(model)}
		        </tbody>		        
		        <tfoot>
		        	<tr>
		        		<td colspan="3"></td>
		        		<td>
		        			${this._getFooterTabela(model)}
	        			</td>
	        		</tr>
		        </tfoot>
		    </table>
	    `;
	}	

	_getCorpoTabela(model){
		return model.map(n =>
			`<tr>
        		<td> ${DateHelper.dataParaTexto(n.data)} </td>
        		<td> ${n.quantidade} </td>
        		<td> ${n.valor} </td>
        		<td> ${n.volume} </td>
        	</tr> `
		).join('');
	}

	_getFooterTabela(model){
		return model.reduce((ant, prox)=> ant + prox.volume, 0);
	}
}