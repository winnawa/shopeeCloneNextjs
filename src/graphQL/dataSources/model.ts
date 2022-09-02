import mongoose, {ObjectId, Document } from "mongoose";
const Schema = mongoose.Schema;


//Topics Schema In Search Bar
const topicSchema = new Schema({
    content : String,
});
export interface TopicSchemaDocument extends Document {
    content: string;
}
export const TopicModel = mongoose.models.Topic || mongoose.model<TopicSchemaDocument>("Topic", topicSchema, 'searchTopic');



//HotEvents Schema In Hot Event
const hotEventSchema = new Schema({
    name : String,
    time : String,
    topics : [String]!,
    description : String,
    imgURL : String
});

export interface HotEventSchemaDocument extends Document {
    name : string;
    time : string;
    topics : string[];
    description : string;
    imgURL : string;
}

export const HotEventModel = mongoose.models.HotEvent || mongoose.model<HotEventSchemaDocument>("HotEvent", hotEventSchema, 'hotEvents');


//Notification Schema In Notification
const notificationSchema = new Schema({
    event : String!,
    action : String!,
});

export interface NotificationSchemaDocument extends Document {
    event : string;
    action : string;
}

export const NotificationModel = mongoose.models.Notification || mongoose.model<NotificationSchemaDocument>("Notification", notificationSchema, 'notification');

