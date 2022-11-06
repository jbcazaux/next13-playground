import Head from 'next/head'
import styles from '../styles/Page.module.css'
import {getHello} from "./api/hello";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

interface Props {
    text: string
}

const Page2 = ({text}: Props) => {
    const {t} = useTranslation('common');
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App - Page 2</title>
                <meta name="description" content="next playground"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1>{text}!</h1>
            <div>{t('foo.bar')}</div>
            <Link href="/page1" className={styles.link}>
                Page1
            </Link>
        </div>
    );
}

export default Page2

interface GetServerSideProps {
    locale: string
}

export async function getServerSideProps(context: GetServerSideProps) {
    const data = await getHello('page 2')

    return {
        props: {
            ...(await serverSideTranslations(context.locale, ['common'])),
            text: data
        },
    }
}
