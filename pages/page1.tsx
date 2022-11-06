import Head from 'next/head'
import styles from '../styles/Page.module.css'
import {getHello} from "./api/hello";
import Link from "next/link";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';

interface Props {
    text: string
}

const Page1 = ({text}: Props) => {
    const {t} = useTranslation('common');

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App - Page 1</title>
                <meta name="description" content="next playground"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1>{text}!</h1>
            <div>{t('hello')}</div>
            <div>{t('foo.bar')}</div>
            <Link href="/page1" locale="fr-fr" className={styles.link}>
                Page1 FR
            </Link>
            <Link href="/page1" locale="en-us" className={styles.link}>
                Page1 EN
            </Link>
            <Link href="/page2" className={styles.link}>
                Page2
            </Link>
        </div>
    );
}

export default Page1

interface GetServerSideProps {
    locale: string
}

export async function getServerSideProps(context: GetServerSideProps) {
    const data = await getHello('page 1')

    return {
        props: {
            ...(await serverSideTranslations(context.locale, ['common'])),
            text: data
        },
    }
}
