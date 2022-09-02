//import { IDataSources } from "./dataSources/index";

// type Context = { 
//   dataSources: IDataSources;  // put it on your context definition
// };

const resolvers =  {
    Query : {
        getTopics  :  async (_ : any ,__ : any, {dataSources} :  any) =>{
          //Context
          return await dataSources.topicsAPI.getTopics();
        },


        getItems :         (_ : any ,__ : any, {dataSources} : any) =>{
          return dataSources.artsAPI.getToursRawData();

        }, 

        getHotEvent :  async (_ : any ,args : any, {dataSources} :  any) =>{
          return await dataSources.hotEventAPI.getHotEvent(args.name);
        },
        getNotification : async (_ : any ,args : any, {dataSources} :  any) =>{
          return await dataSources.notificationAPI.getNotification();
        }, 
    },
    Mutation : {
        postNotification : async(_ : any ,args : any, {dataSources} :  any) =>{
          return await dataSources.notificationAPI.postNotification(args.event, args.action);
          
        },
    }
}
export default resolvers;