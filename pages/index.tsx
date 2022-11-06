import Head from 'next/head'
import styles from '../styles/Page.module.css'
import {getHello} from "./api/hello";

interface Props {
    name: string
}

const Index = ({name}: Props) => (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="next playground"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        Hello {name}!
        Index of next Playground

    </div>
)
export default Index

export async function getServerSideProps(context: any) {
    console.log(context)
    const data = await getHello('world from getServerSideProps')

    return {
        props: {name: data},
    }
}
