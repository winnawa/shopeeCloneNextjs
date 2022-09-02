import { MongoDataSource } from 'apollo-datasource-mongodb'
import { HotEventSchemaDocument } from './model';

// export interface TopicAPIDataSources{
//   getTopics : () => any;
// }

export default class HotEventAPI extends MongoDataSource<HotEventSchemaDocument>{
  
  async getHotEvent(nameValue : string) {
    return await this.model.findOne({name : nameValue});
  }
  
    // async getHotEvent() {
    //     return await this.model.find();
    // }

  //more method can be implemented here
}

