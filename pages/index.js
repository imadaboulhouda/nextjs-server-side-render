 import Head from 'next/head';
 import styles from '../styles/imad.module.css';
 const Index = ({data})=>{
  return (
  <>
  <Head>
    <title>Imad</title>
  </Head>
  <div className={styles.liste} >
    {data.map((d,index)=>{
    return (<div key={index}>
      <a href={"posts/"+d.id} >{d.title }</a></div>)
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