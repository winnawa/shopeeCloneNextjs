import {ApolloServer} from 'apollo-server'
import {typeDefs} from '../../src/graphQL/typeDefs';
import resolvers from '../../src/graphQL/resolvers';
import TopicAPI from '../../src/graphQL/dataSources/topic_API_MongoDB';
import { NotificationModel, TopicModel } from '../../src/graphQL/dataSources/model';
import mongoose from 'mongoose';
import ArtsAPI from '../../src/graphQL/dataSources/art_API';
import HotEventAPI from '../../src/graphQL/dataSources/hotEvent_API_MongoDB';
import { HotEventModel } from '../../src/graphQL/dataSources/model';
import NotificationAPI from '../../src/graphQL/dataSources/notification_API_MongoDB';
const dataSources = ()=>(
    {
        topicsAPI: new TopicAPI(TopicModel),
        artsAPI : new ArtsAPI(),
        hotEventAPI : new HotEventAPI(HotEventModel),
        notificationAPI : new NotificationAPI(NotificationModel)
    } 
    
) 

const uri = "mongodb+srv://namkhoa:namkhoapro@cluster0.8p7d3.mongodb.net/shopeeClone?retryWrites=true&w=majority";
const main = async () => {
  await mongoose.connect(uri)
};
main()
  .then(()=>{console.log('🎉 connected to database successfully')})
  .catch(error => console.error(error));



const server = new ApolloServer({
    typeDefs, 
    resolvers,
    dataSources
});

server.listen().then(()=>{
    console.log(`Hi am listening`)

})
// server.listen({ port: 4000 }).then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
// });