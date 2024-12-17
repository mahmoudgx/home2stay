import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <div className=" relative bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1513052467476-a11357d170a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-auto">
        <Header />
        <hr></hr>
        <Hero />
        <Search />
      </div>
      <About />
    </>
  );
};

export default App;
