import $ from 'jquery';
import ActorQuoteClientApi from './actor-quote-client-api';
import ActorQuoteClientRender from './actor-quote-client-render';

$( document).ready( () => {
	let api = new ActorQuoteClientApi( $);
	api.getQuotes( (err, data) => {
		
		if(!!err) {
			Window.alert( err.name + ": " + err.message);
			return;
		}

		$.find('#quotes-container').forEach( (element) => {
			let render = new ActorQuoteClientRender( $( element));
			render.render( data);
		});
	});
});