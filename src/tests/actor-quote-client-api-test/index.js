import ActorQuoteClientApi from '../../client/actor-quote-client-api';
import $ from 'jquery';

describe('ActorQuoteClientApi', () => {

	it(' can\'t be created with a null param', () => {
		expect( ActorQuoteClientApi).toThrow();
	});

	it(' query the \'/quotes\' endpoint', () => {

		spyOn($, 'ajax').and.callFake( (url, options) => {
			expect( url).toEqual( '/quotes');
		}); 
		
		let api = new ActorQuoteClientApi( $);
		api.getQuotes( () => {});

	});

	it(' can query quotes with $ ajax success function', () => {

		spyOn($, 'ajax').and.callFake( (url, options) => {
			options.success( [], null, null);
		}); 
		
		let fn = jasmine.createSpy();
		let api = new ActorQuoteClientApi( $);

		api.getQuotes( fn);

		expect( fn).toHaveBeenCalledWith( null, []);
	});

	it(' can query quotes with $ ajax error function', () => {

		spyOn($, 'ajax').and.callFake( (url, options) => {
			options.error( null, 'Jasmine Spy Mock Error', null);
		}); 
		
		let api = new ActorQuoteClientApi( $);

		api.getQuotes( (err, quotes) => {
			expect( quotes).toBeNull();
			expect( err).toEqual( jasmine.any( Error));
			expect( err.message).toEqual( 'Jasmine Spy Mock Error');
		});

	});
});