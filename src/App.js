import Header from './components/UI/Header/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Header variant='menu' />
      <Header variant='search' blocked />
      <Header
        variant='search'
        selectVariant='teacher'
        selected
        selectedCount={5}
      />
      <Header variant='search' selected selectedCount={5} />
    </div>
  )
}
export default App
