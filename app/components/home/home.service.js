import Firebase from 'firebase'

let homeService = function($http,$q,$rootScope){

    //initialize fireBase with document "myContacts"
    this.myFirebase = new Firebase("https://effective.firebaseio.com/myContacts");

    this.getContacts = function(){
        var fireBase = this.myFirebase;
        return $q(function(resolve, reject) {
            fireBase.on("value", function(snapshot) {
                resolve(snapshot.val());
            });
        });
    };

    this.saveContacts = function(contacts){
        var fireBase = this.myFirebase;
        return $q(function(resolve, reject) {
            var ref = fireBase.push(contacts);
            // Get the unique ID generated by push()
            var contactKey = ref.key();
            resolve(contactKey);
        });
    };

    this.updateContacts = function(contacts){
        var fireBase = this.myFirebase;
        return $q(function(resolve, reject) {
            fireBase.set(contacts);
        });
    };


    this.getCountries = function(){
        return $q(function(resolve, reject) {

            if($rootScope.countries){
                resolve($rootScope.countries);
            }
            else{
                $http.get('http://services.groupkt.com/country/get/all').success(function(countries){
                    $rootScope.countries = countries;
                    resolve(countries)
                })
            }

        })
    };
    this.getStates = function(countryCode){
        return $http.get('http://services.groupkt.com/state/get/'+countryCode+'/all');
    };

};
export default homeService;