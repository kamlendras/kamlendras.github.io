import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import Stack from '@mui/material/Stack';
const Social = () => {
  return (
    <Stack direction="row" spacing={2}>
    {/* <span> <Link href="https://www.instagram.com/cod_nap" passHref legacyBehavior>
<div className={styles.FooterLinky}>
  
    <img src="/social/instagram.svg" height={30} width={30} />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>

</Link></span> */}
{/* <span>
<Link href="https://www.youtube.com/@codnap" passHref legacyBehavior>
  <div className={styles.FooterLinky}>
    
      <img src="/social/youtube.svg" height={30} width={30} />
      <span style={{ marginLeft: "10px" }}></span>
    
  </div>
</Link>
</span> */}
{/* <span>  <Link href="https://www.facebook.com/codnap" passHref legacyBehavior>
<div className={styles.FooterLinky}>
  
    <img src="/social/facebook.svg" height={26} width={26} />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>
</Link></span> */}
<span> <Link href="https://liberapay.com/KSingh" passHref legacyBehavior>
<div className={styles.FooterLinkt}>
  
    <img src="/social/libra.svg" height={35} width={35} />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>
</Link></span>
<span>  <Link href="https://www.patreon.com/KSingh" passHref legacyBehavior>
<div className={styles.FooterLinkl}>
  
    <img src="/social/pato.svg" height={35} width={35} />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>
</Link></span>
<span>  <Link href="https://www.buymeacoffee.com/ksingh" passHref legacyBehavior>
<div className={styles.FooterLinkl}>
  
    <img src="/social/co.svg" 
    height={35} width={35} 
    />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>
</Link></span>
<span>  <Link href="https://mstdn.social/@ksingh" passHref legacyBehavior>
<div className={styles.FooterLinkl}>
  
    <img src="/social/mastodon.svg" height={35} width={35} />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>
</Link></span>
<span>
<Link href="https://www.github.com/ksinghofficial/" passHref legacyBehavior>
  <div className={styles.FooterLink}>
    
      <img src="/social/github.svg" height={35} width={35} />
      <span style={{ marginLeft: "10px" }}></span>
    
  </div>
</Link></span>






</Stack>
  );
};
      export default Social;