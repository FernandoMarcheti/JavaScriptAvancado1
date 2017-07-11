class ArquivoController {

	constructor(){
		this._inputDados = document.querySelector('.dados-arquivo');
	}

	envia() {
        //cria um Arquivo com as suas propriedades;
        let arquivo = new Arquivo(...this._inputDados.value.toUpperCase().split('/'));
        console.log(arquivo.nome);
        console.log(arquivo.tamanho);
        console.log(arquivo.tipo);

        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }

}