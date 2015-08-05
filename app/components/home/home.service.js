let homeService = function($http){
    this.getContacts = function(){
        return $http.get('/slides.json');
    };
    this.saveContacts = function(){
    }
};
export default homeService;