// 型のために導入
import { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next'
// Next.jsの組み込みのコンポーネント
import Head from 'next/head'

// ページコンポーネントのpropsの型定義（ここでは空）
type SSGProps ={
    message: string
}

// SSG向けページ
// NextPageはNext.jsのPage向けの型
// NextPage<props>でpropsが入るPageであることを明示
// const SSG: NextPage<SSGProps> = (props) => {
//     const { message } = props
//     return (
//         <div>
//             <Head>
//                 <title>Static Site Generation</title>
//                 <link rel="icon" href="../favicon.ico" />
//             </Head>
//             <main>
//                 <p>
//                     このページは静的サイト生成によってビルド字に生成されたページです
//                 </p>
//                 <p>{message}</p>
//             </main>
//         </div>
//     )
// }

// export const getStaticProps: GetStaticProps<SSGProps> = async(context) => {
//     const timestamp = new Date().toLocaleString()
//     const message = `${timestamp} にgetStaticPropsが実行されました`
//     console.log(message)
//     return {
//         props: {
//             message,
//         },
//     }
// }

// export default SSG
