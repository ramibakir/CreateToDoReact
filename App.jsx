import React from 'react';
// import CompletedList from './src/components/CompletedList';
import Modal from './src/components/Modal';
import Navbar from './src/components/Navbar';
// import Search from './src/components/Search';
import Title from './src/components/Title';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';

const App = () => (
  // const [search, setSearch] = useState('');

  // const handleSearch = (event) => {
  //   setSearch(event.target.value);
  // };

  <>
    <Navbar>
      <Title />
    </Navbar>
    <TodoButton>
      <Modal />
    </TodoButton>
    <TodoCardList />
    {/* <CompletedList>
        <Search handleSearch={handleSearch} search={search} />
        <button type="button">Find todo</button>
      </CompletedList> */}
  </>
);
export default App;
