import { MongoDataSource } from 'apollo-datasource-mongodb'
import {NotificationModel, NotificationSchemaDocument} from './model'


export default class NotificationAPI extends MongoDataSource<NotificationSchemaDocument>{
    async getNotification() {
        return await this.model.find();
    };
    async postNotification(eventValue : string, actionValue : string) {
        const newNotification = new NotificationModel({event : eventValue, action : actionValue})
        //return await this.model.save(newNotification);
        return newNotification.save()
    }
}