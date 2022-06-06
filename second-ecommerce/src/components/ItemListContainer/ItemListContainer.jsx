import ItemCount from "../ItemCount.js/ItemCount";

export default function ItemListContainer({greeting}) {
  return (
    <>
        <div>{greeting}</div>
        <ItemCount stock ="10" initial = '1' />
    </>
  )
}
