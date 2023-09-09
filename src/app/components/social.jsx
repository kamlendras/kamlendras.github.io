import styles from "../styles/Footer.module.scss";
import Link from 'next/link'
import Stack from '@mui/material/Stack';
const Social = () => {
  return (
    <Stack direction="row" spacing={2}>
    
 <Link href="https://liberapay.com/KSingh" >
<img src="/social/libra.svg" height={35} width={35} />


</Link>
  <Link href="https://www.patreon.com/KSingh" >
  
    <img src="/social/pato.svg" height={35} width={35} />
    
</Link>
  <Link href="https://www.buymeacoffee.com/ksingh" >
  
    <img src="/social/cob.svg" 
    height={35} width={35} 
    />
    
</Link>
 <Link href="https://mstdn.social/@ksingh" >
    <img src="/social/mastodon.svg" height={35} width={35} />

</Link>

<Link href="https://www.github.com/ksinghofficial/" >
  
    
      <img src="/social/githubwhite.svg" height={35} width={35} />
      
</Link>






</Stack>
  );
};
      export default Social;