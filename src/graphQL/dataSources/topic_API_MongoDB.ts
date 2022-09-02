import { MongoDataSource } from 'apollo-datasource-mongodb'
import {TopicSchemaDocument} from './model'

// export interface TopicAPIDataSources{
//   getTopics : () => any;
// }

export default class TopicAPI extends MongoDataSource<TopicSchemaDocument>{
  
  async getTopics() {
    return await this.model.find();
  }
  

  //more method can be implemented here
}

