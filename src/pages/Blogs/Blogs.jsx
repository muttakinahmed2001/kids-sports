import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="mx-auto p-5">
      <h1 className="text-3xl">
        1.What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h1>
      <h3 className="text-xl">
        Ans: Access token is a token which is used in token-based authentication
        to allow an application to access an API and the refresh token is used
        to generate a new access token.
        <span className="font-bold"> #Working process of access token</span>
        At first user have to login with a known username and password to prove
        his or her identity.Then the server authenticates the data and issues a
        token. Then the token is sent to user browser for storage.Every time if
        user access something new on the server , user token is verified once
        more. That's how access token work.
        <span className="font-bold"> #Working process of refresh token</span>
        If the access token has an expiration date, once it expires, the user
        would have to authenticate again to obtain an access token.For that user
        have to send a token request with a grant_type of refresh_token . User
        should be sure to include the openid scope when he/she want to refresh
        the ID token. If the refresh token is valid, then he/her can get back a
        new access and the refresh token. We can store them on the client side
        in local storage and session storage.
      </h3>

      <h1 className="text-3xl">2.Compare SQL and NoSQL databases?</h1>
      <h3 className="text-xl">
        Ans: SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable. SQL databases are table-based, while NoSQL
        databases are document, key-value, graph, or wide-column stores. SQL
        databases are better for multi-row transactions, while NoSQL is better
        for unstructured data like documents or JSON.{" "}
      </h3>

      <h1 className="text-3xl">3.What is express.js?What is Nest js?</h1>
      <h3 className="text-xl">
        Ans: <span className="font-bold">Express.js</span>
        Express.js is a framework of node.js.
      </h3>
      <h3 className="text-xl">
        <span className="font-bold">Nest.js</span>Nest. js is one of the
        fastest-growing Node. js frameworks for building efficient, scalable,
        and enterprise-grade backend applications using Node. js.
      </h3>

      <h1 className="text-3xl">
        4.What is MongoDB aggregate and how does it work?
      </h1>
      <h3 className="text-xl">
        Ans: Aggregation is a way of processing a large number of documents in a
        collection by means of passing them through different stages. The stages
        make up what is known as a pipeline. The stages in a pipeline can
        filter, sort, group, reshape and modify documents that pass through the
        pipeline.The input of the pipeline can be a single collection, where
        others can be merged later down the pipeline. The pipeline then performs
        successive transformations on the data until our goal is achieved. This
        way, we can break down a complex query into easier stages, in each of
        which we complete a different operation on the data. So, by the end of
        the query pipeline, we will have achieved all that we wanted.
      </h3>
    </div>
  );
};

export default Blogs;
