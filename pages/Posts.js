const Posts = ({articles}) => {
    return ( 
        <div>
        <h3>Posts</h3>

        {articles.map((article) => (
        <h4>{article.title}</h4>)
        )}
        </div>
     );
}
 
export default Posts;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}