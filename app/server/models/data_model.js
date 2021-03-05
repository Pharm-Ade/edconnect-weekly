class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
   getId = this.data.find((element) => element.id === id)
   return (getId? getId:null);
   }

    delete(id){
        let elementsIndex = this.data.find(element => element.id == id )
        if(elementsIndex !== -1){
            this.data.splice(elementsIndex);
            return true;
        }
        else{
            return false;
        }
        
    }
    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

        update(obj, id) {
            let elementsIndex = this.data.find(element => element.id == id )
            if(elementsIndex !== -1){
            obj = this.data[elementsIndex];
            return true; 
            } 
            else{
                return false;
            }  
        }
    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel

