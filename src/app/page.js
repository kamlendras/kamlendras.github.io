import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {/* Get started by editing&nbsp; */}
          <code className={styles.code}>K Singh</code>
        </p>
        <div>
          <a
            href="github.com/ksinghofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="./icon.svg"
              alt="ksingh"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="./icon.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className={styles.grid}>
      <Link href="/hire">
        <div
          
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            hire me <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </div>
</Link>
<Link href="/contact">
        <div
          
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            contact me <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </div>
        </Link>
        <Link href="/support">
        <div
          
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          support me <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </div>
        </Link>
        <Link href="/portfolio">
        <div
         
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            portfolio <span>-&gt;</span>
          </h2>
          <p>
           Founder of codnap / STREETSFOODS .
          </p>
        </div>
        </Link >
      </div>
    </main>
  )
}
