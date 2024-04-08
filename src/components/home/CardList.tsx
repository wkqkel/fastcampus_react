import ListRow from '@shared/ListRow'

function CardList() {
  return (
    <div>
      <ul>
        <ListRow
          left={'left'}
          contents={<ListRow.Texts title="타이틀" subTitle="섭타이틀" />}
          right={'right'}
          withArrow
        />
      </ul>
    </div>
  )
}

export default CardList
