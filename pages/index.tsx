import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Donda.AI</title>
        <title>Donda.AI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.navbar}>
        <ul className={styles.navList}>
          {/* <li className={styles.navItem}>
            <Link href="https://nextjs.org">
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="https://nextjs.org">
            <span>About</span>
            </Link>
          </li> */}
          <li className={styles.navItem}>
            <Link href="https://nextjs.org">
              <span>DondaAI.com</span>
            </Link>
          </li>
        </ul>
      </header>

      <main className={styles.main}>
       
        <div className={styles.description}>
        </div>

        <div>
          <h1>
            Chat with DondaAI
          </h1>
          
          {/* <Image
            // className={styles.logo}
            src="/logo.png"
            alt="Next.js Logo"
            width={400}
            height={400}
            priority
          /> */}
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <div className={styles.align}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>
            <h2>
              Chat Bot 🤖️
            </h2>
            <p>
              与人工智能聊天机器人灵魂对话
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <div className={styles.align}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>
            <h2>
              文档助手 📚
            </h2>
            <p >
              AI分析PDF、CSV、Word 高效办公
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <div className={styles.align}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>
            <h2>
              灵魂画家 🎨
            </h2>
            <p>
              文字转艺术品 让您的创意触手可得
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <div className={styles.align}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>
            <h2>
            智能翻译 ✍️
            </h2>
            <p >
            随时随地跨越一切语言障碍
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
