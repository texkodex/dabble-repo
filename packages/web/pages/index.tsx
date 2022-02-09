import { NavBar } from "../components/NavBar";
import { Panel } from "../components/Panel";
import { Box } from "../components/Box";
import { PopoverImpl } from "../components/PopoverImpl";

const Index = () => {
  return (
    <>
      <Panel css={{ backgroundColor: "$violet4" }}>
        <NavBar />
        <Box>
          <PopoverImpl cond={false} />
        </Box>
        <Box
          id="control"
          css={{ mt: "$3" }}
          onClick={(e) => console.log("onclick:", e)}
        >
          {" "}
        </Box>
        <Box>
          <h4>TRANSACTION</h4>
        </Box>
        <Box>
          <h5>Overview</h5>
        </Box>
      </Panel>
    </>
  );
};

export default Index;
