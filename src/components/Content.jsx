import Plot from "./Plot";
import House from "./House";
import WindTurbine from "./WindTurbine";
import StandingSolarPanel from "./StandingSolarPanel";
import RoofPanels from "./panels";
import Batteries from "./batteries";

const Content = (props) => {
    const { "roof-solar-panel": roofPanels, "standing-solar-panel": standingPanels, "wall-battery": batteries, "wind-turbine": windTurbines } = props.nftMetadata;

    console.log(roofPanels, standingPanels, batteries, windTurbines);
    console.log(props.nftMetadata);
    return (
        <>
            <Plot />
            <House />
            <WindTurbine amount={windTurbines} />
            <StandingSolarPanel amount={standingPanels} />
            <RoofPanels amount={roofPanels} />
            <Batteries amount={batteries} />
        </>
    );
};

export default Content;


