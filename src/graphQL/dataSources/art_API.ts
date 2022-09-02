import {RESTDataSource} from 'apollo-datasource-rest'

export interface ArtAPIDataSources{
    getToursRawData : () => any;
  }

class ArtsAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://api.artic.edu/api/v1/"
    }

    getToursRawData(){
        return this.get("tours")
    }
    
}

export default ArtsAPI;