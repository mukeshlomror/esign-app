import React,{useState} from 'react';

import Title from "./components/Title";


function App() {

  const [name,setName] = useState("mukesh");
  const [date,setDate] = useState("DOB");

  return (
    <div className="container-fluid">
      <h1 className="text-center">Signature app</h1>
    
      <Title text={date} />
      <Title text={name} />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, corporis. Vero quam commodi, ipsam iusto dignissimos ratione ad illum provident dolore incidunt quaerat sequi, corporis voluptates ea suscipit adipisci fugit, pariatur distinctio ipsa ut tempora. Nulla recusandae error voluptatum voluptate dolorem hic tempora incidunt optio, exercitationem tenetur. Nulla, nostrum numquam. Iste at explicabo incidunt tenetur odio dicta quidem, repellendus ad!</p>
      <div className="d-flex input-boxes">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
    
  );
}

export default App;
