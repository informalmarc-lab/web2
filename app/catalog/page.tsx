import Image from "next/image";
import Button from "@/components/Button";
import styles from "./page.module.css";

const gallery = [
  "https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/nexxxtleveltalentagency.com/wp-content/uploads/2025/09/anna-kolba-00006-480x720.webp",
  "https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/nexxxtleveltalentagency.com/wp-content/uploads/2025/09/anna-kolba-00003-480x720.webp",
  "https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/nexxxtleveltalentagency.com/wp-content/uploads/2025/09/anna-kolba-00008-768x1175.webp",
  "https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/nexxxtleveltalentagency.com/wp-content/uploads/2025/09/anna-kolba-00007-480x720.webp",
  "https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/nexxxtleveltalentagency.com/wp-content/uploads/2025/09/anna-kolba-00005-480x720.webp",
  "https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/nexxxtleveltalentagency.com/wp-content/uploads/2025/09/anna-kolba-00010-480x720.webp",
  "https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/nexxxtleveltalentagency.com/wp-content/uploads/2025/09/anna-kolba-00009-480x720.webp",
];

export default function CatalogPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.notice}>
            This site is getting updated — but here&apos;s our first.
          </p>
          <h1>Elena Moire</h1>
          <p className={styles.subhead}>
            Start within 2 hours. We&apos;ll guide you from setup to go-live with
            real support.
          </p>
          <div className={styles.stats}>
            <div>
              <span>Age:</span>
              <strong>38</strong>
            </div>
            <div>
              <span>Height:</span>
              <strong>5&apos; 5&quot;</strong>
            </div>
            <div>
              <span>Weight:</span>
              <strong>120 lbs</strong>
            </div>
            <div>
              <span>Measurements:</span>
              <strong>38-25-36</strong>
            </div>
            <div>
              <span>Dress Size:</span>
              <strong>XS</strong>
            </div>
            <div>
              <span>Shoe Size:</span>
              <strong>8</strong>
            </div>
          </div>
          <Button href="/apply">Apply Now →</Button>
        </div>
        <div className={styles.featureImage}>
          <Image
            src={gallery[0]}
            alt="Elena Moire featured portrait"
            width={900}
            height={1200}
            className={styles.image}
            priority
          />
        </div>
      </section>

      <section className={styles.gallery}>
        {gallery.slice(1).map((src) => (
          <Image
            key={src}
            src={src}
            alt="Elena Moire gallery photo"
            width={720}
            height={1100}
            className={styles.image}
          />
        ))}
      </section>
    </div>
  );
}
