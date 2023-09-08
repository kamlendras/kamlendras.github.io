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
<span> <Link href="https://twitter.com/cod_nap" passHref legacyBehavior>
<div className={styles.FooterLinkt}>
  
    <img src="/social/twitter.svg" height={26} width={26} />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>
</Link></span>
<span>  <Link href="https://pinterest.com/cod_nap/" passHref legacyBehavior>
<div className={styles.FooterLinkl}>
  
    <img src="/social/pint.svg" height={26} width={26} />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>
</Link></span>
<span>  <Link href="https://www.snapchat.com/cod_nap/" passHref legacyBehavior>
<div className={styles.FooterLinkl}>
  
    <img src="/social/LinkedIn-Blue-26@2x.png" 
    // height={26} width={26} 
    />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>
</Link></span>
<span>  <Link href="https://www.linkedin.com/in/codnap/" passHref legacyBehavior>
<div className={styles.FooterLinkl}>
  
    <img src="/social/linkedin.svg" height={26} width={26} />
    <span style={{ marginLeft: "10px" }}></span>
  
</div>
</Link></span>
<span>
<Link href="https://www.github.com/codnap/" passHref legacyBehavior>
  <div className={styles.FooterLink}>
    
      <img src="/social/githubwhite.svg" height={26} width={26} />
      <span style={{ marginLeft: "10px" }}></span>
    
  </div>
</Link></span>






</Stack>
  );
};
      export default Social;