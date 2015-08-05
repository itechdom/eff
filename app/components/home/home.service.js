import Firebase from 'firebase'

let homeService = function($http){

    this.myFirebase = new Firebase("https://effective.firebaseio.com/");

    this.getContacts = function(){
    };
    this.saveContacts = function(contacts){
        this.myFirebase.set(contacts);
    };
    this.getCountries = function(){
        return $http.get('http://services.groupkt.com/country/get/all')
    };
    this.getStates = function(countryCode){
        return $http.get('http://services.groupkt.com/state/get/'+countryCode+'/all');
    };
};
export default homeService;