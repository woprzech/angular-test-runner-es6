class HomeCtrl {
	
    constructor() {
	  this.test = 'Hello World';
        
      this.model = '';
      this.indicator = 'Saved.';
	}
    
    counter(){
        return 1000 - this.model.length;
    } 
   
    save(){
        this.indicator = 'Saving...';
        $http.put('/my/endpoint', {notes: this.model})
            .then(() => this.indicator = 'Saved.')
            .catch(() => this.indicator = 'Not saved.');
    };

	
}

export default HomeCtrl;
