let homeService = function($http){
    this.getContacts = function(){
    };
    this.saveContacts = function(){
    };
    this.getCountries = function(){
        return $http.get('http://services.groupkt.com/country/get/all')
    };
    this.getStates = function(countryCode){
        return $http.get('http://services.groupkt.com/state/get/'+countryCode+'/all');
    };
};
export default homeService;