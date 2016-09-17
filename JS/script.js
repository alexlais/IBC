var myApp = angular
	.module("IBC", [])
	.controller("myController", function ($scope) {
		var banners = { 
			bannerHistory: "images/bannerHistory.jpg",
			bannerHistoryTitle: "",
			
			bannerReferences: "images/bannerReferences.jpg",
			bannerReferencesTitle: "",
			
			bannerContact: "images/bannerContact.jpg",
			bannerContactTitle: "",
			
			bannerServicesCorporate: "images/bannerServicesCorporate.jpg",
			bannerServicesCorporateTitle: "",
			bannerServicesTax: "images/bannerServicesTax.jpg",
			bannerServicesTaxTitle: "",
			bannerServicesMergers: "images/bannerServicesBusiness.jpg",
			bannerServicesMergersTitle: "",
			bannerServicesRealstate: "images/bannerServicesRealstate.jpg",
			bannerServicesRealstateTitle: "",
			bannerServicesInvestment: "images/bannerServicesInvestment.jpg",
			bannerServicesInvestmentTitle: "",
			bannerServicesFiduciary: "images/bannerServicesFiduciary.jpg",
			bannerServicesFiduciaryTitle: "",
			bannerServicesNetworks: "images/bannerServicesNetworks.jpg",
			bannerServicesNetworksTitle: "",

			bannerHistoryLang: "../images/bannerAbout.jpg",
			bannerReferencesLang: "../images/bannerReferences.jpg",
			bannerContactLang: "../images/bannerContact.jpg",
			bannerServicesCorporateLang: "../images/bannerServicesCorporate.jpg",
			bannerServicesTaxLang: "../images/bannerServicesTax.jpg",
			bannerServicesMergersLang: "../images/bannerServicesBusiness.jpg",
			bannerServicesRealstateLang: "../images/bannerServicesRealstate.jpg",
			bannerServicesInvestmentLang: "../images/bannerServicesInvestment.jpg",
			bannerServicesFiduciaryLang: "../images/bannerServicesFiduciary.jpg",
			bannerServicesNetworksLang: "../images/bannerServicesNetworks.jpg",
			bannerServicesSecuredLang: "../images/bannerServicesSecured.jpg",
		};
		$scope.banners = banners;
	}
);