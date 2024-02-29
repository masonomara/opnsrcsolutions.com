import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <video
        src={"opnsrc.mp4"}
        autoPlay
        playsInline
        muted
        loop
        controls={false}
        className={styles.video}
      />
      

      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <div className={styles.logo}>
            <Image src={"/oss.png"} alt={"OSS"} fill />
          </div>
          <h1 className={styles.logoTitle}>
            OpenSource
            <br />
            Solutions
          </h1>
          {/* <p>
            Software solutions company available for work March 2024. Scope
            includes design and development of apps, websites, e-commerce.
          </p> */}
        </div>
      </div>
    </main>
  );
}
