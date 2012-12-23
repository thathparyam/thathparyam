define([], function() {
	return {
		"views": {
			"login": {
				"viewClass": "tp/views/LoginView",
				"presenterClass": "tp/presenters/LoginPresenter"
			},
			
			"list": {
				"viewClass": "tp/views/ListView",
				"presenterClass": "tp/presenters/ListPresenter"
			}
		},
		
		"models": {
			"patient": "tp/models/PatientModel",
			"doctor": "tp/models/DoctorModel",
			"insurance": "tp/models/InsuranceModel"
		}
		
	};
});