import Layout from "../components/Layout";


export default ({statusCode}) => (
    <Layout title="Error">
{
   statusCode
   ? `Could not load your user data: Status Code is ${statusCode}` 
   : <p> Could not get page. Sorry!!!</p>
}
    </Layout>
)