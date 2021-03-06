class NegociacaoController {

	constructor(){
		let $ = document.querySelector.bind(document);

		this._data = $('#data');
		this._quantidade = $('#quantidade');
		this._valor = $('#valor');
		this._negociacoes = new ListaNegociacoes();

		this._negociacaoView = new NegociacoesView($('#negociacoesView'));
		this._negociacaoView.update(this._negociacoes.negociacoes);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
	}

	adiciona(event){
		event.preventDefault();
		
		this._negociacoes.adiciona(this._criaNegociacao());	
		this._negociacaoView.update(this._negociacoes.negociacoes);
		this._mensagem.texto = 'Negociação adicionada com sucesso';
		this._mensagemView.update(this._mensagem);
		this._limparFormulario();

		console.log(this._negociacoes);
	}

	_criaNegociacao(){
		let data = DateHelper.textoParaData(this._data.value);
		return new Negociacao(data, this._quantidade.value, this._valor.value);
	}

	_limparFormulario(){
		this._data.value = '';
		this._quantidade.value = 1;
		this._valor.value = 0.0;
		this._data.focus();
	}
}