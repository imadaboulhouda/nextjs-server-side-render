const PostId=({data})=>{
    return (<div>data is {data.userId} - {data.id} - {data.title } - { data.completed }</div>)
}
export async function getServerSideProps({params}) {
  // Fetch data from external API
  const p = await fetch("https://jsonplaceholder.cypress.io/todos/"+params.id);
  const rep = await p.json();
  console.log(rep);
  return { props: { data:rep } }
}

export default PostId;