 import Head from 'next/head';
 import styles from '../styles/imad.module.css';
 import Item from '../components/Item';
 const Index = ({data})=>{
  return (
  <>
  <Head>
    <title>Imad</title>
  </Head>
  <div className={styles.liste} >
    {data.map((d,index)=>{
    return (<Item  key={index} data={d}/>)
  })}
  </div>
  
  
  </>)
}

export async function getServerSideProps() {
  // Fetch data from external API
  const p = await fetch("https://jsonplaceholder.cypress.io/todos");
  const rep = await p.json();
  console.log(rep);
  return { props: { data:rep } }
}
export default Index;