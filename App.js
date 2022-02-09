
class App extends React.Component{
render(){
  return(
    
<div>
  <Dashboard/>
  <Widget/>
  <Reviews/>
  <Customers/>
  <Online Analysis/>
  <Setting/>

</div>
    
  )    
}
}
class Dashboard extends React.Component {
  render(){
    return(
      <div>
        <h2>Dashboard</h2>
        <li></li>
      </div>
  /'<'
  )
  }
}
  

  ReactDOM.render(<App/>,document.getElementById('root'));