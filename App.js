
class App extends React.Component{
render(){
  return(
    
<div class="container">
  <Dashboard/>,
  <Reviews/>,
  <AverageRating/>,
  <SentimentAnalysis/>,
  <WebsiteVisitors/>,


</div>
  );
  }
} 

class Dashboard extends React.Component {
  render(){
    return(
      <div class="Dashboard"> 
        
      <li>  
        <ul> Dashboard </ul>
        <ul> Widgets </ul>
        <ul> Reviews </ul>
        <ul> Customers </ul>
        <ul> Online Analysis </ul>
        <ul> Settings </ul>

      </li>
      </div>
  
  );
  }
}
 class Reviews extends React.Component{
    render(){
      return(
        <div class ="Reviews">
          
              <p>1,281</p>
        
        </div>
      );
    }
 } 
 class AverageRating extends React.Component{
  render(){
    return(
      <div class ="AverageRating">
        
          <p>4.6</p>
      
      </div>
    )
  }
} 
class SentimentAnalysis extends React.Component{
  render(){
    return(
      <div class ="SentimentAnalysis">
        
          <p>960</p>
          <p>122</p>
          <p>321</p>
      
      </div>
    )
  }
} 
class WebsiteVisitors extends React.Component{
  render(){
    return(
      <div class ="WebsiteVisitors">
        
          <p>821</p>
        
        <div class ="innerBox"></div>  

      </div>
    );
   }
 } 
 




  ReactDOM.render(<App/>,document.getElementById('root'));
