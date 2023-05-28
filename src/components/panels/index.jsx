import DualSolarPanelLeft from "./dualSolarPanelLeft";
import SingleSolarPanelLeft from "./SingleSolarPanelLeft";
import SingleSolarPanelRight from "./SingleSolarPanelRight";
import DualSolarPanelRight from "./dualSolarPanelRight";

const RoofPanels = (props) => {
    const panelAmount = 2;
    if (panelAmount === 4) {
        return (
            <group {...props} dispose={null}>
                <DualSolarPanelLeft />
                <DualSolarPanelRight />
            </group>
        )
    } else if (panelAmount === 3) {
        return (
            <group {...props} dispose={null}>
                <DualSolarPanelLeft />
                <SingleSolarPanelRight />
            </group>
        )
    } else if (panelAmount === 2) {
        return (
            <group {...props} dispose={null}>
                <SingleSolarPanelLeft />
                <SingleSolarPanelRight />
            </group>
        )
    } else if (panelAmount === 1) {
        return (
            <group {...props} dispose={null}>
                <SingleSolarPanelLeft />
            </group>
        )
    }
};

export default RoofPanels;


