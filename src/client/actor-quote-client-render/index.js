const template = `<article data-id=:id:>
		<div>
			<p>:description:</p>
			<small>:actor:</small>
		</div>
	</article>`;

export default class ActorQuoteClientRender {

	constructor( $container) {
		this.$container = $container || null;
		if(!!!$container) {
			throw new Error('A JQuery component to append is required!');
		}
	}

	render( quotes) {

		var $container = this.$container;

		quotes.forEach( ( quote) => {
			var article = template.replace(":id:", quote.id).
				replace(":description:", quote.description).
				replace(":actor:", quote.actor);

			$container.append( article);
		});
	}
}