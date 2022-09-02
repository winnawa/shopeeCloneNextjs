import { gql} from "apollo-server";
// topics : [String!]! in Notification
export const typeDefs = gql`
    type Notification{
        id  :  ID!,
        event : String!,
        action : String!
    }
    type HotEvent{
        id :  ID!,
        name : String!,
        time : String,
        topics  : [String!]!,      
        description :  String,
        imgURL  : String
    }    
    type Topic{
        id : ID!,
        content : String,
    }
    type Item{
        id : ID!,
        title : String!,
        description : String!,
        image : String,
    }
    type RawData{
        data : [Item],
    }
    type Query{
        getTopics : [Topic]!,
        getItems :  RawData,
        getHotEvent(name : String!): HotEvent,
        getNotification : [Notification!]!,
    }
    type Mutation{
        postNotification(event : String!, action : String!) : Notification
    }

`

//export default typeDefs;