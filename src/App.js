
import Paragraph from './components/Paragraph/Paragraph';
import Image from './components/Image/Image';
import koalaImage from './assets/koala.jpg';

function App() {
  return (
    <div className="App">
      <h1>Hello Wold</h1>

      <Paragraph size="14px">This is sample Paragraph</Paragraph>
      <Paragraph size=".5rem">This is sample Paragraph</Paragraph>
      <Paragraph color="red" size="3rem">This is sample Paragraph</Paragraph>
      <Image url={koalaImage} width="150px" height="100px"/>
    </div>
  );
}

export default App;
