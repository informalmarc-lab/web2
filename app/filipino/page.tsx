import Button from "@/components/Button";
import styles from "./page.module.css";

export default function FilipinoPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Isang pilosopikal na paanyaya</p>
        <h1>Ang dignidad ng sariling pangalan.</h1>
        <p className={styles.lead}>
          Sa mundo ng ingay, ang tunay na yaman ay kontrol. Kontrol sa oras,
          kontrol sa sarili, kontrol sa direksyon ng buhay. Ito ang pinili ng
          Omega: hindi kumuha ng bahagi ng kikitain mo, kundi tulungan kang
          itayo ang sarili mong pangalan.
        </p>
        <Button href="/apply">Magsimula -></Button>
      </section>

      <section className={styles.section}>
        <h2>Ang prinsipyo</h2>
        <p>
          Ang trabaho ay hindi lang kita. Isa itong kwento ng paghuhubog. Kapag
          ikaw ang may hawak ng account, ikaw ang may hawak ng kwento. Kaya ang
          ginagawa namin ay simple: tinatanggal namin ang hadlang, para ikaw ang
          magpatuloy sa landas na pinili mo.
        </p>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>Kalayaan</h3>
          <p>
            Walang kontratang nakatali. Walang quota na nagpapahirap. Ikaw ang
            magpapasya kung kailan, paano, at hanggang saan.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Pagmamay-ari</h3>
          <p>
            Ang account ay sa iyo. Ang kita ay sa iyo. Ang pangalan ay sa iyo.
            Hindi ito tungkol sa amin. Ito ay tungkol sa iyong kinabukasan.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Pag-unlad</h3>
          <p>
            Hindi mo kailangan maging expert. Kailangan mo lang magsimula. At
            kapag nagsimula ka, nandito kami para gabayan ka.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Isang tahimik na pangako</h2>
        <p>
          Hindi namin hawak ang iyong login. Hindi namin hawak ang iyong pera.
          Hindi namin hawak ang iyong identidad. Ang hawak namin ay ang proseso
          para mas madali mong maabot ang kita na para sa iyo.
        </p>
      </section>

      <section className={styles.cta}>
        <div>
          <h2>Handa ka na ba?</h2>
          <p>
            Kung gusto mong magsimula nang may malinaw na direksyon at tunay na
            respeto sa sarili, nandito kami.
          </p>
        </div>
        <Button href="/apply" variant="secondary">Mag-apply ngayon -></Button>
      </section>
    </div>
  );
}
