 const Item = ({data})=>{
    return (<div>
      <a href={"posts/"+data.id} >{data.title }</a></div>);
}


export default Item;