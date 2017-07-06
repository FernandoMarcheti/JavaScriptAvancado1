class NegociacaoController {

	constructor(){
		let $ = document.querySelector.bind(document);

		this._data = $('#data');
		this._quantidade = $('#quantidade');
		this._valor = $('#valor');
	}

	adiciona(event){
		event.preventDefault();

		let data = new Date(
			... this._data.value
				.split('-')
				.map((item, indice) => item - indice % 2)	
		);

		let negociacao = new Negociacao(data, this._quantidade, this._valor);
		console.log(negociacao);
	}
}