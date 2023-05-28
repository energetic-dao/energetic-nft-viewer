import Plot from "./Plot";
import House from "./House";
import WindTurbine from "./WindTurbine";
import StandingSolarPanel from "./StandingSolarPanel";
import RoofPanels from "./panels";
import Batteries from "./batteries";

const Content = () => {
    return (
        <>
            <Plot />
            <House />
            <WindTurbine />
            <StandingSolarPanel />
            <RoofPanels />
            <Batteries />
        </>
    );
};

export default Content;


