define(['dojo/request/xhr'], function (xhr) {

	return {
		getModel: function (args) {
			if ( !args.serviceName || !args.serviceMethod ) throw Error('Illegal Arguments');

			return xhr(args.serviceName + '/' + args.serviceMethod, {
				handleAs: 'json',
				query: args.serviceMethodArgs,
				preventCache: true
			});
		}
	};

});