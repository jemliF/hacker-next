import React from 'react';
import Error from 'next/error';
import Link from 'next/link';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

class Index extends React.Component {
    static async getInitialProps({req, res, query}) {
        console.log(query);
        let stories, page;
        try {
            page = Number(query.page) || 1;
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
            stories = await response.json();
        } catch (err) {
            console.error(err);
            stories = [];
        }

        return {page, stories};
    }

    render() {
        const {page, stories} = this.props;
        if (!stories || stories.length === 0) {
            return <Error statusCode={503}/>
        }
        return (
            <Layout title="Hacker Next" description="Hacker News Clone with Next">
                <StoryList stories={stories}/>
                <footer>
                    <Link href={`/?page=${page + 1}`}>
                        <a>Next page ({page + 1})</a>
                    </Link>
                </footer>
                <style jsx>
                    {
                        `
                          footer {
                            padding: 1em;
                          }
                          footer a {
                            font-weight: bold;
                            color: black;
                            text-decoration: none;
                          }
`
                    }
                </style>
            </Layout>
        );
    }
}

export default Index;