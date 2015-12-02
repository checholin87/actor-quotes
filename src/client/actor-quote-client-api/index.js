export default class ActorQuoteClientApi {
	
	constructor($) {
		this.$ = $ || null;
		if(!!!$) {
			throw new Error('JQuery API is required!');
		}
	}

	getQuotes( fn) {
		this.$.ajax('/quotes', {
			success: (shows, textStatus, xhr) => {
					fn(null, shows)
				},
			error: ( xhr, textStatus, errorThrown) => {
				fn(new Error( textStatus), null);
			}
		});
	}
}