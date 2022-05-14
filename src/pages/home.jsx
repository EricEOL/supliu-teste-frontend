import Window from "../components/UI/window";
import Wrapper from "../components/UI/wrapper";
import SearchBar from "../components/UI/searchbar";

function Home() {
  return (
    <Wrapper>
      <Window title="Discografia">
        <SearchBar />
      </Window>
    </Wrapper>
  )
}

export default Home;