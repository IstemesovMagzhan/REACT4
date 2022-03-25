
import Paragraph from './components/Paragraph/Paragraph';
import Image from './components/Image/Image';
import koalaImage from './assets/koala.jpg';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className="App">
      <h1>Hello Wold</h1>
      
      

      <Alert success>This is a sample Alert</Alert>
      <Alert danger>This is a sample Alert</Alert>
      <Image align="left" url={koalaImage} width="150px" height="100px"/>
      <Image align="right" url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Cutest_Koala.jpg/200px-Cutest_Koala.jpg" width="150px" height="100px"/>
      <Paragraph size="14px">This is sample Paragraph</Paragraph>
      <Paragraph size=".5rem">This is sample Paragraph</Paragraph>
      <Paragraph color="red" size="3rem">This is sample Paragraph</Paragraph>
      
    </div>
  );
}

export default App;
